import Image from "next/image"

interface CardImageProps {
    height?: string
    borderRadius?: {
        topLeft?: string
        topRight?: string
        bottomLeft?: string
        bottomRight?: string
    }
    src: string
    alt: string
}

const CardImage: React.FC<CardImageProps> = ({
    height = "200px",
    borderRadius,
    src,
    alt,
}) => {
    const style = {
        height,
        borderTopLeftRadius: borderRadius?.topLeft || "10px",
        borderTopRightRadius: borderRadius?.topRight || "10px",
        borderBottomLeftRadius: borderRadius?.bottomLeft || "0",
        borderBottomRightRadius: borderRadius?.bottomRight || "0",
    }

    return (
        <Image
            src={src}
            alt={alt}
            width={"0"}
            height={"0"}
            quality={70}
            sizes="100vh"
            className="w-full object-cover"
            style={style}
        />
    )
}

export default CardImage
