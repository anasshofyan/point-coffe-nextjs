import HeroSection from "@/components/HeroSection"
import MembershipSection from "@/components/MembershipSection"
import OurStorySection from "@/components/OurStorySection"
import SeasonalMenuSection from "@/components/SeasonalMenuSection"
import Head from "next/head"

export default function Home() {
    return (
        <>
            <Head>
                <title>Point Coffe</title>
                <link rel="icon" href="/pointcoffe.png" />
                <meta
                    name="description"
                    content="Point Coffe is a coffee shop that serves the best coffee in town."
                />
            </Head>
            <HeroSection />
            <SeasonalMenuSection />
            <OurStorySection />
            <MembershipSection />
        </>
    )
}
