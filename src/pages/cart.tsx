import Container from "@/components/common/Container"
import Head from "next/head"
import { useAtom } from "jotai"
import Image from "next/image"
import { formatNumber } from "@/utils/format-number"
import { cartAtom } from "@/store/coffe"
import { useCallback, useState } from "react"
import { useRouter } from "next/router"
import { Coffee } from "@/types/coffeeTypes"
import CartList from "@/components/common/CartList"

function Cart() {
    const [cart, setCart] = useAtom(cartAtom)
    const router = useRouter()

    const updateCart = useCallback(
        (coffee: Coffee, newQuantity: number) => {
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
        [cart, setCart]
    )

    const goToDetail = (coffee: Coffee) => {
        router.push(`/coffee/${coffee.id}`)
    }

    const incrementQuantity = (item: Coffee) => {
        updateCart(item, item.quantity + 1)
    }

    const decrementQuantity = (item: Coffee) => {
        updateCart(item, item.quantity - 1)
    }

    return (
        <>
            <Head>
                <title>Cart | Point Coffe</title>
                <link rel="icon" href="/pointcoffe.png" />
                <meta
                    name="description"
                    content="Cart of Point Coffe, the best coffee shop in town."
                />
            </Head>
            <Container>
                <section className="mt-16">
                    <h1 className="text-3xl font-bold mb-6">Cart</h1>
                    {cart.length === 0 ? (
                        <div className="border rounded-lg p-4 shadow-md text-center">
                            <h2 className="text-xl font-semibold mb-2">
                                Your cart is empty
                            </h2>
                            <p className="text-gray-600">
                                Add some items to your cart to see them here.
                            </p>
                        </div>
                    ) : (
                        <CartList
                            cart={cart}
                            incrementQuantity={incrementQuantity}
                            decrementQuantity={decrementQuantity}
                            goToDetail={goToDetail}
                        />
                    )}
                </section>
            </Container>
        </>
    )
}

export default Cart
