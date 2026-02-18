import mapCitiesToOptions from "../../hooks/newPost/location/mapCitiesToOptions"
import { Select } from "antd"
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import useFetchCities from "../../hooks/newPost/location/useFetchCities";
import categorySlice from "../../store/category";
import type { City } from "../../types/City";


export default function CitySelect() {
    const dispatch = useDispatch<AppDispatch>();
    const currentCityId = useSelector((state: RootState) => state.category.cityId);
    const currentCountyId = useSelector(
        (state: RootState) => state.category.countyId,
    );
    const citiesOptions = useFetchCities(currentCountyId);
    const nullOption : City = {
        id : 0,
        name : "All cities"
    }
    const cities = [nullOption,...citiesOptions];

    const handleCityChange = (value: string) => {
        const id = Number(value);
        if (id == 0){
            dispatch(categorySlice.actions.setCity(null));
            return;
        }
        dispatch(categorySlice.actions.setCity(id));
    };

    return (
        <Select
            style={{ width: 150 }}
            options={mapCitiesToOptions(cities)}
            value={
                currentCityId !== null ? String(currentCityId) : "All cities"
            }
            onChange={handleCityChange}
            placeholder="Select city"
        />
    )
}