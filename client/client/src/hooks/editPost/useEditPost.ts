import type { NewPostType } from "../../types/NewPost";
import axios from "axios";

export default async function useEditPost(newPost: NewPostType, post_id : number) {
    try {
        const token = localStorage.getItem("access_token");

        const response = await axios.put(`http://localhost:8080/api/postDetails/${post_id}`, newPost, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error editing post:", error);
    }
}