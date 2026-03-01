import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import useFetchUserDetails from "../hooks/userDetails/useFetchUserDetails";
import type { UserDetails } from "../types/UserDetails";
import useFetchLocationDto from "../hooks/userDetails/useFetchLocation";
import type { EditPostState } from "../store/editPostSlice";
import type { EditUserState } from "../store/editUserSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../store";
import editUserSlice from "../store/editUserSlice";
import { ToastContainer, toast } from "react-toastify";
import { Input, Button, Modal } from "antd";
import type { InputNumberProps } from "antd";
import { InputNumber } from "antd";
import type { HTMLAriaDataAttributes } from "antd/es/_util/aria-data-attrs";
import { Select } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { DatePicker } from "antd";
import useFetchCountries from "../hooks/newPost/location/useFetchCountries";
import useFetchCounties from "../hooks/newPost/location/useFetchCounties";
import useFetchCities from "../hooks/newPost/location/useFetchCities";
import mapCountriesToOptions from "../hooks/newPost/location/mapCountriesToOptions";
import mapCountiesToOptions from "../hooks/newPost/location/mapCountiesToOptions";
import mapCitiesToOptions from "../hooks/newPost/location/mapCitiesToOptions";
import axios from "axios";
import type { EditProfileHandle } from "../features/imageupload/EditProfileImage";
import type { ProfileImg } from "../types/ProfileImg";
import type { UserImage } from "../types/UserImage";
import EditProfileImage from "../features/imageupload/EditProfileImage";

export interface EditUserDto {
  firstName: string;
  lastName: string;
  gender: string;
  birthDate: string;
  phoneNumber: string;
  cityId: number;
}

export default function EditUser() {
  const params = useParams();
  const userId = Number(params.userId);

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userDetails = useFetchUserDetails(userId);
  const fullLocation = useFetchLocationDto(userDetails?.cityId);

  const currentUser: EditUserState = {
    firstName: userDetails?.firstName,
    lastName: userDetails?.lastName,
    gender: userDetails?.gender,
    birthDate: userDetails?.birthDate,
    phoneNumber: userDetails?.phoneNumber,
    cityId: userDetails?.cityId,
    countryId: fullLocation?.countryId,
    countyId: fullLocation?.countyId,
  };

  useEffect(() => {
    dispatch(editUserSlice.actions.resetEditUser());
  }, [dispatch, userId]);

  useEffect(() => {
    if (!userDetails || !fullLocation) return;

    dispatch(editUserSlice.actions.setState(currentUser));
  }, [dispatch, userDetails, fullLocation, userId]);

  const currentFirstName = useSelector(
    (state: RootState) => state.edituser.firstName,
  );
  const currentLastName = useSelector(
    (state: RootState) => state.edituser.lastName,
  );
  const currentGender = useSelector(
    (state: RootState) => state.edituser.gender,
  );
  const currentBirthDate = useSelector(
    (state: RootState) => state.edituser.birthDate,
  );
  const currentPhoneNumber = useSelector(
    (state: RootState) => state.edituser.phoneNumber,
  );
  const currentCityId = useSelector(
    (state: RootState) => state.edituser.cityId,
  );
  const currentCountryId = useSelector(
    (state: RootState) => state.edituser.countryId,
  );
  const currentCountyId = useSelector(
    (state: RootState) => state.edituser.countyId,
  );

  const countries = useFetchCountries();
  const counties = useFetchCounties(currentCountryId);
  const cities = useFetchCities(currentCountyId);

  const handleFirstNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editUserSlice.actions.setFirstName(e.target.value));
  };
  const handleLastNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editUserSlice.actions.setLastName(e.target.value));
  };
  const handleGenderChange = (value: string) => {
    dispatch(editUserSlice.actions.setGender(value));
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(editUserSlice.actions.setPhoneNumber(e.target.value));
  };
  const handleCityChange = (value: string) => {
    const id = Number(value);
    dispatch(editUserSlice.actions.setCity(id));
  };
  const handleCountryChange = (value: string) => {
    const id = Number(value);
    dispatch(editUserSlice.actions.setCountry(id));
  };
  const handleCountyChange = (value: string) => {
    const id = Number(value);
    dispatch(editUserSlice.actions.setCounty(id));
  };

  const editProfileRef = useRef<EditProfileHandle>(null);

  const validate = () => {
    if (!currentFirstName?.trim()) {
      toast.error("Please insert first name!");
      return false;
    }
    if (!currentLastName?.trim()) {
      toast.error("Please insert last name!");
      return false;
    }
    if (!currentGender?.trim()) {
      toast.error("Please insert gender!");
      return false;
    }
    if (!currentPhoneNumber?.trim()) {
      toast.error("Please insert phone number!");
      return false;
    }
    if (!currentCityId) {
      toast.error("Please choose a city!");
      return false;
    }
    if (!currentCountryId) {
      toast.error("Please choose a country!");
      return false;
    }
    if (!currentCountyId) {
      toast.error("Please choose a county!");
      return false;
    }
    return true;
  };

  const editUser = async () => {
    const payload: EditUserDto = {
      firstName: currentFirstName!,
      lastName: currentLastName!,
      gender: currentGender!,
      birthDate: currentBirthDate!,
      phoneNumber: currentPhoneNumber!,
      cityId: currentCityId!,
    };

    try {
      const token = localStorage.getItem("access_token");

      if (validate()) {
        await axios.put(
          `http://localhost:8080/api/userDetails/edit/${userId}`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        );
        const imageBody = await editProfileRef.current?.upload();
        if (imageBody != null) {
          await axios.delete(`http://localhost:8080/api/user-image/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          const imageUrl = Array.isArray(imageBody)
            ? imageBody?.[0]?.url
            : undefined;

          const profileImage: ProfileImg = {
            image_url: imageUrl,
          };
          await axios.post(
            `http://localhost:8080/api/user-image/${userId}`,
            profileImage,
          );
        }

        dispatch(editUserSlice.actions.resetEditUser());
        console.log("Edited user:", userId);
        navigate(`/users/${userId}`);
      }
    } catch (e) {}
  };

  return (
    <div className="text-black bg-white p-4">
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
      <h1 className="text-3xl font-bold pl-5">Edit user details</h1>
      <div className="p-5">
        <h1 className="m-3">First name</h1>
        <Input
          placeholder="First name"
          onChange={handleFirstNameChange}
          value={currentFirstName}
        ></Input>
        <h1>Last name</h1>
        <Input
          placeholder="Last name"
          onChange={handleLastNameChange}
          value={currentLastName}
        />
        <h1>Gender</h1>
        <Select
          value={currentGender}
          style={{ width: 120 }}
          options={[
            { value: "M", label: "Male" },
            { value: "F", label: "Female" },
            { value: "O", label: "Other" },
          ]}
          onChange={handleGenderChange}
        />

        <h1>Birth Date</h1>
        <DatePicker
          style={{ width: "100%" }}
          value={currentBirthDate ? dayjs(currentBirthDate) : null}
          onChange={(date) => {
            dispatch(
              editUserSlice.actions.setBirthDate(
                date ? date.format("YYYY-MM-DD") : "",
              ),
            );
          }}
        />
        <h1>Phone number</h1>
        <Input
          placeholder="+385 99 123 4567"
          onChange={handlePhoneNumberChange}
          value={currentPhoneNumber}
        />

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
        <EditProfileImage ref={editProfileRef} />
        <Button onClick={editUser}>Edit user</Button>
      </div>
    </div>
  );
}
