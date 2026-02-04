import { useState } from "react"
import AuthForm from "../features/auth_form/AuthForm";
import { Link, useSearchParams } from "react-router-dom";
import ErrorPage from "./Error";

export default function AuthenticationPage() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') == 'login';
    const isQueryValid = (searchParams.get('mode') == 'login') || (searchParams.get('mode') == 'register');

    const register_fields = ["Email", "Username", "Password", "First Name", "Last Name", "Gender", "Birth Date", "Phone Number"];
    const login_fields = ["Username", "Password"];

    return (
        <>
        {isQueryValid ? 
        <div className="flex justify-center items-center">
            <AuthForm fields={isLogin ? login_fields : register_fields} isLogin={isLogin}></AuthForm>
        </div>
        :
        <div>
            <ErrorPage></ErrorPage>
        </div>
        }
        </>
        
    )
}