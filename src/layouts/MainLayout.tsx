import Button from "@/components/common/Button"
import Navbar from "@/components/common/Navbar"
import { EnumIcons } from "@/constants/EnumIcons"
import { Instagram, MapPin, Menu, Twitter } from "lucide-react"
import Image from "next/image"
import { PropsWithChildren } from "react"

function MainLayout({ children }: PropsWithChildren<{}>) {
    return (
        <main>
            <Navbar>
                <Image
                    className="lg:block"
                    src={EnumIcons.LOGO_WHITE}
                    alt="logo"
                    width={50}
                    height={50}
                />
                <Menu size={30} className="block md:hidden" />
                <div className="hidden flex-row justify-between items-center lg:flex">
                    <Button variant="nav">Promotions</Button>
                    <Button variant="nav">Menu</Button>
                    <Button variant="nav">Fun Fact</Button>
                    <Button variant="nav">Our Story</Button>
                    <Button variant="nav">Feeback</Button>
                    <Button variant="nav">Membership</Button>
                </div>
                <div className="hidden lg:flex gap-2">
                    <Instagram size={30} />
                    <MapPin size={30} />
                </div>
            </Navbar>
            <main>{children}</main>
            <p>footer</p>
        </main>
    )
}

export default MainLayout
