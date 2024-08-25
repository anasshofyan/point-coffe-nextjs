import Image from "next/image"
import { Inter } from "next/font/google"
import HeroSection from "@/components/HeroSection"

export default function Home() {
    return (
        <div className={`"max-w-screen-xl mx-auto w-full`}>
            <HeroSection />
        </div>
    )
}
