import { useParams } from "react-router-dom"
import PostDetails from "../features/postDetails/PostDetails";
import UserDetails from "../features/userDetails/UserDetails";

export default function PostDetailsPage() {
    const params = useParams();
    const postId = Number(params.postId);

    return (
        <div className="w-full flex justify-center bg-white">
            <PostDetails postId={postId} />
            <UserDetails postId={postId}/>
        </div>
    )
}