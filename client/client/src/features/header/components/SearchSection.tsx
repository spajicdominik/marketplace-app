import { Input, Flex, AutoComplete, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { AutoCompleteProps } from "antd";
import { useState } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";

export default function SearchSection() {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const onSearch = (text: string) => {
    if (!text) {
      setOptions([]);
      return;
    }

    setOptions([
      {
        label: "Categories",
        options: ["Electronics", "Clothing"]
          .filter((c) => c.toLowerCase().includes(text.toLowerCase()))
          .map((c) => ({ value: c })),
      },
      {
        label: "Products",
        options: ["iPhone", "MacBook"]
          .filter((p) => p.toLowerCase().includes(text.toLowerCase()))
          .map((p) => ({ value: p })),
      },
    ]);
  };

  return (
    <div className="flex justify-between p-5 bg-white">
      <NavLink to={"/"}>
        <motion.img src="/logo.svg" alt=""  className="w-72 cursor-pointer"/>
      </NavLink>
      <AutoComplete options={options} onSearch={onSearch}>
        <div className="w-140">
            <Input size="large" className="h-13" placeholder="Search by category, product...">
            </Input>
        </div>
      </AutoComplete>
      <div>
        <Button type="primary" style={{height: 52}} className="w-52">SELL</Button>
      </div>
    </div>
  );
}
