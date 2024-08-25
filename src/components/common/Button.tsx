import React, { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    variant?: "primary" | "secondary" | "nav"
}

const Button: FC<ButtonProps> = ({
    variant = "secondary",
    children,
    ...props
}) => {
    const baseClasses =
        "border-none py-2 px-4 flex justify-center items-center text-center no-underline inline-block text-base m-1 cursor-pointer rounded-full transition-colors duration-200 uppercase"
    const primaryClasses = "text-light bg-primary hover:bg-success"
    const secondaryClasses = "text-primary bg-transparent"
    const navClasses =
        "bg-primary border-none text-white py-3 px-5 text-center no-underline inline-block text-base m-1 cursor-pointer uppercase hover:bg-light hover:text-primary transition-colors duration-200"

    const getButtonClasses = () => {
        switch (variant) {
            case "primary":
                return `${baseClasses} ${primaryClasses}`
            case "nav":
                return navClasses
            case "secondary":
            default:
                return `${baseClasses} ${secondaryClasses}`
        }
    }

    return (
        <button className={getButtonClasses()} {...props}>
            {children}
        </button>
    )
}

export default Button
