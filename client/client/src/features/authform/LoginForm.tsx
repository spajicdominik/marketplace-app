import type { FormProps } from 'antd';
import { Button, Checkbox, Form, Input } from 'antd';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../store/authSlice';
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import type { AppDispatch, RootState } from '../../store';
import { Alert } from 'antd';

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function LoginForm() {
    const dispatch = useDispatch<AppDispatch>();
    const { status, error } = useSelector((state : RootState) => state.auth);
    const navigate = useNavigate();

    const [form, setForm] = useState({ username: '', password: ''});

    async function handleSubmit(e:any) {
        const action = await dispatch(login(form));
        if (login.fulfilled.match(action)) {
            navigate("/");
        }
    }

        return (
        <div className='flex text-black w-1/2'>
            <div className='bg-white w-1/2 p-5'>
            {error && <Alert title={error} type="error" />}
                <h1 className='p-5 text-5xl'>Log in</h1>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    onFinish={handleSubmit}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item<FieldType>
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input onChange={(e) => setForm((f) => ({ ...f, username: e.target.value }))}/>
                    </Form.Item>

                    <Form.Item<FieldType>
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password onChange={(e) => setForm((f) => ({ ...f, password: e.target.value }))}/>
                    </Form.Item>

                    <Form.Item<FieldType> name="remember" valuePropName="checked" label={null}>
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    <Form.Item label={null}>
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <div className="info w-1/2 flex flex-col justify-center items-center bg-white">
                <h1>Welcome back!</h1>
                <Button><NavLink to={"?mode=register"}>No account yet? Sign up!</NavLink></Button>
            </div>

        </div>
    )
}