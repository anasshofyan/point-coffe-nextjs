import { PropsWithChildren } from "react"

function AuthLayout({ children }: PropsWithChildren<{}>) {
    return <main>{children}</main>
}

export default AuthLayout
