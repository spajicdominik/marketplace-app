import axios from "axios";
import type { ProfileImg } from "../types/ProfileImg";

export default async function usePostProfileImage( payload : ProfileImg, userId : number) {
    try {
        const res = await axios.post(`http://localhost:8080/api/user-image/${userId}`, payload);
        const data = res.data;
        return data;
    }
    catch (err) {
        console.error("Profile image upload failed: ", err);
        throw err;
    }
}