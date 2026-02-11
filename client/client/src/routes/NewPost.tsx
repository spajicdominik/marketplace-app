import { Input } from "antd";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import type { HTMLAriaDataAttributes } from "antd/es/_util/aria-data-attrs";
import { Select } from "antd";
import useFetchCategories from "../hooks/useFetchCategories";
import mapCategoriesToOptions from "../hooks/mapCategoriesToOptions";
import { useEffect, useState } from "react";
import useFetchSubcategories from "../hooks/useFetchSubcategories";
import mapSubcategoriesToOptions from "../hooks/mapSubcategoriesToOptions";
import useFetchProductTypes from "../hooks/useFetchProductType";
import mapProductTypesToOptions from "../hooks/mapProductTypesToOptions";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import newPostSlice from "../store/newPostSlice";

export type Option = {
  value: string;
  label: string;
  children?: Option[];
} & HTMLAriaDataAttributes;

const { TextArea } = Input;

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

export default function NewPost() {
  const dispatch = useDispatch<AppDispatch>();
  const currentCategoryId = useSelector(
    (state: RootState) => state.newpost.categoryId,
  );
  const currentSubcategoryId = useSelector(
    (state: RootState) => state.newpost.subcategoryId,
  );

  const categories = useFetchCategories();
  const subcategories = useFetchSubcategories(currentCategoryId);

  const handleCategoryChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCategoryId(id));
  };

  return (
    <div className="text-black bg-white p-4">
      <h1 className="m-3">Title</h1>
      <Input placeholder="Title"></Input>
      <h1>Description</h1>
      <TextArea rows={4} />
      <div className="flex">
        <h1>Price</h1>
        <InputNumber min={1} max={10} onChange={onChange} />
        <h1>Currency</h1>
        <Select
          defaultValue="EUR"
          style={{ width: 120 }}
          options={[{ value: "EUR", label: "EUR" }]}
        />
      </div>

      {/* CATEGORY PICKER */}
      <div className="flex">
        <div>
          <h1>Category</h1>
          <Select
            style={{ width: 120 }}
            options={mapCategoriesToOptions(categories)}
            value={
              currentCategoryId !== undefined
                ? String(currentCategoryId)
                : undefined
            }
            onChange={handleCategoryChange}
            placeholder="Select category"
          />
        </div>

        <div>
          <h1>Subcategory</h1>
          {currentCategoryId == undefined ? (
            <Select disabled style={{ width: 120 }} />
          ) : (
            <Select
              style={{ width: 120 }}
              options={mapSubcategoriesToOptions(subcategories)}
              value={
                currentSubcategoryId !== undefined
                  ? String(currentSubcategoryId)
                  : undefined
              }
              onChange={()=>{}}
              placeholder="Select subcategory"
            />
          )}
        </div>
      </div>
      <div>currentCategoryId : {currentCategoryId}</div>
      <div>currentSubcategoryId : {currentSubcategoryId}</div>
    </div>
  );
}
