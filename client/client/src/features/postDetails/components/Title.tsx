import { Button } from "antd"
import type { PostDetails } from "../../../types/PostDetails"
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";

export default function Title({ postDetails }: { postDetails: PostDetails | undefined }) {
    const title = postDetails?.title;
    const price = postDetails?.price;
    const currency = postDetails?.currency;
    const postId = postDetails?.id;
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const currentUserId = useSelector(
        (state: RootState) => state.auth.user?.user_id
    );

    const userRoles = useSelector(
        (state: RootState) => state.auth.user?.roles
    )


    return (
        <div className="text-black bg-white p-6 shadow-2xl">
            <h1 className="title text-3xl font-bold mb-3">{title}</h1>
            <div className="flex justify-between">
                <div>
                    <p className="price">Price</p>
                    <p className="price-prop font-bold mb-5">{price} {currency}</p>
                </div>
                {(postDetails?.userId == currentUserId || userRoles?.includes("ROLE_ADMIN"))
                    ?
                    <Button size="large" type="primary" onClick={() => { navigate(`/edit-post/${postId}`) }}>EDIT</Button>
                    :
                    null
                }
            </div>
        </div>
    )
}