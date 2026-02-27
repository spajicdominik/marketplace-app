import type { RegisterUserDto } from "../types/RegisterUserDto";
import axios from "axios";

export default async function sendRegisterForm( payload : RegisterUserDto) {
    try {
        const res = await axios.post("http://localhost:8080/auth/register", payload);
        const data : number = res.data;
        return data;
    }
    catch (err) {
        console.error("Registration failed: ", err);
        throw err;
    }
}