import Image from "next/image"
import React, { FC, ReactNode, ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
    variant?: "primary" | "secondary" | "nav" | "tertiary"
    icon?: string
}

const Button: FC<ButtonProps> = ({
    variant = "secondary",
    children,
    icon,
    ...props
}) => {
    const baseClasses =
        "border-none py-2 px-4 w-full flex justify-center items-center text-center no-underline inline-block text-base m-1 cursor-pointer rounded-full transition-colors duration-200"
    const primaryClasses = "text-light bg-primary hover:bg-success uppercase"
    const secondaryClasses = "text-primary bg-transparent uppercase"
    const tertiaryClasses = "text-dark bg-transparent shadow-md hover:shadow-lg"
    const navClasses =
        "bg-primary border-none text-white py-3 px-5 text-center no-underline inline-block text-base m-1 cursor-pointer uppercase hover:bg-light hover:text-primary transition-colors duration-200 uppercase"

    const getButtonClasses = () => {
        switch (variant) {
            case "primary":
                return `${baseClasses} ${primaryClasses}`
            case "nav":
                return navClasses
            case "secondary":
            default:
                return `${baseClasses} ${secondaryClasses}`
            case "tertiary":
                return `${baseClasses} ${tertiaryClasses}`
        }
    }

    return (
        <button className={getButtonClasses()} {...props}>
            {icon && <Image src={icon} alt="icon" className="mr-2 size-4" />}{" "}
            {/* Menampilkan ikon jika ada */}
            {children}
        </button>
    )
}

export default Button
