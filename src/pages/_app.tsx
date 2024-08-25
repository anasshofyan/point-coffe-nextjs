import "@/styles/globals.css"
import type { AppProps } from "next/app"
import MainLayout from "@/layouts/MainLayout"
import "react-multi-carousel/lib/styles.css"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps} />
        </MainLayout>
    )
}
