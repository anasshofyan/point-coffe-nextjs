import React from "react"
import Container from "./common/Container"
import Carousel from "react-multi-carousel"
import { EnumResponsive } from "@/constants/EnumResponsive"
import Image from "next/image"
import { EnumIcons } from "@/constants/EnumIcons"
import { EnumCofee } from "@/constants/EnumCoffee"
import { formatNumber } from "@/utils/format-number"
import { signIn, useSession } from "next-auth/react"
import Button from "./common/Button"

function MenuSection() {
    const { data: session } = useSession()
    if (!session) return null
    if (!session) {
        return (
            <Container>
                <div className="flex flex-col items-center justify-center h-screen">
                    <Image
                        src={EnumIcons.LOGO_DEFAULT}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <h1 className="text-4xl text-primary font-times">
                        Please login to see the menu
                    </h1>
                    <Button variant="primary" onClick={() => signIn("google")}>
                        Login with Google
                    </Button>
                    <Button variant="primary" onClick={() => signIn("github")}>
                        Login with GitHub
                    </Button>
                </div>
            </Container>
        )
    }

    return (
        <Container>
            <p>Welcome Back {session?.user?.name}</p>
            <Carousel
                className="flex flex-col justify-center h-screen"
                responsive={EnumResponsive}
            >
                {EnumCofee.map((coffee, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 items-center"
                    >
                        <Image
                            src={coffee.image}
                            alt={coffee.name}
                            width={"0"}
                            height={"0"}
                            quality={70}
                            sizes="100vh"
                            className="w-full object-cover"
                        />
                        <div className="flex flex-col gap-7 col-span-2">
                            <h4 className="text-3xl text-primary font-times">
                                {coffee.series}
                            </h4>
                            <h1 className="text-4xl text-primary font-times">
                                {coffee.name}
                            </h1>
                            <p className="text-lg text-secondary">
                                {coffee.description}
                            </p>
                            <div className="flex flex-row items-start font-times">
                                <span className="mr-1 text-lg">Rp</span>
                                <span className="text-4xl font-semibold">
                                    {formatNumber(coffee.price)}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Carousel>
        </Container>
    )
}

export default MenuSection
