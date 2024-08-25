import HeroSection from "@/components/HeroSection"
import SeasonalMenuSection from "@/components/SeasonalMenuSection"

export default function Home() {
    return (
        <div className={`"max-w-screen-xl mx-auto w-full`}>
            <HeroSection />
            <SeasonalMenuSection />
        </div>
    )
}
