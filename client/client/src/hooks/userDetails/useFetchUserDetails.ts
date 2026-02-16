import { useEffect, useState } from "react";
import type { UserDetails } from "../../types/UserDetails";
import axios from "axios";

export default function useFetchUserDetails( userId : number | undefined ) {
    const [userDetails, setUserDetails] = useState<UserDetails>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserDetails = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/users-display/${userId}`
                );
                const data : UserDetails = response.data;
                setUserDetails(data);
            } catch (error) {
                setError("Error fetching user details");
                console.error("Error fetching user details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchUserDetails();
    }, [userId]);
    return userDetails;
}