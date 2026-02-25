import { Input, Flex, AutoComplete, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import type { AutoCompleteProps } from "antd";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import type { SearchBarDto } from "../../../types/SearchBarDto";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store";
import { categoryActions } from "../../../store/category";
import { useNavigate } from "react-router-dom";

export default function SearchSection() {
  const [options, setOptions] = useState<AutoCompleteProps["options"]>([]);

  const [searchData, setSearchData] = useState<SearchBarDto>();
  const dispatch = useDispatch<AppDispatch>();

  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:8080/api/search-bar-items")
      .then(res => setSearchData(res.data))
      .catch(err => console.error(err));
  }, []);


  const onSearch = (text: string) => {
    if (!text) {
      setOptions([]);
      return;
    }

    const searchBarData = searchData;

    setOptions([
      {
        label: "Category",
        options: searchBarData?.categories
          .filter((c) => c.name.toLowerCase().includes(text.toLowerCase()))
          .map(c => ({
            value: c.name,
            label: (
              <div onClick={() => {
                dispatch(categoryActions.setCategory(c.id));
                navigate('/products');
              }}>
                {c.name}
              </div>
            )
          }))
        ,
      },
      {
        label: "Subcategory",
        options: searchBarData?.subcategories
          .filter((c) => c.name.toLowerCase().includes(text.toLowerCase()))
          .map(c => ({
            value: c.name,
            label: (
              <div onClick={() => {
                dispatch(categoryActions.setCategory(c.categoryId));
                dispatch(categoryActions.setSubcategory(c.id));
                navigate('/products');
              }}>
                {c.name}
              </div>
            )
          }))
      },
      {
        label: "Product type",
        options: searchBarData?.productTypes
          .filter((c) => c.name.toLowerCase().includes(text.toLowerCase()))
          .map(c => ({
            value: c.name,
            label: (
              <div onClick={() => {
                dispatch(categoryActions.setCategory(c.categoryId));
                dispatch(categoryActions.setSubcategory(c.subcategoryId));
                dispatch(categoryActions.setSubcategoryItem(c.id));
                navigate('/products');
              }}>
                {c.name}
              </div>
            )
          })),
      },
      {
        label: "Product",
        options: searchBarData?.products
          .filter((c) => c.name.toLowerCase().includes(text.toLowerCase()))
          .map(c => ({
            value: c.name,
            label: (
              <div onClick={() => {
                dispatch(categoryActions.reset(""));
                dispatch(categoryActions.setCategory(c.categoryId));
                dispatch(categoryActions.setProduct(c.id));
                navigate('/products');
              }}>
                {c.name}
              </div>
            )
          })),
      }
    ]);
  };

  return (
    <div className="flex justify-between p-5 bg-white">
      <NavLink to={"/"}>
        <motion.img src="/logo.svg" alt="" className="w-72 cursor-pointer" />
      </NavLink>
      <AutoComplete options={options} onSearch={onSearch}>
        <div className="w-140">
          <Input size="large" className="h-13" placeholder="Search by category, product...">
          </Input>
        </div>
      </AutoComplete>
      <div>
        <Button type="primary" style={{ height: 52 }} className="w-52"><NavLink to="/newPost">SELL</NavLink></Button>
      </div>
    </div>
  );
}
