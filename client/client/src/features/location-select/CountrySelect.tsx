import mapCountriesToOptions from "../../hooks/newPost/location/mapCountriesToOptions"
import useFetchCountries from "../../hooks/newPost/location/useFetchCountries";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import categorySlice from "../../store/category";
import type { AppDispatch } from "../../store";
import type { Country } from "../../types/Country";

export default function CountrySelect() {
    const baseCountries = useFetchCountries();
    const nullCountry : Country = {
        id : 0,
        name : "All countries"
    }
    const countries = [nullCountry,...baseCountries];

    const dispatch = useDispatch<AppDispatch>();

    const currentCountryId = useSelector(
        (state: RootState) => state.category.countryId,
    );

    const handleCountryChange = (value: string) => {
        const id = Number(value);
        if (id == 0) {
            dispatch(categorySlice.actions.setCountry(null));
            return;
        }
        dispatch(categorySlice.actions.setCountry(id));
    };

    return (
        <Select
            style={{ width: 150 }}
            options={mapCountriesToOptions(countries)}
            value={
                currentCountryId !== null
                    ? String(currentCountryId)
                    : "All countries"
            }
            onChange={handleCountryChange}
            placeholder="Select country"
        />
    )
}