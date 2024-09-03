interface CoffeeProps {
    id?: number | undefined
    name?: string | undefined
    region?: string | undefined
    description?: string | undefined
    price?: number | undefined
    image_url?: string | undefined
}
export interface OrderDetailsProps {
    cart: CoffeeProps[] | [] | null | undefined | any | {}
    totalAmount: number | null | undefined | any | {}
}
