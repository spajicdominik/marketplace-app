import { Form, Input, Button, Select, DatePicker } from "antd";
import { NavLink } from 'react-router-dom';
import sendRegisterForm from "../../hooks/sendRegisterForm";
import type { RegisterUserDto } from "../../types/RegisterUserDto";

const { Option } = Select;

export default function RegisterForm() {
    const [form_var] = Form.useForm();


    const onFinish = (values: any) => {
        const payload: RegisterUserDto = {
            email: values.email,
            username: values.username,
            password: values.password,
            firstName: values.firstName,
            lastName: values.lastName,
            gender: values.gender,
            birthDate: values.birthDate.format("YYYY-MM-DD"),
            phoneNumber: values.phoneNumber,
        };
        console.log(payload);
        sendRegisterForm(payload);
    };

    return (
        <div className="login-form flex text-black w-1/2">
            <div className="form block bg-white w-1/2">
                <h1 className="p-5 text-5xl">Register</h1>

                <Form
                    form={form_var}
                    layout="vertical"
                    onFinish={onFinish}
                    style={{ maxWidth: 400 }}
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            { required: true, message: "Please enter your email" },
                            { type: "email", message: "Invalid email address" },
                        ]}
                    >
                        <Input placeholder="email@example.com" />
                    </Form.Item>

                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: "Please enter a username" }]}
                    >
                        <Input placeholder="Username" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            { required: true, message: "Please enter your password" },
                            { min: 6, message: "Password must be at least 6 characters" },
                        ]}
                    >
                        <Input.Password placeholder="Password" />
                    </Form.Item>

                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: "Please enter your first name" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[{ required: true, message: "Please enter your last name" }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Gender"
                        name="gender"
                        rules={[{ required: true, message: "Please select your gender" }]}
                    >
                        <Select placeholder="Select gender">
                            <Option value="M">Male</Option>
                            <Option value="F">Female</Option>
                            <Option value="O">Other</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Birth Date"
                        name="birthDate"
                        rules={[{ required: true, message: "Please select your birth date" }]}
                    >
                        <DatePicker style={{ width: "100%" }} />
                    </Form.Item>

                    <Form.Item
                        label="Phone Number"
                        name="phoneNumber"
                        rules={[
                            { required: true, message: "Please enter your phone number" },
                            { pattern: /^[0-9+\-\s()]+$/, message: "Invalid phone number" },
                        ]}
                    >
                        <Input placeholder="+385 99 123 4567" />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" block>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>

            </div>

            <div className="info w-1/2 flex flex-col justify-center items-center bg-white">
                <h1>Welcome back!</h1>
                <Button><NavLink to={"?mode=login"}>No account yet? Sign up!</NavLink></Button>
            </div>
        </div>
    )
}