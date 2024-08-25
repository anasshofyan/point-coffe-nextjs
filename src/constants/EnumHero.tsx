import { CupSoda, GlassWater, Milk, Wine } from "lucide-react"
import { EnumIcons } from "./EnumIcons"

interface HeroImage {
    src: string
    buttonText: string
    icon: JSX.Element
}

export const HeroImages: HeroImage[] = [
    {
        src: EnumIcons.HERO_1,
        buttonText: "FRAPPE SERIES",
        icon: (
            <CupSoda
                size={20}
                style={{ marginRight: "12px", marginBottom: "-4px" }}
            />
        ),
    },
    {
        src: EnumIcons.HERO_2,
        buttonText: "KOPI BAPER SERIES",
        icon: (
            <GlassWater
                size={20}
                style={{ marginRight: "12px", marginBottom: "-4px" }}
            />
        ),
    },
    {
        src: EnumIcons.HERO_3,
        buttonText: "MILK SERIES",
        icon: (
            <Milk
                size={20}
                style={{ marginRight: "12px", marginBottom: "-4px" }}
            />
        ),
    },
    {
        src: EnumIcons.HERO_4,
        buttonText: "TEA SERIES",
        icon: (
            <Wine
                size={20}
                style={{ marginRight: "12px", marginBottom: "-4px" }}
            />
        ),
    },
]
