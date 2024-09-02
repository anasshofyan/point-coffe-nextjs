import Image from "next/image"
import { formatNumber } from "@/utils/format-number"
import { Coffee } from "@/types/coffeeTypes"
import { CartItemProps } from "@/types/cartTypes"

const CartItem: React.FC<CartItemProps> = ({
    item,
    incrementQuantity,
    decrementQuantity,
    goToDetail,
}) => {
    return (
        <div
            key={item.id}
            className="border rounded-lg p-4 shadow-md flex items-center"
            onClick={() => goToDetail(item)}
        >
            <Image
                src={item.image_url}
                alt={item.name}
                width={100}
                height={100}
                className="object-cover rounded-md mr-4"
            />
            <div className="flex-1">
                <p className="text-primary mb-2 font-times">{item.region}</p>
                <h2 className="text-xl font-semibold mb-2 font-times text-primary">
                    {item.name}
                </h2>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-lg font-semibold">
                    Rp {formatNumber(item.price)}
                </p>
            </div>
            <div className="ml-4 flex items-center">
                <button
                    className="px-2 py-1 bg-gray-300 text-black rounded-l"
                    onClick={(e) => {
                        e.stopPropagation()
                        decrementQuantity(item)
                    }}
                >
                    -
                </button>
                <span className="w-12 text-center border-t border-b border-gray-300">
                    {item.quantity}
                </span>
                <button
                    className="px-2 py-1 bg-gray-300 text-black rounded-r"
                    onClick={(e) => {
                        e.stopPropagation()
                        incrementQuantity(item)
                    }}
                >
                    +
                </button>
            </div>
        </div>
    )
}

export default CartItem
