import { Divider } from "antd";
import { motion } from "motion/react";
import {
  DownOutlined,
  LogoutOutlined,
  SettingOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Button, Dropdown, Flex, Space, Avatar } from "antd";
import type { DropdownProps, MenuProps } from "antd";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { logout } from "../../../store/authSlice";
import { useNavigate } from "react-router-dom";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Profile",
  },
  {
    key: "2",
    label: "Settings",
    icon: <SettingOutlined />,
  },
  {
    type: "divider",
  },
  {
    key: "3",
    label: "Logout",
    icon: <LogoutOutlined />,
    danger: true,
  },
];

export default function AuthBar() {
  const status = useSelector((state: RootState) => state.auth.status);
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleMenuClick: MenuProps["onClick"] = async ({ key }) => {
    if (key === "3") {
      await dispatch(logout());
      navigate("/auth?mode=login");
    }
    // handle other keys if you want
    // if (key === '1') navigate('/profile');
    // if (key === '2') navigate('/settings');
  };


  return (
    <div className="bg-black text-white flex justify-end items-center p-3">
      {(status != 'succeeded') ? (
        <>
          <motion.p className="cursor-pointer hover:text-gray-300 mx-2">
            <NavLink to={"/auth?mode=login"}>Login</NavLink>
          </motion.p>
          <Divider orientation="vertical" style={{ borderColor: "white" }} />
          <motion.p className="cursor-pointer hover:text-gray-300 mx-2">
            <NavLink to={"/auth?mode=register"}>Register</NavLink>
          </motion.p>
        </>
      ) : (
        <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size={30} icon={<UserOutlined />} />
            <Space>
              {user?.sub}
              <DownOutlined style={{ cursor: "pointer" }} />
            </Space>
          </a>
        </Dropdown>
      )}
    </div>
  );
}
