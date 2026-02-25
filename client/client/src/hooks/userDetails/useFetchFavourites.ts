import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";
import type { Page } from "../../types/PaginatedPost";

export default function useFetchFavourites(userId : number | undefined) {
    const [userPosts, setUserPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/posts/favourites/${userId}?page=${page}&size=${size}`
                );
                const data : Page<Post> = response.data;
                setUserPosts(data.content);
                setTotalElements(data.totalElements);
            } catch (error) {
                setError("Error fetching favourite posts");
                console.error("Error fetching favourite posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserPosts();
    }, [userId, page, size]);
    return {userPosts, page, totalElements, setPage, size, setSize};
}