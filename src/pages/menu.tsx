import MenuSection from "@/components/MenuSection"
import Head from "next/head"

function Menu() {
    return (
        <>
            <Head>
                <title>Menu | Point Coffe</title>
                <link rel="icon" href="/pointcoffe.png" />
                <meta
                    name="description"
                    content="Menu of Point Coffe, the best coffee shop in town."
                />
            </Head>
            <MenuSection />
        </>
    )
}

export default Menu
