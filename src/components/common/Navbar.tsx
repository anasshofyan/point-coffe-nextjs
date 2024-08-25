import { EnumIcons } from "@/constants/EnumIcons"
import { Instagram, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Button from "./Button"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-primary flex justify-between p-3 items-center text-light z-[9999]">
            <div className="max-w-screen-xl mx-auto px-5 w-full flex lg:flex-row flex-row-reverse justify-between md:flex-row md:px-5 sm:px-2 xs:px-1 items-center">
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
            </div>
        </nav>
    )
}

export default Navbar
