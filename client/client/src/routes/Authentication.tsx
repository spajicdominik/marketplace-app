import { useState } from "react"
import AuthForm from "../features/auth_form/AuthForm";
import { Link, useSearchParams, useActionData } from "react-router-dom";
import ErrorPage from "./Error";
import { redirect } from "react-router-dom";

export default function AuthenticationPage() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') == 'login';
    const isQueryValid = (searchParams.get('mode') == 'login') || (searchParams.get('mode') == 'register');

    const register_fields = ["Email", "Username", "Password", "First Name", "Last Name", "Gender", "Birth Date", "Phone Number"];
    const login_fields = ["Username", "Password"];

    const data = useActionData();

    return (
        <>
        {isQueryValid ? 
        <div className="flex justify-center items-center">
            <AuthForm fields={isLogin ? login_fields : register_fields} isLogin={isLogin} data={data}></AuthForm>
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

    const data = await request.formData();

    const authData = {
        username: data.get('Username'),
        password: data.get('Password')
    }

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

    const resData = await response.json();
    const token = resData.token;
    
    localStorage.setItem('token', token);

    return redirect('/shop');
    
}