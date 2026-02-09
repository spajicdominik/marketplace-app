import { useEffect, useState } from "react";
import type { Post } from "../features/postlist/components/Post";

function useFetchPostList(category_id : number) {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/posts/category/${category_id}`);

                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }

                const data: Post[] = await response.json();
                setPosts(data);
            } catch (err) {
                setError("Failed to load posts");
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    return posts;
}

export default useFetchPostList;