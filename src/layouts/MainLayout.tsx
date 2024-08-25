import Button from "@/components/common/Button"
import { PropsWithChildren } from "react"

function MainLayout({ children }: PropsWithChildren<{}>) {
    return (
        <main>
            <p>Header</p>
            <Button variant="primary">Primary</Button>
            <main>{children}</main>
            <p>footer</p>
        </main>
    )
}

export default MainLayout
