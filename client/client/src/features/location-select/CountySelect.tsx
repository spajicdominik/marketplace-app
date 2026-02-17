import mapCountiesToOptions from "../../hooks/newPost/location/mapCountriesToOptions"
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import categorySlice from "../../store/category";
import type { AppDispatch } from "../../store";
import useFetchCounties from "../../hooks/newPost/location/useFetchCounties";

export default function CountySelect() {
    const currentCountryId = useSelector(
        (state: RootState) => state.newpost.countryId,
    );

    const counties = useFetchCounties(currentCountryId);
    const dispatch = useDispatch<AppDispatch>();

    const handleCountyChange = (value: string) => {
        const id = Number(value);
        dispatch(categorySlice.actions.setCounty(id));
    };

    return (
        <Select
            style={{ width: 150 }}
            options={mapCountiesToOptions(counties)}
            value={
                currentCountryId !== undefined
                    ? String(currentCountryId)
                    : undefined
            }
            onChange={handleCountyChange}
            placeholder="Select county"
        />
    )
}