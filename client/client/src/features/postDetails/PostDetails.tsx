import useFetchPostDetails from "../../hooks/postDetails/useFetchPostDetails"
import Images from "./components/ImageDisplay/Images";
import Title from "./components/Title";
import Misc from "./components/Misc";
import Info from "./components/Info";
import Description from "./components/Description";

export default function PostDetails({postId} : {postId : number}) {
    const postDetails = useFetchPostDetails(postId);

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