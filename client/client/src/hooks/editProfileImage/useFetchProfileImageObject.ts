import axios from "axios";
import { useEffect, useState } from "react";
import type { UserImage } from "../../types/UserImage";

export default function useFetchProfileImageObject(user_id: number | undefined) {
  const [image, setImage] = useState<UserImage>();

  useEffect(() => {
    const fetchProfileImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/user-image/${user_id}`,
        );
        const data = response.data;
        setImage(data);
      } catch (error) {
        console.error("Error fetching profile image:", error);
      }
    };
    fetchProfileImage();
  }, [user_id]);
  return image;
}
