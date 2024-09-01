import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import { PropsWithChildren } from "react"

function AuthLayout({ children }: PropsWithChildren<{}>) {
    return <main>{children}</main>
}

export default AuthLayout
