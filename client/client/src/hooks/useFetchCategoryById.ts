import { useState, useEffect } from "react";
import type { Category } from "../types/Category";

export default function useFetchCategoryById(category_id : number){
    const [category, setCategory] = useState<Category>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchCategory = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/category/${category_id}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Category = await response.json();
                    setCategory(data);
                } catch (err) {
                    setError("Failed to load category");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCategory();
        }, [category_id]);

        return category;
}