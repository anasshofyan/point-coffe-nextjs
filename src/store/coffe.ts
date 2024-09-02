import { Coffee } from "@/types/coffeeTypes"
import { atom } from "jotai"
import { atomWithStorage } from "jotai/utils"

export const cart = atom<any[]>([])
export const totalCart = atom<number>(0)
export const cartAtom = atomWithStorage<Coffee[]>("cart", [])
