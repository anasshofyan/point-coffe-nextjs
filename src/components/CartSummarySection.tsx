import { formatNumber } from "@/utils/format-number"
import { CartSummarySectionProps } from "@/types/cartTypes"
import Button from "./common/Button"
import { useRouter } from "next/router"
import { totalAmount } from "@/store/coffe"
import { useAtom } from "jotai"
import { useSession } from "next-auth/react"

const CartSummarySection: React.FC<CartSummarySectionProps> = ({
    onCheckout,
}) => {
    const router = useRouter()
    const [total] = useAtom(totalAmount)
    const { data: session } = useSession()

    return (
        <div className="border rounded-lg p-4 shadow-md flex justify-between items-center mt-4">
            <div>
                <h2 className="text-lg font-semibold mb-2">Cart Summary</h2>
                <p className="text-gray-600">Total: Rp {formatNumber(total)}</p>
            </div>
            <div className="flex-shrink-0">
                <Button
                    variant="primary"
                    onClick={() =>
                        session
                            ? router.push("/checkout")
                            : router.push("/auth/login")
                    }
                >
                    Checkout
                </Button>
            </div>
        </div>
    )
}

export default CartSummarySection
