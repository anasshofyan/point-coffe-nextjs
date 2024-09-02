import React from "react"
import Container from "../common/Container"

interface CoffeeSkeletonProps {
    count: number
}

const CoffeeSkeleton: React.FC<CoffeeSkeletonProps> = ({ count }) => {
    return (
        <Container>
            <section className="my-32 flex flex-col gap-8">
                {Array.from({ length: count }).map((_, index) => (
                    <div
                        key={index}
                        className="grid grid-cols-1 md:grid-cols-3 items-center gap-7"
                    >
                        <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
                        <div className="flex flex-col gap-7 col-span-2">
                            <div className="h-8 bg-gray-300 animate-pulse w-1/3"></div>
                            <div className="h-10 bg-gray-300 animate-pulse w-1/2"></div>
                            <div className="h-6 bg-gray-300 animate-pulse w-full"></div>
                            <div className="flex flex-row items-start">
                                <div className="h-10 bg-gray-300 animate-pulse w-24"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </Container>
    )
}

export default CoffeeSkeleton
