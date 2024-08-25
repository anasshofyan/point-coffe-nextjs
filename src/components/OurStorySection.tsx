import React from "react"
import Title from "./common/Title"
import Container from "./common/Container"
import Card from "./common/Card"
import CardImage from "./common/CardImage"
import { EnumIcons } from "@/constants/EnumIcons"
import CardTitle from "./common/CardTitle"
import Button from "./common/Button"

function OurStorySection() {
    return (
        <Container>
            <Title text="Our Story" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <Card>
                    <CardImage src={EnumIcons.THUMB_3} alt="Our Story 1" />
                    <CardTitle>Point Coffe Delivery</CardTitle>
                    <Button variant="primary">Read More</Button>
                </Card>
                <Card>
                    <CardImage src={EnumIcons.THUMB_1} alt="Our Story 1" />
                    <CardTitle>Point Coffe Delivery</CardTitle>
                    <Button variant="primary">Read More</Button>
                </Card>
                <Card>
                    <CardImage src={EnumIcons.THUMB_2} alt="Our Story 1" />
                    <CardTitle>Point Coffe Delivery</CardTitle>
                    <Button variant="primary">Read More</Button>
                </Card>
            </div>
        </Container>
    )
}

export default OurStorySection
