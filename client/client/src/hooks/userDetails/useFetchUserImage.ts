import { useEffect, useState } from "react";
import type { UserImage } from "../../types/UserImage";
import axios from "axios";

export default function useFetchUserImage( userId : number | undefined ) {
    const [image, setImage] = useState<UserImage>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (userId === undefined || userId === null) {
            return;
        }
        const fetchImage = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:8080/api/user-image/${userId}`
                );
                const data : UserImage = response.data;
                setImage(data);
            } catch (error) {
                setError("Error fetching user image");
                console.error("Error fetching user image", error);
            } finally {
                setLoading(false);
            }
        };
        fetchImage();
    }, [userId]);
    return image;
}