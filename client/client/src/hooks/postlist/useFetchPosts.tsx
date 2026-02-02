import { useEffect, useState } from "react";

function useFetchPosts(productId: number, categoryId: number) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = `http://localhost:8080/api/posts-filter?productId=${productId}&categoryId=${categoryId}`;

        async function fetchPosts() {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status : ${response.status}`);
                }
                const data = await response.json();
                setPosts(data);
            }
            catch (e : any) {
                setError(e);
                setPosts([]);
            }
            finally {
                setIsLoading(false);
            }
        }

        fetchPosts();
    }, [productId, categoryId]);

    return {posts, isLoading, error};
}

export default useFetchPosts;