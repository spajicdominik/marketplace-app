import { Button } from "antd"
import type { PostDetails } from "../../../types/PostDetails"
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";

export default function Title({ postDetails }: { postDetails: PostDetails | undefined }) {
    const title = postDetails?.title;
    const price = postDetails?.price;
    const currency = postDetails?.currency;
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const currentUserId = useSelector(
        (state: RootState) => state.auth.user?.user_id
    );


    return (
        <div className="text-black bg-white p-6 shadow-2xl">
            <h1 className="title text-3xl font-bold mb-3">{title}</h1>
            <div className="flex justify-between">
                <div>
                    <p className="price">Price</p>
                    <p className="price-prop font-bold mb-5">{price} {currency}</p>
                </div>
                {postDetails?.userId == currentUserId
                    ?
                    <Button size="large" type="primary" onClick={() => { navigate("/edit-post") }}>EDIT</Button>
                    :
                    null
                }
            </div>
            <Button>Contact seller</Button>
        </div>
    )
}