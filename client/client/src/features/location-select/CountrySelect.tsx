import mapCountriesToOptions from "../../hooks/newPost/location/mapCountriesToOptions"
import useFetchCountries from "../../hooks/newPost/location/useFetchCountries";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import newPostSlice from "../../store/newPostSlice";
import type { AppDispatch } from "../../store";

export default function CountrySelect() {
    const countries = useFetchCountries();
    const dispatch = useDispatch<AppDispatch>();

    const currentCountryId = useSelector(
        (state: RootState) => state.newpost.countryId,
    );

    const handleCountryChange = (value: string) => {
        const id = Number(value);
        dispatch(newPostSlice.actions.setCountryId(id));
    };

    return (
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
    )
}