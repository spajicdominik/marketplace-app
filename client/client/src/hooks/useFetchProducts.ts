import { useState, useEffect } from "react";
import type { Product } from "../types/Product";

export default function useFetchProducts(currentBrandId : Number | undefined , currentProductTypeId : Number | undefined){
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchProducts = async () => {
                try {
                    if (currentBrandId == undefined){
                        return [];
                    }
                    const response = await fetch(`http://localhost:8080/api/products/brand/${currentBrandId}?subcategory_item_id=${currentProductTypeId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Product[] = await response.json();
                    setProducts(data);
                } catch (err) {
                    setError("Failed to load products");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchProducts();
        }, [currentBrandId]);

        return products;
}