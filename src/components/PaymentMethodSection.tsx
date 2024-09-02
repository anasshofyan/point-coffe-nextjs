import React from "react"
import Image from "next/image"

interface PaymentMethodSectionProps {
    name: string
    logo: string
    selected: boolean
    onSelect: () => void
}

const PaymentMethodSection: React.FC<PaymentMethodSectionProps> = ({
    name,
    logo,
    selected,
    onSelect,
}) => {
    return (
        <div
            className={`border-2 rounded-lg p-4 shadow-md flex items-center cursor-pointer ${selected ? "border-primary" : "border-gray-300"}`}
            onClick={onSelect}
        >
            <Image
                src={logo}
                alt={name}
                width={70}
                height={70}
                className="mr-4"
            />
        </div>
    )
}

export default PaymentMethodSection
