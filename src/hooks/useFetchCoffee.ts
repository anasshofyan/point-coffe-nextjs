import { Coffee } from "@/types/coffeeTypes"
import { useState, useEffect } from "react"

const useFetchCoffee = () => {
    const [coffeeData, setCoffeeData] = useState<Coffee[]>([])
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchCoffee = async () => {
            try {
                const response = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}`
                )
                if (!response.ok) {
                    setError("Failed to fetch coffee data")
                    setLoading(false)
                    return
                }
                const data = await response.json()
                setCoffeeData(data)
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message)
                    return
                }

                setError("An unknown error occurred")
            } finally {
                setLoading(false)
            }
        }

        fetchCoffee()
    }, [])

    return { coffeeData, loading, error }
}

export default useFetchCoffee
