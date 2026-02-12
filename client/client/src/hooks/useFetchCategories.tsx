import { useState, useEffect } from "react";
import type { Category } from "../types/Category";

export default function useFetchCategories(){
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchCategories = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/category`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Category[] = await response.json();
                    setCategories(data);
                } catch (err) {
                    setError("Failed to load categories");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCategories();
        }, []);

        return categories;
}