import { useSession, signIn } from "next-auth/react"
import { useRouter } from "next/router"
import Image from "next/image"
import { useAtom } from "jotai"
import { cartAtom } from "@/store/coffe"
import { formatNumber } from "@/utils/format-number"
import { useEffect, useState } from "react"
import Title from "@/components/common/Title"
import Container from "@/components/common/Container"
import PaymentMethodSection from "@/components/PaymentMethodSection"
import { EnumPayment } from "@/constants/EnumPayment"
import { paymentDetail } from "@/store/payment"

function Checkout() {
    const { data: session } = useSession()
    const router = useRouter()
    const [cart] = useAtom(cartAtom)
    const [, setPaymentDetail] = useAtom(paymentDetail)
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<
        string | null
    >(null)

    useEffect(() => {
        if (!session) {
            signIn("google", { callbackUrl: "/checkout" })
        }
    }, [session])

    if (!session) {
        return null
    }

    const totalAmount = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    )

    const handlePayment = () => {
        if (selectedPaymentMethod) {
            const paymentDetails = {
                user: {
                    name: session.user && session.user.name,
                    email: session.user && session.user.email,
                    image: session.user && session.user.image,
                },
                cart,
                totalAmount,
                paymentMethod: selectedPaymentMethod,
                date: new Date().toISOString(),
            }
            setPaymentDetail(paymentDetails)

            router.push("/payment/success")
        } else {
            alert("Please select a payment method.")
        }
    }

    return (
        <Container>
            <section className="container mx-auto p-4 mt-20">
                <Title text="Checkout" />
                <div className="flex items-center mb-6">
                    {session.user && session.user.image && (
                        <Image
                            src={session.user.image}
                            alt={session.user.name as string}
                            width={35}
                            height={35}
                            className="rounded-full mr-4"
                        />
                    )}
                    <div>
                        <h2 className="text-md font-semibold">
                            {session.user && session.user.name}
                        </h2>
                    </div>
                </div>
                <div className="border rounded-lg p-4 shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">
                        Order Details
                    </h2>
                    <ul>
                        {cart.map((item) => (
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
                            Rp {formatNumber(totalAmount)}
                        </span>
                    </div>
                </div>
                <Title text="Payment Method" />
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                    {EnumPayment.map((method) => (
                        <PaymentMethodSection
                            key={method.name}
                            name={method.name}
                            logo={method.thumbnail_url}
                            selected={selectedPaymentMethod === method.name}
                            onSelect={() =>
                                setSelectedPaymentMethod(method.name)
                            }
                        />
                    ))}
                </div>
                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                    onClick={handlePayment}
                >
                    Process Payment
                </button>
            </section>
        </Container>
    )
}

export default Checkout
