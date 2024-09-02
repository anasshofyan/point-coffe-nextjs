import { useAtom } from "jotai"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Container from "@/components/common/Container"
import Title from "@/components/common/Title"
import Image from "next/image"
import { formatNumber } from "@/utils/format-number"
import { paymentDetail } from "@/store/payment"
import OrderDetailSection from "@/components/OrderDetailSection"
import UserDetailSection from "@/components/UserDetailSection"
import { formatDate } from "@/utils/format-date"
import { useSession } from "next-auth/react"
import { cartAtom } from "@/store/coffe"

function Success() {
    const { data: session, status } = useSession()
    const [, setCart] = useAtom(cartAtom)
    const [paymentDetails, setPaymentDetails] = useAtom(paymentDetail)
    const router = useRouter()

    useEffect(() => {
        if (!session) {
            router.push("/auth/login")
        } else if (paymentDetails) {
            setCart([])
        }
    }, [session, paymentDetails, router, setPaymentDetails, setCart])

    if (!session) {
        return null
    }

    if (!session) {
        return null
    }

    return (
        <Container>
            <section className="container mx-auto p-4 mt-20">
                <Title text="Payment Successful" />
                <UserDetailSection user={paymentDetails?.user} />
                <OrderDetailSection
                    cart={paymentDetails?.cart}
                    totalAmount={paymentDetails?.totalAmount}
                />
                <div className="border rounded-lg p-4 shadow-md mt-6">
                    <div className="flex justify-between">
                        <h2 className="text-md font-semibold">
                            Payment Method
                        </h2>
                        <span className="text-md font-semibold">
                            Bank {paymentDetails?.paymentMethod}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <h2 className="text-md font-semibold">Tanggal</h2>
                        <span className="text-md">
                            {formatDate(paymentDetails?.date)}
                        </span>
                    </div>
                </div>
            </section>
        </Container>
    )
}

export default Success
