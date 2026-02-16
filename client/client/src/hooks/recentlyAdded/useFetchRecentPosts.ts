import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";

export default function useFetchRecentPosts() {
    const [recentPosts, setRecentPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRecentPosts = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/posts/recently-added"
                );
                const data : Post[] = response.data;
                setRecentPosts(data);
            } catch (error) {
                setError("Error fetching recents");
                console.error("Error fetching recents", error);
            } finally {
                setLoading(false);
            }
        };
        fetchRecentPosts();
    }, []);
    return recentPosts
}