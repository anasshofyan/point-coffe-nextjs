import { EnumResponsive } from "@/constants/EnumResponsive"
import Image from "next/image"
import React from "react"
import { HeroImages } from "@/constants/EnumHero"
import Carousel from "react-multi-carousel"

function HeroSection() {
    return (
        <section>
            <Carousel responsive={EnumResponsive}>
                {HeroImages.map((hero, index) => (
                    <div
                        key={index}
                        className="flex justify-center items-center h-screen w-full overflow-hidden relative"
                    >
                        <Image
                            src={hero.src}
                            alt="Hero 1"
                            width={"0"}
                            height={"0"}
                            sizes="100vw"
                            style={{ width: "100%", height: "100%" }}
                            className="absolute top-0 left-0 object-cover"
                        />
                        <p className="flex flex-row absolute bg-primary px-5 py-3 rounded-full text-light uppercase font-medium">
                            {hero.icon}
                            {hero.buttonText}
                        </p>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default HeroSection
