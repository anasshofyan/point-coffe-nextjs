import React from "react"

interface CardTitleProps {
    children: React.ReactNode
}

const CardTitle: React.FC<CardTitleProps> = ({ children }) => {
    return <h2 className="text-xl font-bold text-primary my-2">{children}</h2>
}

export default CardTitle
