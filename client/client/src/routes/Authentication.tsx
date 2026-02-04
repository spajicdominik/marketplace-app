import { useState } from "react"
import AuthForm from "../features/auth_form/AuthForm";
import { Link, useSearchParams } from "react-router-dom";
import ErrorPage from "./Error";
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

export async function action({request} : {request : any}) {

    const data = request.formData();

    const authData = {
        username: data.get('Username'),
        password: data.get('Password')
    }

    console.log(authData);

    const response = await fetch('http://localhost:8080/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(authData)
    });

    if (response.status != 200) {
        return response;
    }

    return redirect('/shop');
    
}