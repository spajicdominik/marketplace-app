import { Input, Button, Modal } from "antd";
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
import Uploader, {
  type UploaderHandle,
} from "../features/imageupload/Uploader";
import EditMainImage from "../features/imageupload/EditMainImage";
import type { NewPostType } from "../types/NewPost";
import useNewPost from "../hooks/newPost/useNewPost";
import { useRef } from "react";
import type { EditImageHandle } from "../features/imageupload/EditMainImage";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import type { PostImage } from "../types/PostImage";
import usePostImage from "../hooks/newPost/images/useMainImage";
import editPostSlice from "../store/editPostSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchPostDetails from "../hooks/postDetails/useFetchPostDetails";
import useFetchFullCategories from "../hooks/editPost/useFetchFullCategories";
import useFetchLocationDto from "../hooks/userDetails/useFetchLocation";
import type { EditPostState } from "../store/editPostSlice";
import EditUploader from "../features/imageupload/EditUploader";
import useEditPost from "../hooks/editPost/useEditPost";
import axios from "axios";
import { useState } from "react";
import type { EditUploaderHandle } from "../features/imageupload/EditUploader";

export type Option = {
  value: string;
  label: string;
  children?: Option[];
} & HTMLAriaDataAttributes;

const { TextArea } = Input;

const onChange: InputNumberProps["onChange"] = (value) => {
  console.log("changed", value);
};

