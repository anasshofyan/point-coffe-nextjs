import React from "react"

interface TitleProps {
    text: string
}

function Title({ text }: TitleProps) {
    return (
        <h1 className="text-xl font-semibold text-primary my-8 text-center md:text-left">
            {text}
        </h1>
    )
}

export default Title
