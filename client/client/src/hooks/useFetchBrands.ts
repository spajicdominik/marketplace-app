import { useState, useEffect } from "react";
import type { Brand } from "../types/Brand";

export default function useFetchBrands(currentProductTypeId : Number | undefined ){
    const [brands, setBrands] = useState<Brand[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchBrands = async () => {
                try {
                    if (currentProductTypeId == undefined){
                        return [];
                    }
                    const response = await fetch(`http://localhost:8080/api/brands/subcategory-item/${currentProductTypeId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Brand[] = await response.json();
                    setBrands(data);
                } catch (err) {
                    setError("Failed to load brands.");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchBrands();
        }, [currentProductTypeId]);

        return brands;
}