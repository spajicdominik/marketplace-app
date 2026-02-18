import type { PostDetails } from "../../../types/PostDetails"
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

export default function Misc({postDetails} : {postDetails : PostDetails | undefined}) {
    const postId = postDetails?.id;
    return (
        <div className="bg-white text-black  flex justify-between">
            <div className="p-4">
                <p>Post id: {postId}</p>
            </div>

            <div className="buttons flex p-4">
                <div className="share flex items-center cursor-pointer mx-4">
                    <FaShareAlt/>
                    <p className="ml-1">Share post</p>
                </div>
            </div>
        </div>
    )
}