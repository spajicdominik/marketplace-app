import { useEffect, useState } from "react";
import type { PostDetails } from "../../types/PostDetails";
import axios from "axios";

export default function useFetchPostDetails( postId : number ) {
    const [postDetails, setPostDetails] = useState<PostDetails>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPostDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/postDetails/${postId}`
                );
                const data : PostDetails = response.data;
                setPostDetails(data);
            } catch (error) {
                setError("Error fetching post details");
                console.error("Error fetching post details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPostDetails();
    }, []);
    return postDetails;
}