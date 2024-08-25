import HeroSection from "@/components/HeroSection"
import MembershipSection from "@/components/MembershipSection"
import OurStorySection from "@/components/OurStorySection"
import SeasonalMenuSection from "@/components/SeasonalMenuSection"

export default function Home() {
    return (
        <>
            <HeroSection />
            <SeasonalMenuSection />
            <OurStorySection />
            <MembershipSection />
        </>
    )
}
