import { useEffect, useState } from "react";
import type { FullCategoryDto } from "../../types/editPost/FullCategoryDto";
import axios from "axios";

export default function useFetchFullCategories(productId : number | undefined) {
    const [fullCategories, setFullCategories] = useState<FullCategoryDto>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFullCategories = async () => {
            if (productId == null || productId == undefined){
                return;
            }
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/category/get-full-categories/product/${productId}`
                );
                const data : FullCategoryDto = response.data;
                setFullCategories(data);
            } catch (error) {
                setError("Error fetching categories");
                console.error("Error fetching categories", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFullCategories();
    }, [productId]);
    return fullCategories;
}