import React, { PropsWithChildren } from "react"

function Container({ children }: PropsWithChildren<{}>) {
    return (
        <div className="max-w-screen-xl mx-auto px-5 w-full flex flex-col">
            {children}
        </div>
    )
}

export default Container
