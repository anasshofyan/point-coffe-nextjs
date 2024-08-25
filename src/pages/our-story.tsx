import BannerSection from "@/components/BannerSection"
import StorySection from "@/components/StorySection"
import Head from "next/head"

function OurStory() {
    return (
        <>
            <Head>
                <title>Our Story | Point Coffe</title>
                <link rel="icon" href="/pointcoffe.png" />
                <meta
                    name="description"
                    content="Our story is about how we started and what we do."
                />
            </Head>
            <BannerSection />
            <StorySection />
        </>
    )
}

export default OurStory
