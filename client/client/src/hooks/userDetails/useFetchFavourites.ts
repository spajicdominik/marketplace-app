import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";

export default function useFetchFavourites(userId : number | undefined) {
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/posts/favourites/${userId}`
                );
                const data : Post[] = response.data;
                setUserPosts(data);
            } catch (error) {
                setError("Error fetching favourite posts");
                console.error("Error fetching favourite posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserPosts();
    }, [userId]);
    return userPosts;
}