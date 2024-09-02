import { atom } from "jotai"

export const cart = atom<any[]>([])
export const totalCart = atom<number>(0)
