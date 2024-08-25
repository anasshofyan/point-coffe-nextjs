import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
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
