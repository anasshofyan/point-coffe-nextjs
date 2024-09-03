interface CoffeeProps {
    id?: number
    name?: string
    description?: string
    image_url?: string
    price?: number
    region?: string
    weight?: number
    roast_level?: number
    flavor_profile?: string[]
    grind_option?: string[]
    quantity?: number
}
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
