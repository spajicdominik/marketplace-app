import { Link, useSearchParams } from "react-router-dom";
import { redirect } from "react-router-dom";
import LoginForm from "../features/authform/LoginForm";
import RegisterForm from "../features/authform/RegisterForm";
import ErrorForm from "../features/authform/ErrorForm";

export default function AuthenticationPage() {
    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') == 'login';
    const isQueryValid = (searchParams.get('mode') == 'login') || (searchParams.get('mode') == 'register');

    if (isQueryValid) {
        if (isLogin) {
            return <div className="flex justify-center items-center bg-white"><LoginForm></LoginForm></div>
        }
        else {
            return <div className="flex justify-center items-center bg-white"><RegisterForm></RegisterForm></div>
        }
    }
    else {
        return <ErrorForm></ErrorForm>
    }
}
