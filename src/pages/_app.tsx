import "@/styles/globals.css"
import type { AppProps } from "next/app"
import MainLayout from "@/layouts/MainLayout"
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import AuthLayout from "@/layouts/AuthLayout"

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const isAuthPage = router.pathname.startsWith("/auth")

    const getLayout = isAuthPage
        ? (page: ReactNode) => <AuthLayout>{page}</AuthLayout>
        : (page: ReactNode) => <MainLayout>{page}</MainLayout>

    return getLayout(<Component {...pageProps} />)
}
