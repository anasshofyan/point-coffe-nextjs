import React, { FC, ReactNode } from "react"

interface ButtonProps {
    children: ReactNode
    variant?: string
}

const Button: FC<ButtonProps> = ({ variant, children, ...props }) => {
    const baseClasses =
        "border-none py-2 px-4 flex justify-center items-center text-center no-underline inline-block text-base m-1 cursor-pointer rounded-full transition-colors duration-200 uppercase"
    const primaryClasses = " text-light bg-primary hover:bg-success"
    const secondaryClasses = "text-primary bg-transparent"

    const buttonClasses = `${baseClasses} ${
        variant === "primary" ? primaryClasses : secondaryClasses
    }`
    return (
        <button className={buttonClasses} {...props}>
            {children}
        </button>
    )
}

export default Button
