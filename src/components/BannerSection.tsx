import { EnumIcons } from "@/constants/EnumIcons"
import Image from "next/image"
import React from "react"

function BannerSection() {
    return (
        <section>
            <div className="relative flex justify-center items-center h-[500px] w-full overflow-hidden">
                <Image
                    src={EnumIcons.HERO_2}
                    alt="hero image"
                    width={"0"}
                    height={"0"}
                    quality={100}
                    sizes="100vw"
                    style={{ width: "100%", height: "100%" }}
                    className="absolute top-0 left-0 h-full w-full object-cover"
                />
                <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/50 to-black/70 z-10"></div>
                <h1 className="relative text-white text-3xl md:text-2xl font-serif top-20 z-20">
                    Point Coffee Signature
                </h1>
                <div className="absolute bg-white/50 text-white py-2 px-4 text-xl rounded-full z-20">
                    Our Story
                </div>
            </div>
        </section>
    )
}

export default BannerSection