export default function EditPost() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const params = useParams();
  const postId = Number(params.postId);

  const postDetails = useFetchPostDetails(postId);

  const fullCategories = useFetchFullCategories(postDetails?.product.id);
  const fullLocation = useFetchLocationDto(postDetails?.location.cityId);

  const currentUserId = useSelector(
    (state: RootState) => state.auth.user?.user_id,
  );

  const currentPost: EditPostState = {
    title: postDetails?.title,
    description: postDetails?.description,
    price: postDetails?.price.toString(),
    currency: postDetails?.currency,
    user_id: currentUserId,
    categoryId: fullCategories?.categoryId,
    subcategoryId: fullCategories?.subcategoryId,
    productTypeId: fullCategories?.subcategoryItemId,
    brandId: fullCategories?.brandId,
    productId: fullCategories?.productId,
    countryId: fullLocation?.countryId,
    countyId: fullLocation?.countyId,
    cityId: fullLocation?.cityId,
    addressLine1: postDetails?.location.addressLine1,
    addressLine2: postDetails?.location.addressLine2,
    postalCode: postDetails?.location.postalCode,
    currentPostId: postDetails?.id,
    editPost: undefined,
    editPostPictures: false,
  };

  useEffect(() => {
    dispatch(editPostSlice.actions.resetEditPost());
  }, [dispatch, postId]);

  useEffect(() => {
    if (!postDetails || !fullCategories || !fullLocation) return;

    dispatch(editPostSlice.actions.setState(currentPost));

  }, [dispatch, postDetails, fullCategories, fullLocation, postId]);

  const currentCategoryId = useSelector(
    (state: RootState) => state.editpost.categoryId,
  );
  const currentSubcategoryId = useSelector(
    (state: RootState) => state.editpost.subcategoryId,
  );
  const currentProductTypeId = useSelector(
    (state: RootState) => state.editpost.productTypeId,
  );
  const currentBrandId = useSelector(
    (state: RootState) => state.editpost.brandId,
  );
  const currentProductId = useSelector(
    (state: RootState) => state.editpost.productId,
  );
  const currentCountryId = useSelector(
    (state: RootState) => state.editpost.countryId,
  );
  const currentCountyId = useSelector(
    (state: RootState) => state.editpost.countyId,
  );
  const currentCityId = useSelector(
    (state: RootState) => state.editpost.cityId,
  );
  const currentAddress1 = useSelector(
    (state: RootState) => state.editpost.addressLine1,
  );
  const currentAddress2 = useSelector(
    (state: RootState) => state.editpost.addressLine2,
  );
  const postalCode = useSelector(
    (state: RootState) => state.editpost.postalCode,
  );
  const title = useSelector((state: RootState) => state.editpost.title);
  const description = useSelector(
    (state: RootState) => state.editpost.description,
  );

  const price = useSelector((state: RootState) => state.editpost.price);
  const currency = useSelector((state: RootState) => state.editpost.currency);
  const user_id = useSelector((state: RootState) => state.auth.user?.user_id);

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
    dispatch(editPostSlice.actions.setCategoryId(id));
  };

  const handleSubcategoryChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setSubcategoryId(id));
  };

  const handleProductTypeChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setProductTypeId(id));
  };
  const handleBrandChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setBrandId(id));
  };
  const handeProductChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setProductId(id));
  };
  const handleCountryChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setCountryId(id));
  };
  const handleCountyChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setCountyId(id));
  };
  const handleCityChange = (value: string) => {
    const id = Number(value);
    dispatch(editPostSlice.actions.setCityId(id));
  };
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editPostSlice.actions.setTitle(e.target.value));
  };

  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    dispatch(editPostSlice.actions.setDescription(e.target.value));
  };

  const handlePriceChange: InputNumberProps["onChange"] = (value) => {
    dispatch(editPostSlice.actions.setPrice(value ? String(value) : ""));
  };

  const handleCurrencyChange = (value: string) => {
    dispatch(editPostSlice.actions.setCurrency(value));
  };

  const handleAddress1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editPostSlice.actions.setAddressLine1(e.target.value));
  };
  const handleAddress2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editPostSlice.actions.setAddressLine2(e.target.value));
  };
  const handlePostalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editPostSlice.actions.setPostalCode(e.target.value));
  };

  const editImageRef = useRef<EditImageHandle>(null);
  const editUploaderRef = useRef<EditUploaderHandle>(null);

  const validate = () => {
    if (!title?.trim()) {
      toast.error("Please insert post title!");
      return false;
    }
    if (!price || isNaN(Number(price))) {
      toast.error("Please insert post price!");
      return false;
    }
    if (!currentProductId) {
      toast.error("Please choose a product!");
      return false;
    }
    if (!currentCityId) {
      toast.error("Please choose a city!");
      return false;
    }
    if (!currency) {
      toast.error("Please choose a currency!");
      return false;
    }
    if (!user_id) {
      toast.error("User not logged in!");
      return false;
    }
    return true;
  };

  const editPost = async () => {
    const payload: NewPostType = {
      title,
      description,
      price,
      currency,
      user_id: currentUser?.user_id,
      product_id: currentProductId!,
      address_line1: currentAddress1,
      address_line2: currentAddress2,
      postal_code: postalCode,
      city_id: currentCityId!,
    };

    try {
      if (validate()) {
        const edited = await useEditPost(payload, postId);

        const imageBody = await editImageRef.current?.upload();
        if (imageBody != null) {
          await axios.delete(`http://localhost:8080/api/postImages/main-image?post_id=${postId}`);
          const imageUrl = Array.isArray(imageBody)
            ? imageBody?.[0]?.url
            : undefined;

          const mainImage: PostImage = {
            url: imageUrl,
            postId: postId,
            isMain: true,
            isActive: true
          };
          usePostImage(mainImage);
          console.log(
            "Main image: ",
            Array.isArray(imageUrl) ? imageUrl?.[0]?.url : undefined,
          );
        }

        editUploaderRef.current?.upload();

        dispatch(editPostSlice.actions.resetEditPost());
        console.log("Edited post:", postId);

        navigate("/edit-success");
      }
    } catch (e) { }
  };

  const currentUser = useSelector((state: RootState) => state.auth.user);

  const deletePost = async () => {
    try {
      await axios.delete(`http://localhost:8080/api/posts/${postId}`);
      navigate("/deletion-success");
      toast.success(`Succesifuly deleted post with id: ${postId}`);
    }
    catch (e) {
      console.error("Error : ", e);
    }
  };

  const cancelEdit = () => {
    dispatch(editPostSlice.actions.resetEditPost());
    navigate(`/post/${postId}`);
  }

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    deletePost();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="text-black bg-white p-4 ">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h1 className="text-3xl font-bold pl-5">Edit post</h1>
      <div className="p-5">
        <h1 className="m-3">Title</h1>
        <Input
          placeholder="Title"
          onChange={handleTitleChange}
          value={title}
        ></Input>
        <h1>Description</h1>
        <TextArea
          rows={4}
          onChange={handleDescriptionChange}
          value={description}
        />
        <div className="flex pt-5">
          <h1>Price</h1>
          <InputNumber
            min={1}
            max={1000000}
            onChange={handlePriceChange}
            value={price}
          />
          <h1>Currency</h1>
          <Select
            defaultValue="EUR"
            style={{ width: 120 }}
            options={[{ value: "EUR", label: "EUR" }]}
            onChange={handleCurrencyChange}
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
              currentCityId !== undefined ? String(currentCityId) : undefined
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
          <Input
            placeholder="Address Line 1"
            onChange={handleAddress1Change}
            defaultValue={currentAddress1}
          ></Input>
        </div>
        <div>
          <h1>Address Line 2</h1>
          <Input
            placeholder="Address Line 2"
            onChange={handleAddress2Change}
            defaultValue={currentAddress2}
          ></Input>
        </div>
        <div>
          <h1>Postal Code</h1>
          <Input
            placeholder="Postal Code"
            onChange={handlePostalChange}
            defaultValue={postalCode}
          ></Input>
        </div>
      </div>

      <div>
        <h1>Edit main image</h1>
        <EditMainImage ref={editImageRef}></EditMainImage>
      </div>

      <div>
        <h1>Edit post images</h1>
        <EditUploader ref={editUploaderRef}></EditUploader>
      </div>
      <div className="p-5 flex justify-between">
        <div className="flex">
          <Button type="primary" variant="solid" onClick={editPost}>
            Edit Post
          </Button>

          <Button onClick={cancelEdit}>Cancel</Button>
        </div>

        <Button danger variant="solid" onClick={showModal}>
          Delete Post
        </Button>

        <Modal
          title="Are you sure you want do delete this post?"
          closable={{ 'aria-label': 'Custom Close Button' }}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <p>Deleting a post is permanent and can't be undone.</p>
        </Modal>
      </div>
    </div>
  );
}
