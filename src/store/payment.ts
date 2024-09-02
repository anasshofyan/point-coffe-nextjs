import { atomWithStorage } from "jotai/utils"

export interface User {
    name: string | null | undefined
    email: string | null | undefined
    image: string | null | undefined
}

export interface Coffee {
    id: string
    name: string
    price: number
}

export interface PaymentDetails {
    user: User
    cart: {}
    totalAmount: number
    paymentMethod: string
    date: string
}

export const paymentDetail = atomWithStorage<PaymentDetails | null>(
    "paymentDetails",
    null
)
