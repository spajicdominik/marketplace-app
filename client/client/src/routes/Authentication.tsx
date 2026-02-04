import { useState } from "react"
import AuthForm from "../features/auth_form/AuthForm";

export default function AuthenticationPage() {
    const [isLogin, setIsLogin] = useState(true);

    function switchAuthHandler(bool : boolean) {
        setIsLogin(bool);
    }

    const register_fields = ["Email", "Username", "Password", "First Name", "Last Name", "Gender", "Birth Date", "Phone Number"];
    const login_fields = ["Username", "Password"];

    return (
        <div className="flex justify-center items-center">
            <AuthForm fields={isLogin ? login_fields : register_fields} isLogin={isLogin} switchAuthHandler={switchAuthHandler}></AuthForm>
        </div>
    )
}