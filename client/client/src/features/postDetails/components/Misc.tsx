import type { PostDetails } from "../../../types/PostDetails"
import { FaShareAlt } from "react-icons/fa";
import { Button, Modal } from "antd";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import SharePostModal from "./ShareModal";

export default function Misc({ postDetails }: { postDetails: PostDetails | undefined }) {
    const [open, setOpen] = useState(false);

    const postId = postDetails?.id;


    const postTitle = postDetails?.title;
    const postUrl = window.location.href;

    if(!postTitle) return null;

    return (
        <div className="bg-white text-black  flex justify-between">
            <SharePostModal open={open} onClose={() => {setOpen(false)}} postTitle={postTitle} postUrl={postUrl}/>
            <div className="p-4">
                <p>Post id: {postId}</p>
            </div>
            <div className="buttons flex p-4">
                <div className="share flex items-center cursor-pointer mx-4" onClick={() => {setOpen(true)}}>
                    <FaShareAlt />
                    <p className="ml-1">Share post</p>
                </div>
            </div>
        </div>
    )
}