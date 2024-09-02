import React from "react"
import Image from "next/image"

interface ErrorFetchProps {
    message: string
}

const ErrorFetch: React.FC<ErrorFetchProps> = ({ message }) => {
    return (
        <div className="flex flex-col items-center justify-center h-full p-4">
            <Image
                src="/path/to/error-image.png" // Ganti dengan path gambar error Anda
                alt="Error"
                width={200}
                height={200}
                className="mb-4"
            />
            <p className="text-red-500 text-lg">{message}</p>
        </div>
    )
}

export default ErrorFetch
