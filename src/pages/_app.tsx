import "@/styles/globals.css"
import type { AppProps } from "next/app"
import MainLayout from "@/layouts/MainLayout"
import "react-multi-carousel/lib/styles.css"
import { useRouter } from "next/router"
import { ReactNode } from "react"
import AuthLayout from "@/layouts/AuthLayout"
import SessionWrapper from "@/components/SessionWrapper"

export default function App({ Component, pageProps }: AppProps) {
    const router = useRouter()
    const isAuthPage = router.pathname.startsWith("/auth")

    const getLayout = isAuthPage
        ? (page: ReactNode) => (
              <SessionWrapper>
                  <AuthLayout>{page}</AuthLayout>
              </SessionWrapper>
          )
        : (page: ReactNode) => (
              <SessionWrapper>
                  <MainLayout>{page}</MainLayout>
              </SessionWrapper>
          )

    return getLayout(<Component {...pageProps} />)
}
