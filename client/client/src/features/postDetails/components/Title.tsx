import { Button } from "antd"
import type { PostDetails } from "../../../types/PostDetails"
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { useNavigate } from "react-router-dom";
import editPostSlice from "../../../store/editPostSlice";
import type { EditPostState } from "../../../store/editPostSlice";
import useFetchLocationDto from "../../../hooks/userDetails/useFetchLocation";

export default function Title({ postDetails }: { postDetails: PostDetails | undefined }) {
    const title = postDetails?.title;
    const description = postDetails?.description;
    const price = postDetails?.price.toString();
    const currency = postDetails?.currency;
    const brand_id = postDetails?.product.brandId;
    const product_id = postDetails?.product.id;
    const full_location = useFetchLocationDto(postDetails?.location.cityId);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const currentUserId = useSelector(
        (state: RootState) => state.auth.user?.user_id
    );

    dispatch(editPostSlice.actions.setTitle(title));
    dispatch(editPostSlice.actions.setDescription(description));
    dispatch(editPostSlice.actions.setPrice(price));
    dispatch(editPostSlice.actions.setCurrency("EUR"));
    dispatch(editPostSlice.actions.setUserId(currentUserId));


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