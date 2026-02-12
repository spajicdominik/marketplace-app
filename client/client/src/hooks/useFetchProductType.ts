import { useState, useEffect } from "react";
import type { ProductType } from "../types/ProductType";

export default function useFetchProductTypes(currentSubcategoryId : number | undefined ){
    const [productTypes, setProductTypes] = useState<ProductType[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchProductTypes = async () => {
                try {
                    if (currentSubcategoryId == undefined){
                        return [];
                    }
                    const response = await fetch(`http://localhost:8080/api/subcategoryItems/subcategory/${currentSubcategoryId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: ProductType[] = await response.json();
                    setProductTypes(data);
                } catch (err) {
                    setError("Failed to load product types");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchProductTypes();
        }, [currentSubcategoryId]);

        return productTypes;
}