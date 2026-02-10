import { useState, useEffect } from "react";
import type { Subcategory } from "../types/Subcategory";

export default function useFetchSubcategories(currentCategoryId : Number | undefined ){
    const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchSubcategories = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/subcategories/category/${currentCategoryId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Subcategory[] = await response.json();
                    setSubcategories(data);
                } catch (err) {
                    setError("Failed to load subcategories");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchSubcategories();
        }, [currentCategoryId]);

        return subcategories;
}