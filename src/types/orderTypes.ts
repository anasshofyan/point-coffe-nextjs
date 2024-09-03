import { CoffeeProps } from "./coffeeTypes"

export interface OrderDetailsProps {
    cart: CoffeeProps[] | [] | null | undefined | any | {}
    totalAmount: number | null | undefined | any | {}
}
