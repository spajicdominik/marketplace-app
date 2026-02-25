import { useEffect, useState } from "react";
import type { Brand } from "../../types/Brand";
import axios from "axios";

export default function useFetchPostDetails(brandId: number | undefined) {
    const [brand, setBrand] = useState<Brand>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        if (brandId === undefined || brandId === null) {
            return;
        }

        const fetchBrand = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/brands/${brandId}`
                );
                const data: Brand = response.data;
                setBrand(data);
            } catch (error) {
                setError("Error fetching brand");
                console.error("Error fetching brand", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBrand();
    }, [brandId]);
    return brand;
}