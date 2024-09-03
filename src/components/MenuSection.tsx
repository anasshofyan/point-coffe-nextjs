import React from "react"
import Container from "./common/Container"
import CoffeeSkeleton from "./skeletons/CoffeeSkeleton"
import useFetchCoffee from "@/hooks/useFetchCoffee"
import CoffeeCard from "./common/CoffeeCard"

function MenuSection() {
    const { coffeeData, loading, error } = useFetchCoffee()

    if (loading) return <CoffeeSkeleton count={10} />

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
                <h1 className="text-3xl text-center mb-6 font-times">
                    Coffee Menu
                </h1>
                {coffeeData.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee} />
                ))}
            </section>
        </Container>
    )
}

export default MenuSection
