import { EnumIcons } from "@/constants/EnumIcons"
import { Instagram, LogIn, MapPin, Menu } from "lucide-react"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
import { EnumNav } from "@/constants/EnumNav"

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-primary flex justify-between p-3 items-center text-light z-[9999]">
            <div className="max-w-screen-xl mx-auto px-5 w-full flex lg:flex-row flex-row-reverse justify-between md:flex-row md:px-5 sm:px-2 xs:px-1 items-center">
                <Link href="/">
                    <Image
                        className="lg:block"
                        src={EnumIcons.LOGO_WHITE}
                        alt="logo"
                        width={50}
                        height={50}
                    />
                </Link>
                <Menu size={30} className="block md:hidden" />
                <div className="hidden flex-row justify-between items-center lg:flex">
                    {EnumNav.map((item, index) => (
                        <Button key={index} variant="nav">
                            <Link href={item.url}>{item.label}</Link>
                        </Button>
                    ))}
                </div>
                <div className="hidden lg:flex gap-2">
                    <Link className="flex flex-row gap-2" href="/auth/login">
                        <LogIn /> Masuk
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
