import { Button } from "antd"
import type { PostDetails } from "../../../types/PostDetails"

export default function Title ({postDetails} : {postDetails : PostDetails | undefined}) {
    const title = postDetails?.title;
    const price = postDetails?.price;
    const currency = postDetails?.currency;

    return (
        <div className="text-black bg-white p-6 shadow-2xl">
            <h1 className="title text-3xl font-bold mb-3">{title}</h1>
            <p className="price">Price</p>
            <p className="price-prop font-bold mb-5">{price} {currency}</p>
            <Button>Contact seller</Button>
        </div>
    )
}