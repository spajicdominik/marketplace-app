import { useEffect, useState } from "react";
import { getAuthToken } from "../../util/auth";

function useFetchPosts(productId: number, categoryId: number, minPrice: number, maxPrice: number) {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (isNaN(maxPrice)){
            maxPrice = 20000;
        }

        if (isNaN(minPrice)){
            minPrice = 0;
        }
    
        const url = `http://localhost:8080/api/posts-filter?productId=${productId}&categoryId=${categoryId}&minPrice=${minPrice}&maxPrice=${maxPrice}`;

        async function fetchPosts() {
            setIsLoading(true);
            setError(null);

            try {
                const token = getAuthToken();
                const response = await fetch(url, {
                    headers: {
                        'Authorization' : 'Bearer ' + token
                    }
                });
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
    }, [productId, categoryId, minPrice, maxPrice]);

    return {posts, isLoading, error};
}

export default useFetchPosts;