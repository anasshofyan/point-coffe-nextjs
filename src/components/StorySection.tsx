import React from "react"
import Container from "./common/Container"
import { EnumIcons } from "@/constants/EnumIcons"
import Image from "next/image"

function StorySection() {
    return (
        <Container>
            <Image
                width={"0"}
                height={"0"}
                style={{ width: "100%", height: "100%" }}
                sizes="100vw"
                quality={100}
                src={EnumIcons.STORY_1}
                alt="Story 1"
            />
            <p className="text-base text-secondary">
                1. 100% INDONESIAN COFFEE BEAN : Point Coffee menggunakan 100%
                biji kopi asli Indonesia dengan kualitas terbaik
            </p>
            <Image
                width={"0"}
                height={"0"}
                style={{ width: "100%", height: "100%" }}
                sizes="100vw"
                quality={100}
                src={EnumIcons.STORY_2}
                alt="Story 2"
            />
            <p className="text-base text-secondary">
                2. FRESHLY ROASTED : Kopi Point Coffee dipanggang setiap hari
                agar selalu fresh dan nikmat
            </p>
            <Image
                width={"0"}
                height={"0"}
                style={{ width: "100%", height: "100%" }}
                sizes="100vw"
                quality={100}
                src={EnumIcons.STORY_3}
                alt="Story 3"
            />
            <p className="text-base text-secondary">
                3. SPECIAL RECIPE : Kopi Point Coffee memiliki resep khusus yang
                membuat rasanya unik dan berbeda
            </p>
            <Image
                width={"0"}
                height={"0"}
                style={{ width: "100%", height: "100%" }}
                sizes="100vw"
                quality={100}
                src={EnumIcons.STORY_4}
                alt="Story 4"
            />
            <p className="text-base text-secondary">
                4. BEST QUALITY : Kopi Point Coffee memiliki kualitas terbaik
                yang terjamin
            </p>
        </Container>
    )
}

export default StorySection
