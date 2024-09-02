import { atomWithStorage } from "jotai/utils"

interface PaymentDetails {
    user: {
        name: string
        email: string
        image?: string
    }
    cart: Array<{
        id: string
        name: string
        price: number
        quantity: number
    }>
    totalAmount: number
    paymentMethod: string
    date: string
}

export const paymentDetail = atomWithStorage<PaymentDetails | null>(
    "paymentDetails",
    null
)
