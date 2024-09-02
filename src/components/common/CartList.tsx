import CartItem from "./CartItem"
import { CartListProps } from "@/types/cartTypes"

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
