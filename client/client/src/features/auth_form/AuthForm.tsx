import { Form } from "react-router-dom";
import { Button } from "antd";
import InputField from "./components/InputField";

export default function AuthForm(
    { fields, isLogin, switchAuthHandler }
        : {
            fields: string[],
            isLogin: boolean,
            switchAuthHandler: (isLoginBool: boolean) => void
        }) {

    return (
        <div className="login-form flex text-black w-1/2">
            <div className="form block bg-white w-1/2">
                <h1 className="p-5 text-5xl">{isLogin ? "Log in" : "Register"}</h1>
                <Form method="post" className="p-5">
                    {fields.map((item) => <InputField typeOfInput={item} />)}
                    <Button>{isLogin ? "Log in" : "Register"}</Button>
                </Form>
            </div>

            {isLogin ?
                <div className="info w-1/2 flex flex-col justify-center items-center bg-amber-100">
                    <h1>Welcome back!</h1>
                    <Button onClick={() => {switchAuthHandler(false)}}>No account yet? Sign up!</Button>
                </div>
                :
                <div className="info w-1/2 flex flex-col justify-center items-center bg-amber-100">
                    <h1>Become a TechMarket user!</h1>
                    <Button onClick={() => {switchAuthHandler(true)}}>Already an user? Sign in!</Button>
                </div>}
        </div>
    )
}