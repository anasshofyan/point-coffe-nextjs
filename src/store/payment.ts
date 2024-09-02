import { UserDetailsProps } from "@/types/userTypes"
import { atomWithStorage } from "jotai/utils"

interface PaymentDetails {
    user?: UserDetailsProps
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
