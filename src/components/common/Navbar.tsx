import { EnumIcons } from "@/constants/EnumIcons"
import { LogIn, LogOut, Menu, ShoppingCart } from "lucide-react"
import Image from "next/image"
import Button from "./Button"
import Link from "next/link"
import { EnumNav } from "@/constants/EnumNav"
import { signOut, useSession } from "next-auth/react"
import { useAtomValue } from "jotai"
import { countCart } from "@/store/auth"

function Navbar() {
    const { data: session } = useSession<boolean>()
    const count = useAtomValue(countCart)

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
                    <Link
                        className="relative flex flex-row gap-2"
                        href="/auth/login"
                    >
                        <ShoppingCart />
                        <span className="absolute -top-3 left-3 bg-red-500 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                            {count}
                        </span>
                    </Link>
                </div>
                <div className="hidden lg:flex gap-2">
                    {(() => {
                        if (session === undefined) {
                            return (
                                <div className="animate-pulse flex space-x-4">
                                    <div className="rounded-full bg-gray-300 h-10 w-10"></div>
                                </div>
                            )
                        }

                        if (session) {
                            return (
                                <div
                                    className="flex flex-row gap-2 cursor-pointer"
                                    onClick={() => signOut()}
                                >
                                    <LogOut /> Log Out
                                </div>
                            )
                        }

                        return (
                            <Link
                                className="flex flex-row gap-2"
                                href="/auth/login"
                            >
                                <LogIn /> Log In
                            </Link>
                        )
                    })()}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
