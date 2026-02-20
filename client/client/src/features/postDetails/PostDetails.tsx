import useFetchPostDetails from "../../hooks/postDetails/useFetchPostDetails"
import Images from "./components/ImageDisplay/Images";
import Title from "./components/Title";
import Misc from "./components/Misc";
import Info from "./components/Info";
import Description from "./components/Description";
import useFetchFullCategories from '../../hooks/editPost/useFetchFullCategories';
import type { EditPostState } from '../../store/editPostSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../store';
import useFetchLocationDto from '../../hooks/userDetails/useFetchLocation';
import editPostSlice from "../../store/editPostSlice";

export default function PostDetails({postId} : {postId : number}) {
    const postDetails = useFetchPostDetails(postId);

    const fullCategories = useFetchFullCategories(postDetails?.product.id);
    const fullLocation = useFetchLocationDto(postDetails?.location.cityId);

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const currentUserId = useSelector(
        (state: RootState) => state.auth.user?.user_id
    );

    const currentPost : EditPostState = {
     title : postDetails?.title,
     description : postDetails?.description,
     price : postDetails?.price.toString(),
     currency : postDetails?.currency,
     user_id : currentUserId,
     categoryId : fullCategories?.categoryId,
     subcategoryId : fullCategories?.subcategoryId,
     productTypeId : fullCategories?.subcategoryItemId,
     brandId : fullCategories?.brandId,
     productId : fullCategories?.productId,
     countryId : fullLocation?.countryId,
     countyId : fullLocation?.countyId,
     cityId : fullLocation?.cityId,
     addressLine1 : postDetails?.location.addressLine1,
     addressLine2 : postDetails?.location.addressLine2,
     postalCode : postDetails?.location.postalCode,
     currentPostId : postDetails?.id,
     editPost : undefined,
     editPostPictures : false,
    };

    dispatch(editPostSlice.actions.setState(currentPost));


    return (
        <div className="w-1/2 shadow-2xl m-4">
            <Images postId={postId}/>
            <Title postDetails={postDetails}/>
            <Misc postDetails={postDetails}/>
            <Info postDetails={postDetails}></Info>
            <Description postDetails={postDetails}/>
        </div>
    )
}