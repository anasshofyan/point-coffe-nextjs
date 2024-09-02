import { FC } from "react"
import { formatNumber } from "@/utils/format-number"
import { OrderDetailsProps } from "@/types/orderTypes"

const OrderDetailSection: FC<OrderDetailsProps> = ({ cart, totalAmount }) => {
    return (
        <div className="border rounded-lg p-4 shadow-md">
            <h2 className="text-lg font-semibold mb-4">Order Details</h2>
            <ul>
                {cart.map((item) => (
                    <li key={item.id} className="flex justify-between mb-2">
                        <span>
                            {item.name} x {item.quantity} pcs
                        </span>
                        <span>
                            Rp {formatNumber(item.price * item.quantity)}
                        </span>
                    </li>
                ))}
            </ul>
            <div className="flex justify-between mt-4 pt-4 border-t">
                <span className="text-md font-semibold">Total Amount</span>
                <span className="text-md font-semibold">
                    Rp {formatNumber(totalAmount)}
                </span>
            </div>
        </div>
    )
}

export default OrderDetailSection
