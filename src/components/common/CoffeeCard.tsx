import React, { useState, useMemo, useCallback, useEffect } from "react"
import Image from "next/image"
import { Coffee } from "@/types/coffeeTypes"
import { formatNumber } from "@/utils/format-number"
import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { cartAtom } from "@/store/coffe"

interface CoffeeCardProps {
    coffee: Coffee
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
    const [cart, setCart] = useAtom(cartAtom)
    const [quantity, setQuantity] = useState(0)
    const router = useRouter()

    useEffect(() => {
        const cartItem = cart.find((item) => item.id === coffee.id)
        if (cartItem) {
            setQuantity(cartItem.quantity)
        }
    }, [cart, coffee.id])

    const updateCart = useCallback(
        (newQuantity: number) => {
            const updatedCart = [...cart]
            const itemIndex = updatedCart.findIndex(
                (item) => item.id === coffee.id
            )
            if (itemIndex > -1) {
                if (newQuantity === 0) {
                    updatedCart.splice(itemIndex, 1)
                } else {
                    updatedCart[itemIndex].quantity = newQuantity
                }
            } else if (newQuantity > 0) {
                updatedCart.push({ ...coffee, quantity: newQuantity })
            }
            setCart(updatedCart)
        },
        [cart, coffee]
    )

    const goToDetail = () => {
        router.push(`/coffee/${coffee.id}`)
    }

    const incrementQuantity = () => {
        setQuantity((prev) => {
            const newQuantity = prev < 3 ? prev + 1 : 3
            updateCart(newQuantity)
            return newQuantity
        })
    }

    const decrementQuantity = () => {
        setQuantity((prev) => {
            const newQuantity = prev > 0 ? prev - 1 : 0
            updateCart(newQuantity)
            return newQuantity
        })
    }

    return (
        <div
            key={coffee.id}
            className="grid grid-cols-1 border p-5 my-10 md:grid-cols-3 md:border-none md:p-0 md:my-0 items-center cursor-pointer"
            onClick={goToDetail}
        >
            <Image
                src={coffee.image_url}
                alt={coffee.name}
                width={"0"}
                height={"0"}
                quality={70}
                sizes="100vh"
                className="w-full object-cover"
            />
            <div className="flex flex-col gap-7 col-span-2">
                <h4 className="text-3xl text-primary font-times">
                    {coffee.region}
                </h4>
                <h1 className="text-4xl text-primary font-times">
                    {coffee.name}
                </h1>
                <p className="text-lg text-secondary">{coffee.description}</p>
                <div className="flex flex-row items-start font-times">
                    <span className="mr-1 text-lg">Rp</span>
                    <span className="text-4xl font-semibold">
                        {formatNumber(coffee.price)}
                    </span>
                    <div className="ml-4 flex items-center">
                        <button
                            className="px-2 py-1 bg-gray-300 text-black rounded-l"
                            onClick={(e) => {
                                e.stopPropagation()
                                decrementQuantity()
                            }}
                        >
                            -
                        </button>
                        <span className="w-12 text-center border-t border-b border-gray-300">
                            {quantity}
                        </span>
                        <button
                            className="px-2 py-1 bg-gray-300 text-black rounded-r"
                            onClick={(e) => {
                                e.stopPropagation()
                                incrementQuantity()
                            }}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
