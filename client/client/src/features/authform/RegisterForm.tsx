import { Form, Input, Button, Select, DatePicker } from "antd";
import { NavLink } from "react-router-dom";
import sendRegisterForm from "../../hooks/sendRegisterForm";
import type { RegisterUserDto } from "../../types/RegisterUserDto";
import { useNavigate } from "react-router-dom";
import useFetchCounties from "../../hooks/newPost/location/useFetchCounties";
import useFetchCountries from "../../hooks/newPost/location/useFetchCountries";
import useFetchCities from "../../hooks/newPost/location/useFetchCities";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import newPostSlice from "../../store/newPostSlice";
import mapCountriesToOptions from "../../hooks/newPost/location/mapCountriesToOptions";
import mapCountiesToOptions from "../../hooks/newPost/location/mapCountiesToOptions";
import mapCitiesToOptions from "../../hooks/newPost/location/mapCitiesToOptions";

const { Option } = Select;

export default function RegisterForm() {
  const [form_var] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const currentCountryId = useSelector(
    (state: RootState) => state.newpost.countryId,
  );
  const currentCountyId = useSelector(
    (state: RootState) => state.newpost.countyId,
  );
  const currentCityId = useSelector((state: RootState) => state.newpost.cityId);

  const countries = useFetchCountries();
  const counties = useFetchCounties(currentCountryId);
  const cities = useFetchCities(currentCountyId);

  const handleCountryChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCountryId(id));
  };
  const handleCountyChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCountyId(id));
  };
  const handleCityChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCityId(id));
  };

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
      cityId: Number(values.City)
    };
    console.log(payload);
    sendRegisterForm(payload);
    dispatch(newPostSlice.actions.resetNewPost());
    navigate("/register-done");
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
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
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
            rules={[
              { required: true, message: "Please select your birth date" },
            ]}
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

          <Form.Item
            label="Country"
            name="Country"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              style={{ width: 150 }}
              options={mapCountriesToOptions(countries)}
              value={
                currentCountryId !== undefined
                  ? String(currentCountryId)
                  : undefined
              }
              onChange={handleCountryChange}
              placeholder="Select country"
            />
          </Form.Item>

          <Form.Item
            label="County"
            name="County"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              style={{ width: 150 }}
              options={mapCountiesToOptions(counties)}
              value={
                currentCountyId !== undefined
                  ? String(currentCountyId)
                  : undefined
              }
              onChange={handleCountyChange}
              placeholder="Select county"
            />
          </Form.Item>

          <Form.Item
            label="City"
            name="City"
            rules={[{ required: true, message: "Please input!" }]}
          >
            <Select
              style={{ width: 150 }}
              options={mapCitiesToOptions(cities)}
              value={
                currentCityId !== undefined ? String(currentCityId) : undefined
              }
              onChange={handleCityChange}
              placeholder="Select city"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="info w-1/2 flex flex-col justify-center items-center bg-white">
        <h1>Join us and start selling!</h1>
        <Button>
          <NavLink to={"?mode=login"}>
            Already have an account? Sign in!
          </NavLink>
        </Button>
      </div>
    </div>
  );
}
