import CoffeeCard from "@/components/common/CoffeeCard"
import Container from "@/components/common/Container"
import CoffeeSkeleton from "@/components/skeletons/CoffeeSkeleton"
import { CoffeeProps } from "@/types/coffeeTypes"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import React, { useState, useEffect } from "react"

interface CoffeePointProps {
    coffeeData: CoffeeProps[]
    error: string | null
}

const Coffee: NextPage<CoffeePointProps> = ({ coffeeData, error }) => {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (coffeeData.length > 0 || error) {
            setLoading(false)
        }
    }, [coffeeData, error])

    if (loading) return <CoffeeSkeleton count={1} />

    if (error)
        return (
            <Container>
                <div className="flex items-center justify-center h-full">
                    <p className="text-red-500 text-lg">{error}</p>
                </div>
            </Container>
        )

    if (!coffeeData || coffeeData.length === 0) {
        return (
            <Container>
                <div className="flex items-center justify-center h-full">
                    <p className="text-red-500 text-lg">
                        Coffee data not found
                    </p>
                </div>
            </Container>
        )
    }

    return (
        <>
            <Head>
                <title>{coffeeData[0].name} | Point Coffee</title>
                <meta name="description" content={coffeeData[0].description} />
                <link rel="icon" href="/pointcoffe.png" />
                <meta property="og:image" content={coffeeData[0].image_url} />
            </Head>
            <Container>
                <section className="mt-16 md:mt-32">
                    {coffeeData.map((coffee) => (
                        <CoffeeCard key={coffee.id} coffee={coffee} />
                    ))}
                </section>
            </Container>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { id } = context.params!

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${id}`)
        if (!res.ok) {
            throw new Error("Failed to fetch coffee data")
        }
        const coffeeData: CoffeeProps[] = await res.json()

        return {
            props: {
                coffeeData,
                error: null,
            },
        }
    } catch (error) {
        let errorMessage = "An unknown error occurred"
        if (error instanceof Error) {
            errorMessage = error.message
        }
        return {
            props: {
                coffeeData: [],
                error: errorMessage,
            },
        }
    }
}

export default Coffee
