import { Coffee } from "@/types/coffeeTypes"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const cartAtom = atomWithStorage<Coffee[]>("cart", [])
export const totalCart = atom<number>((get) => {
    const cartData: Coffee[] = get(cartAtom)
    return cartData.reduce((acc, item) => acc + item.quantity, 0)
})
