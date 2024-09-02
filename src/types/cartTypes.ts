import { Coffee } from "./coffeeTypes"

export interface CartItemProps {
    item: Coffee
    incrementQuantity: (item: Coffee) => void
    decrementQuantity: (item: Coffee) => void
    goToDetail: (item: Coffee) => void
}

export interface CartListProps {
    cart: Coffee[]
    incrementQuantity: (item: Coffee) => void
    decrementQuantity: (item: Coffee) => void
    goToDetail: (item: Coffee) => void
}

export interface CartSummarySectionProps {
    onCheckout: () => void
}
