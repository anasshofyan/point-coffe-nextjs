import React from "react"
import Image from "next/image"
import { Coffee } from "@/types/coffeeTypes"
import { formatNumber } from "@/utils/format-number"

interface CoffeeCardProps {
    coffee: Coffee
}

const CoffeeCard: React.FC<CoffeeCardProps> = ({ coffee }) => {
    return (
        <div
            key={coffee.id}
            className="grid grid-cols-1 border p-5 my-10 md:grid-cols-3 md:border-none md:p-0 md:my-0 items-center"
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
                <p className="text-lg text-secondary">{coffee.description}</p>
                <div className="flex flex-row items-start font-times">
                    <span className="mr-1 text-lg">Rp</span>
                    <span className="text-4xl font-semibold">
                        {formatNumber(coffee.price)}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default CoffeeCard
