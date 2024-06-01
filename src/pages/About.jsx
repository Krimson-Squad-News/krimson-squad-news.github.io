import { Navbar } from "../assets/components/Navbar"
import { Card } from "../assets/components/sub_components/Card"
export const About = () => {
    return (
        <>
        <Navbar data={{current: "About"}}></Navbar>
        <h1>About</h1>
        <Card card_details={{desc: "Welcome to Krimson Squad, where we develop and share CLI projects, powerful pentesting and red teaming CLI tools. Join us to contribute, collaborate."}}>
        </Card>
        </>
    )
}