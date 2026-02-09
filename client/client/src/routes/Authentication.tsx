import AuthForm from "../features/authform/AuthForm";
import { Link, useSearchParams } from "react-router-dom";
import { redirect } from "react-router-dom";

export default function AuthenticationPage() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') == 'login';
    const isQueryValid = (searchParams.get('mode') == 'login') || (searchParams.get('mode') == 'register');

    const register_fields = ["Email", "Username", "Password", "First Name", "Last Name", "Gender", "Birth Date", "Phone Number"];
    const login_fields = ["Username", "Password"];



    return (
        <>
        {isQueryValid ? 
        <div className="flex justify-center items-center bg-white h-max py-20">
            <AuthForm fields={isLogin ? login_fields : register_fields} isLogin={isLogin}></AuthForm>
        </div>
        :
        <div>
            <div>ERROR PAGE</div>
        </div>
        }
        </>
        
    )
}
