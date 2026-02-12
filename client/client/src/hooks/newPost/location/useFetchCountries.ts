import { useState, useEffect } from "react";
import type { Country } from "../../../types/Country";

export default function useFetchCountries(){
    const [countries, setCountries] = useState<Country[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
            const fetchCountries = async () => {
                try {
                    const response = await fetch(`http://localhost:8080/api/countries`);
    
                    if (!response.ok) {
                        throw new Error(`HTTP error: ${response.status}`);
                    }
    
                    const data: Country[] = await response.json();
                    setCountries(data);
                } catch (err) {
                    setError("Failed to load countries");
                } finally {
                    setLoading(false);
                }
            };
    
            fetchCountries();
        }, []);

        return countries;
}