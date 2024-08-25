import React from "react"
import Container from "./common/Container"
import Title from "./common/Title"
import Button from "./common/Button"
import Image from "next/image"
import { EnumIcons } from "@/constants/EnumIcons"

function MembershipSection() {
    return (
        <Container>
            <Title text="Membership" />
            <div className="grid grid-col-1 md:grid-cols-2 items-center mb-10">
                <div className="flex flex-col text-center px-0 md:px-24 my-7">
                    <h1 className="text-2xl font-semibold">Membership</h1>
                    <p className="my-5">Join member dan dapatkan stampnya!</p>
                    <Button variant="primary">Join Member</Button>
                </div>
                <Image
                    src={EnumIcons.THUMB_4}
                    alt="Member"
                    width={"0"}
                    height={"0"}
                    quality={70}
                    sizes="100vh"
                    className="w-full object-cover"
                />
            </div>
        </Container>
    )
}

export default MembershipSection
