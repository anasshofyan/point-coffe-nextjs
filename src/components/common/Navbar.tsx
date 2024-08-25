import { PropsWithChildren } from "react"

function Navbar({ children }: PropsWithChildren<{}>) {
    return (
        <nav className="fixed top-0 left-0 w-full bg-primary flex justify-between p-3 items-center text-light z-50">
            <div className="max-w-screen-xl mx-auto px-5 w-full flex lg:flex-row flex-row-reverse justify-between md:flex-row md:px-5 sm:px-2 xs:px-1 items-center">
                {children}
            </div>
        </nav>
    )
}

export default Navbar
