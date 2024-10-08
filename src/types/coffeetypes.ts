export interface CoffeeProps {
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

export interface CoffeePointProps {
    coffee: CoffeeProps
}
