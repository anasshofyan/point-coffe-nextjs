import React from "react"
import Title from "./common/Title"
import Container from "./common/Container"
import Image from "next/image"
import { EnumIcons } from "@/constants/EnumIcons"

function SeasonalMenuSection() {
    return (
        <Container>
            <Title text="Seasonal Menu" />
            <Image
                src={EnumIcons.THUMB_1}
                height="0"
                width={"0"}
                className="w-full object-cover"
                sizes="100vh"
                quality={70}
                style={{ width: "100%", height: "500px" }}
                alt="Menu Point Coffe"
            />
        </Container>
    )
}

export default SeasonalMenuSection
