import { useEffect, useState } from "react";
import type { FullLocationDto } from "../../types/editPost/FullLocationDto";
import axios from "axios";

export default function useFetchLocationDto( cityId : number | undefined ) {
    const [location, setLocation] = useState<FullLocationDto>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchLocation = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/location-full/${cityId}`
                );
                const data : FullLocationDto = response.data;
                setLocation(data);
            } catch (error) {
                setError("Error fetching location");
                console.error("Error fetching location", error);
            } finally {
                setLoading(false);
            }
        };
        fetchLocation();
    }, [cityId]);
    return location;
}