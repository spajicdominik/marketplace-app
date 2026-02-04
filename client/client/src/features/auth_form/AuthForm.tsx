import { Form, NavLink } from "react-router-dom";
import { Button } from "antd";
import InputField from "./components/InputField";

export default function AuthForm({
  fields,
  isLogin,
  data,
}: {
  fields: string[];
  isLogin: boolean;
  data: any;
}) {
  return (
    <div className="login-form flex text-black w-1/2">
      <div className="form block bg-white w-1/2">
        {data && data.message && <p>{data.message}</p>}
        <h1 className="p-5 text-5xl">{isLogin ? "Log in" : "Register"}</h1>
        <Form method="post" className="p-5">
          {fields.map((item) => (
            <InputField typeOfInput={item} />
          ))}
          <Button htmlType="submit">{isLogin ? "Log in" : "Register"}</Button>
        </Form>
      </div>

      {isLogin ? (
        <div className="info w-1/2 flex flex-col justify-center items-center bg-amber-100">
          <h1>Welcome back!</h1>
          <Button>
            <NavLink to={"?mode=register"}>No account yet? Sign up!</NavLink>
          </Button>
        </div>
      ) : (
        <div className="info w-1/2 flex flex-col justify-center items-center bg-amber-100">
          <h1>Become a TechMarket user!</h1>
          <Button>
            <NavLink to={"?mode=login"}>Already an user? Sign in!</NavLink>
          </Button>
        </div>
      )}
    </div>
  );
}
