import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetchMainImage(post_id: number) {
  const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchMainImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/postImages/post-main/${post_id}`,
        );
        const url = response.data?.url;
        setImageUrl(url);
      } catch (error) {
        console.error("Error fetching main image:", error);
      }
    };
    fetchMainImage();
  }, [post_id]);
  return imageUrl;
}
