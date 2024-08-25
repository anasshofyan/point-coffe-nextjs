import Footer from "@/components/common/Footer"
import Navbar from "@/components/common/Navbar"
import { PropsWithChildren } from "react"

function MainLayout({ children }: PropsWithChildren<{}>) {
    return (
        <main>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </main>
    )
}

export default MainLayout
