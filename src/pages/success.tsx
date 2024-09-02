import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Container from "@/components/common/Container"
import Title from "@/components/common/Title"
import Image from "next/image"
import { formatNumber } from "@/utils/format-number"
import { paymentDetail } from "@/store/payment"

function Success() {
    const [paymentDetails] = useAtom(paymentDetail)
    const router = useRouter()

    useEffect(() => {
        if (!paymentDetails) {
            router.push("/") // Redirect to home if no payment details
        }
    }, [paymentDetails, router])

    if (!paymentDetails) {
        return null // Show nothing while redirecting
    }

    return (
        <Container>
            <section className="container mx-auto p-4 mt-20">
                <Title text="Payment Successful" />
                <div className="border rounded-lg p-4 shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-4">
                        Order Details
                    </h2>
                    <ul>
                        {paymentDetails.cart.map((item) => (
                            <li
                                key={item.id}
                                className="flex justify-between mb-2"
                            >
                                <span>
                                    {item.name} x {item.quantity} pcs
                                </span>
                                <span>
                                    Rp{" "}
                                    {formatNumber(item.price * item.quantity)}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="flex justify-between mt-4 pt-4 border-t">
                        <span className="text-xl font-semibold">
                            Total Amount
                        </span>
                        <span className="text-xl font-semibold">
                            Rp {formatNumber(paymentDetails.totalAmount)}
                        </span>
                    </div>
                </div>
                <div className="border rounded-lg p-4 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        Payment Method
                    </h2>
                    <div className="flex items-center">
                        <Image
                            src={paymentDetails.paymentMethod.logo as string}
                            alt={paymentDetails.paymentMethod.name as string}
                            width={50}
                            height={50}
                            className="mr-4"
                        />
                        <span className="text-lg font-semibold">
                            {paymentDetails.paymentMethod.name as string}
                        </span>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Success
