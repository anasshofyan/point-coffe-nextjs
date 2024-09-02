import { Coffee } from "./coffeeTypes"

export interface OrderDetailsProps {
    cart: Coffee[] | [] | null | undefined | any | {}
    totalAmount: number | null | undefined | any | {}
}
