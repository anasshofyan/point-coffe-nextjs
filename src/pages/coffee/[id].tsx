import CoffeeCard from "@/components/common/CoffeeCard"
import Container from "@/components/common/Container"
import type { Coffee } from "@/types/coffeeTypes"
import { GetServerSideProps, NextPage } from "next"
import Head from "next/head"
import React from "react"

interface CoffeeProps {
    coffeeData: Coffee[]
}

const Coffee: NextPage<CoffeeProps> = ({ coffeeData }) => {
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
        const coffeeData: Coffee[] = await res.json()

        return {
            props: {
                coffeeData,
            },
        }
    } catch (error) {
        return {
            props: {
                coffeeData: [],
            },
        }
    }
}

export default Coffee
