import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";

export default function useFetchUserPosts(userId : number) {
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/posts/user/${userId}`
                );
                const data : Post[] = response.data;
                setUserPosts(data);
            } catch (error) {
                setError("Error fetching user posts");
                console.error("Error fetching user posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserPosts();
    }, [userId]);
    return userPosts;
}