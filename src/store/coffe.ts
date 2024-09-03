import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export interface CoffeeProps {
    id: number
    name: string
    region: string
    description: string
    price: number
    image_url: string
    quantity?: number
}

export const cartAtom = atomWithStorage<CoffeeProps[]>("cart", [])
export const totalCart = atom<number>((get) => {
    const cartData: CoffeeProps[] = get(cartAtom)
    return cartData.reduce((acc, item) => acc + (item.quantity ?? 0), 0)
})
export const totalAmount = atom<number>((get) => {
    const cartData: CoffeeProps[] = get(cartAtom)
    return cartData.reduce(
        (acc, item) => acc + (item.price ?? 0) * (item.quantity ?? 0),
        0
    )
})
