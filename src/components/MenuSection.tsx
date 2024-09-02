import React from "react"
import Container from "./common/Container"
import Image from "next/image"
import { EnumCofee } from "@/constants/EnumCoffee"
import { formatNumber } from "@/utils/format-number"
import { useSession } from "next-auth/react"
import useFetchCoffee from "@/hooks/useFetchCoffee"
import CoffeeSkeleton from "./skeletons/CoffeeSkeleton"

function MenuSection() {
    const { coffeeData, loading, error } = useFetchCoffee()

    if (loading) return <CoffeeSkeleton />

    if (error) {
        return (
            <div className="flex items-center justify-center h-full">
                <p className="text-red-500 text-lg">{error}</p>
            </div>
        )
    }

    return (
        <Container>
            <section className="mt-32">
                <h1 className="text-2xl text-center">Coffee Menu</h1>
                {coffeeData.map((coffee) => (
                    <div
                        key={coffee.id}
                        className="grid grid-cols-1 md:grid-cols-3 items-center"
                    >
                        <Image
                            src={coffee.image_url}
                            alt={coffee.name}
                            width={"0"}
                            height={"0"}
                            quality={70}
                            sizes="100vh"
                            className="w-full object-cover"
                        />
                        <div className="flex flex-col gap-7 col-span-2">
                            <h4 className="text-3xl text-primary font-times">
                                {coffee.region}
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
            </section>
        </Container>
    )
}

export default MenuSection
