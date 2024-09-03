import { CoffeeProps } from "./coffeePropsTypes"

export interface CartItemProps {
    item: CoffeeProps
    incrementQuantity: (item: CoffeeProps) => void
    decrementQuantity: (item: CoffeeProps) => void
    goToDetail: (item: CoffeeProps) => void
}

export interface CartListProps {
    cart: CoffeeProps[]
    incrementQuantity: (item: CoffeeProps) => void
    decrementQuantity: (item: CoffeeProps) => void
    goToDetail: (item: CoffeeProps) => void
}

export interface CartSummarySectionProps {
    onCheckout: () => void
}
