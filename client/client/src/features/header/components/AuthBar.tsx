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

export default function AuthBar({ isLogedIn }: { isLogedIn: boolean }) {
  return (
    <div className="bg-black text-white flex justify-end items-center p-3">
      {!isLogedIn ? (
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
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar size={30} icon={<UserOutlined />} />
            <Space>
              dspajic
              <DownOutlined style={{ cursor: "pointer"}}/>
            </Space>
          </a>
        </Dropdown>
      )}
    </div>
  );
}
