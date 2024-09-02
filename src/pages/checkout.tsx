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
import Button from "@/components/common/Button"
import OrderDetailSection from "@/components/OrderDetailSection"
import UserDetailSection from "@/components/UserDetailSection"

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
            router.push("/login")
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

            router.push("/success")
        } else {
            alert("Please select a payment method.")
        }
    }

    return (
        <Container>
            <section className="container mx-auto p-4 mt-20">
                <Title text="Checkout" />
                <UserDetailSection user={session.user} />
                <OrderDetailSection cart={cart} totalAmount={totalAmount} />
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
                <Button variant="primary" onClick={handlePayment}>
                    Process Payment
                </Button>
            </section>
        </Container>
    )
}

export default Checkout
