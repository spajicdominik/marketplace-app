import axios from "axios";
import { useEffect, useState } from "react";
import type { Image } from "../../features/imageupload/EditMainImage";

export default function useFetchMainImageObject(post_id: number | undefined) {
  const [image, setImage] = useState<Image>();

  useEffect(() => {
    const fetchMainImage = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/postImages/post-main/${post_id}`,
        );
        const data = response.data;
        setImage(data);
      } catch (error) {
        console.error("Error fetching main image:", error);
      }
    };
    fetchMainImage();
  }, [post_id]);
  return image;
}
