import type { NewPostType } from "../../types/NewPost";
import axios from "axios";

export default async function useNewPost(newPost: NewPostType) {
    try {
        const token = localStorage.getItem("access_token");

        const response = await axios.post("http://localhost:8080/api/newPost", newPost, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error creating post:", error);
    }
}