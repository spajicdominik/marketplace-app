import { useEffect, useState } from "react";
import type { PostDetailsImages } from "../../../features/postDetails/components/ImageDisplay/Images";
import axios from "axios";

export default function useFetchNonMainImages( postId : number | undefined ) {
    const [postDetailsImages, setPostDetailsImages] = useState<PostDetailsImages[]>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!postId) return;
        const fetchPostImages = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/postImages/post/${postId}`
                );
                const data : PostDetailsImages[] = response.data;
                setPostDetailsImages(data);
            } catch (error) {
                setError("Error fetching post images");
                console.error("Error fetching post images", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPostImages();
    }, []);
    return postDetailsImages;
}