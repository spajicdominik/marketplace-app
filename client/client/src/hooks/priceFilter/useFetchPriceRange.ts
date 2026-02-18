import { useEffect, useState } from "react";
import type { PriceRangeDto } from "../../types/PriceRangeDto";
import axios from "axios";

export default function useFetchPriceRange() {
    const [priceRange, setPriceRange] = useState<PriceRangeDto>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPriceRange = async () => {
            try {
                const response = await axios.get(
                    "http://localhost:8080/api/posts-price-range"
                );
                const data : PriceRangeDto = response.data;
                setPriceRange(data);
            } catch (error) {
                setError("Error fetching price range");
                console.error("Error fetching price range", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPriceRange();
    }, []);
    return priceRange
}