import { useState, useEffect } from "react";
import type { County } from "../../../types/County";

export default function useFetchCounties(currentCountryId : Number | undefined | null){
    const [counties, setCounties] = useState<County[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchCounties = async () => {
                try {
                    if (currentCountryId == undefined || currentCountryId == null){
                        return [];
                    }
                    const response = await fetch(`http://localhost:8080/api/counties/country/${currentCountryId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: County[] = await response.json();
                    setCounties(data);
                } catch (err) {
                    setError("Failed to load counties");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCounties();
        }, [currentCountryId]);

        return counties;
}