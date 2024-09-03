import CartItem from "./CartItem"

interface CartListProps {
    cart: any[]
    incrementQuantity: (item: any) => void
    decrementQuantity: (item: any) => void
    goToDetail: (item: any) => void
}

const CartList: React.FC<CartListProps> = ({
    cart,
    incrementQuantity,
    decrementQuantity,
    goToDetail,
}) => {
    return (
        <div className="space-y-4">
            {cart.map((item) => (
                <CartItem
                    key={item.id}
                    item={item}
                    incrementQuantity={incrementQuantity}
                    decrementQuantity={decrementQuantity}
                    goToDetail={goToDetail}
                />
            ))}
        </div>
    )
}

export default CartList
