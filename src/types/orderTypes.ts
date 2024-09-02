import { Coffee } from "./coffeeTypes"

export interface OrderDetailsProps {
    cart: Coffee[]
    totalAmount: number
}
