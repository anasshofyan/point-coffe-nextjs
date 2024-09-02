import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import SessionWrapper from "@/components/SessionWrapper"
import { PropsWithChildren } from "react"

function MainLayout({ children }: PropsWithChildren<{}>) {
    return (
        <SessionWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </SessionWrapper>
    )
}

export default MainLayout
