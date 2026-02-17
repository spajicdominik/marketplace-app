import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";

export default function useFilterPosts(
    categoryId : number, 
    subcategoryId : number | null, 
    subcategoryItemId : number | null, 
    productId : number | null
) 
{
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilteredPosts = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/posts-filter?category_id=${categoryId}&subcategory_id=${subcategoryId}&subcategory_item_id=${subcategoryItemId}&product_id=${productId}`
                );
                const data : Post[] = response.data;
                setFilteredPosts(data);
            } catch (error) {
                setError("Error fetching filtered posts");
                console.error("Error fetching filtered posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilteredPosts();
    }, [categoryId, subcategoryId, subcategoryItemId, productId]);
    return filteredPosts
}