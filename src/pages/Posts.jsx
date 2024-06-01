import { Navbar } from "../assets/components/Navbar"
import { Card } from "../assets/components/sub_components/Card"
const params = new URLSearchParams(queryString);
const post_id = params.get("post");
export const Posts = () => {
    return (
        <>
        <Navbar data={{current: "About"}}></Navbar>
        <Card card_details={{fetch_type: "full", id: {post_id} }}></Card>
        </>
    )
}