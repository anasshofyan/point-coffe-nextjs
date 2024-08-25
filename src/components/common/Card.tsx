import React from "react"
import classNames from "classnames"

interface CardProps {
    noBorder?: boolean
    children: React.ReactNode
}

const Card: React.FC<CardProps> = ({ noBorder, children }) => {
    const cardClasses = classNames(
        "rounded-lg w-full flex flex-col justify-between items-center text-center pb-2",
        {
            "border border-secondary-33": !noBorder,
            "hover:shadow-md transition-shadow duration-200": !noBorder,
        }
    )

    return <div className={cardClasses}>{children}</div>
}

export default Card
