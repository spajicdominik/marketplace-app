import axios from "axios";
import type { PostImage } from "../../../types/PostImage";

export default async function usePostImage(post_image: PostImage) {
    try {
        const token = localStorage.getItem("access_token");
        
        const response = await axios.post("http://localhost:8080/api/postImages", post_image, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
    }
}