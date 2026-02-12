import { Input, message } from "antd";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import type { HTMLAriaDataAttributes } from "antd/es/_util/aria-data-attrs";
import { Select } from "antd";
import useFetchCategories from "../hooks/useFetchCategories";
import mapCategoriesToOptions from "../hooks/mapCategoriesToOptions";
import useFetchSubcategories from "../hooks/useFetchSubcategories";
import mapSubcategoriesToOptions from "../hooks/mapSubcategoriesToOptions";
import useFetchProductTypes from "../hooks/useFetchProductType";
import mapProductTypesToOptions from "../hooks/mapProductTypesToOptions";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";
import newPostSlice from "../store/newPostSlice";
import useFetchProducts from "../hooks/useFetchProducts";
import mapProductsToOptions from "../hooks/mapProductsToOptions";
import mapBrandsToOptions from "../hooks/mapBrandsToOptions";
import useFetchBrands from "../hooks/useFetchBrands";
import mapCountriesToOptions from "../hooks/newPost/location/mapCountriesToOptions";
import mapCountiesToOptions from "../hooks/newPost/location/mapCountiesToOptions";
import mapCitiesToOptions from "../hooks/newPost/location/mapCitiesToOptions";
import useFetchCountries from "../hooks/newPost/location/useFetchCountries";
import useFetchCounties from "../hooks/newPost/location/useFetchCounties";
import useFetchCities from "../hooks/newPost/location/useFetchCities";
import Uploader from "../features/imageupload/Uploader";


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
  const currentProductTypeId = useSelector(
    (state: RootState) => state.newpost.productTypeId,
  )
  const currentBrandId = useSelector(
    (state: RootState) => state.newpost.brandId,
  )
  const currentProductId = useSelector(
    (state: RootState) => state.newpost.productId,
  )
  const currentCountryId = useSelector(
    (state: RootState) => state.newpost.countryId,
  )
  const currentCountyId = useSelector(
    (state: RootState) => state.newpost.countyId,
  )
  const currentCityId = useSelector(
    (state: RootState) => state.newpost.cityId,
  )
  const currentAddress1 = useSelector(
    (state: RootState) => state.newpost.addressLine1,
  )
  const currentAddress2 = useSelector(
    (state: RootState) => state.newpost.addressLine2,
  )
  const postalCode = useSelector(
    (state: RootState) => state.newpost.postalCode,
  )
  

  const categories = useFetchCategories();
  const subcategories = useFetchSubcategories(currentCategoryId);
  const productTypes = useFetchProductTypes(currentSubcategoryId);
  const brands = useFetchBrands(currentProductTypeId);
  const products = useFetchProducts(currentBrandId);
  const countries = useFetchCountries();
  const counties = useFetchCounties(currentCountryId);
  const cities = useFetchCities(currentCountyId);

  const handleCategoryChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCategoryId(id));
  };

  const handleSubcategoryChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setSubcategoryId(id))
  }

  const handleProductTypeChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setProductTypeId(id));
  }
  const handleBrandChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setBrandId(id));
  }
  const handeProductChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setProductId(id));
  }
  const handleCountryChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCountryId(id));
  }
  const handleCountyChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCountyId(id));
  }
  const handleCityChange = (value: string) => {
    const id = Number(value);
    dispatch(newPostSlice.actions.setCityId(id));
  }

  return (
    <div className="text-black bg-white p-4 ">
      <h1 className="text-3xl font-bold pl-5">Create a post</h1>
      <div className="p-5">
        <h1 className="m-3">Title</h1>
        <Input placeholder="Title"></Input>
        <h1>Description</h1>
        <TextArea rows={4} />
        <div className="flex pt-5">
          <h1>Price</h1>
          <InputNumber min={1} max={1000000} onChange={onChange} />
          <h1>Currency</h1>
          <Select
            defaultValue="EUR"
            style={{ width: 120 }}
            options={[{ value: "EUR", label: "EUR" }]}
          />
        </div>
      </div>


      {/* CATEGORY PICKER */}
      <div className="flex p-5">
        <div>
          <h1>Category</h1>
          <Select
            style={{ width: 150 }}
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
            <Select disabled style={{ width: 150 }} />
          ) : (
            <Select
              style={{ width: 150 }}
              options={mapSubcategoriesToOptions(subcategories)}
              value={
                currentSubcategoryId !== undefined
                  ? String(currentSubcategoryId)
                  : undefined
              }
              onChange={handleSubcategoryChange}
              placeholder="Select subcategory"
            />
          )}
        </div>

        <div>
          <h1>Product Type</h1>
          {currentSubcategoryId == undefined ? (
            <Select disabled style={{ width: 150 }} />
          ) : (
            <Select
              style={{ width: 150 }}
              options={mapProductTypesToOptions(productTypes)}
              value={
                currentProductTypeId !== undefined
                  ? String(currentProductTypeId)
                  : undefined
              }
              onChange={handleProductTypeChange}
              placeholder="Select product type"
            />
          )}
        </div>

        <div>
          <h1>Brand</h1>
          {currentProductTypeId == undefined ? (
            <Select disabled style={{ width: 150 }} />
          ) : (
            <Select
              style={{ width: 150 }}
              options={mapBrandsToOptions(brands)}
              value={
                currentBrandId !== undefined
                  ? String(currentBrandId)
                  : undefined
              }
              onChange={handleBrandChange}
              placeholder="Select brand type"
            />
          )}
        </div>

        <div>
          <h1>Products</h1>
          {currentBrandId == undefined ? (
            <Select disabled style={{ width: 150 }} />
          ) : (
            <Select
              style={{ width: 150 }}
              options={mapProductsToOptions(products)}
              value={
                currentProductId !== undefined
                  ? String(currentProductId)
                  : undefined
              }
              onChange={handeProductChange}
              placeholder="Select product type"
            />
          )}
        </div>
      </div>

      {/* LOCATION PICKER */}
      <div className="flex p-5">
        <div>
          <h1>Country</h1>
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
        </div>

        <div>
          <h1>County</h1>
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
        </div>

        <div>
          <h1>City</h1>
          <Select
            style={{ width: 150 }}
            options={mapCitiesToOptions(cities)}
            value={
              currentCityId !== undefined
                ? String(currentCityId)
                : undefined
            }
            onChange={handleCityChange}
            placeholder="Select city"
          />
        </div>
      </div>

      {/* ADDRESS PICKER */}
      <div className="flex p-5">
        <div>
          <h1>Address Line 1</h1>
          <Input placeholder="Address Line 1"></Input>
        </div>
        <div>
          <h1>Address Line 2</h1>
          <Input placeholder="Address Line 2"></Input>
        </div>
        <div>
          <h1>Postal Code</h1>
          <Input placeholder="Postal Code"></Input>
        </div>
      </div>

      <Uploader></Uploader>
    </div>
  );
}
