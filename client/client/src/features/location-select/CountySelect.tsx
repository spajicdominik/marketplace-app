import mapCountiesToOptions from "../../hooks/newPost/location/mapCountriesToOptions"
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import { Select } from "antd";
import { useDispatch } from "react-redux";
import categorySlice from "../../store/category";
import type { AppDispatch } from "../../store";
import useFetchCounties from "../../hooks/newPost/location/useFetchCounties";
import type { County } from "../../types/County";

export default function CountySelect() {
    const currentCountryId = useSelector(
        (state: RootState) => state.category.countryId,
    );

    const currentCountyId = useSelector(
        (state: RootState) => state.category.countyId,
    );

    const baseCounties = useFetchCounties(currentCountryId);
    const dispatch = useDispatch<AppDispatch>();

    const nullCounty : County = {
        id : 0,
        name: "All counties"
    }
    const counties = [nullCounty, ...baseCounties];

    const handleCountyChange = (value: string) => {
        const id = Number(value);
        if (id == 0) {
            dispatch(categorySlice.actions.setCounty(null));
            return;
        }
        dispatch(categorySlice.actions.setCounty(id));
    };


    return (
        <Select
            style={{ width: 150 }}
            options={mapCountiesToOptions(counties)}
            value={
                currentCountyId !== null
                    ? String(currentCountyId)
                    : "All counties"
            }
            onChange={handleCountyChange}
            placeholder="Select county"
        />
    )
}