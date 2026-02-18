import { useState, useEffect } from "react";
import type { City } from "../../../types/City";

export default function useFetchCities(currentCountyId : Number | undefined | null){
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchCities = async () => {
                try {
                    if (currentCountyId == undefined){
                        return [];
                    }
                    const response = await fetch(`http://localhost:8080/api/cities/county/${currentCountyId}`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: City[] = await response.json();
                    setCities(data);
                } catch (err) {
                    setError("Failed to load cities");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCities();
        }, [currentCountyId]);

        return cities;
}