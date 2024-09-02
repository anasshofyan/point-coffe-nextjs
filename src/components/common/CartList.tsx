import CartItem from "./CartItem"
import { CartListProps } from "@/types/cartTypes"
import Title from "./Title"
import { totalCart } from "../../store/coffe"
import { useAtom } from "jotai"

const CartList: React.FC<CartListProps> = ({
    cart,
    incrementQuantity,
    decrementQuantity,
    goToDetail,
}) => {
    const [total] = useAtom(totalCart)
    return (
        <div className="space-y-4">
            <Title text={`Keranjang (${total || 0})`} />
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
