import { EnumIcons } from "@/constants/EnumIcons"
import { Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import React from "react"

function Footer() {
    return (
        <footer className="w-full bg-light flex justify-between p-3 items-center text-dark">
            <div className="max-w-screen-xl mx-auto py-10  grid-cols-5 gap-4 flex md:grid">
                <div className="col-span-2 hidden md:block">
                    <Image
                        className="lg:block"
                        src={EnumIcons.LOGO_DEFAULT}
                        alt="logo"
                        width={100}
                        height={100}
                    />
                    <p className="text-md text-dark mt-5">
                        ©2023 PT. INDOMARCO PRISMATAMA
                    </p>
                </div>
                <div className="flex-col gap-2 hidden md:flex">
                    <p className="text-lg text-primary font-semibold">
                        Products
                    </p>
                    <p className="text-md text-dark">Coffe</p>
                    <p className="text-md text-dark">Kopi Baper Espresso</p>
                    <p className="text-md text-dark">Kopi Baper Robusta</p>
                    <p className="text-md text-dark">Kopi Baper Arabica</p>
                    <p className="text-md text-dark">Frappe Milk Series</p>
                    <p className="text-md text-dark">Tea Series</p>
                    <p className="text-md text-dark">Milk Indonesia</p>
                    <p className="text-md text-dark">Hidup Sehat</p>
                    <p className="text-md text-dark">Merchandise</p>
                </div>
                <div className="flex-col gap-2 hidden md:flex">
                    <p className="text-lg text-primary font-semibold">
                        Informations
                    </p>
                    <p className="text-md text-dark">Promotions</p>
                    <p className="text-md text-dark">Fun Fact</p>
                    <p className="text-md text-dark">Our Story</p>
                    <p className="text-md text-dark">Feedback</p>
                    <p className="text-md text-dark">Location</p>
                </div>
                <div className="flex flex-col gap-2 text-center md:text-left">
                    <p className="text-lg text-primary font-semibold">
                        Contact Us
                    </p>
                    <p className="text-md text-dark">Location</p>
                    <p className="text-md text-dark">
                        MENARA INDOMARET - Jalan Boulevard Pantai Indah Kapuk,
                        Kel. Kamal Muara, Kec. Penjaringan, Kota Adm. Jakarta
                        Utara, Provinsi DKI Jakarta, <br /> Kode Pos: 14470{" "}
                        <br />
                        Telp :02150897400
                    </p>
                    <p className="flex flex-row gap-4 justify-center md:justify-start">
                        <Instagram size={30} />
                        <Twitter size={30} />
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
