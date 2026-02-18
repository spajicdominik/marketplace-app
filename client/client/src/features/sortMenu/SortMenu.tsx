import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";
import categorySlice from "../../store/category";
import { Select } from "antd";

export default function SortMenu() {
    const dispatch = useDispatch<AppDispatch>();

    const handleSortChange = (value: string) => {
        if (value == 'price-asc') {
            dispatch(categorySlice.actions.setPriceAsc(true));
            return;
        }
        if (value == 'price-desc') {
            dispatch(categorySlice.actions.setPriceDesc(true));
            return;
        }
        if (value == 'date-asc') {
            dispatch(categorySlice.actions.setDateAsc(true));
            return;
        }
        if (value == 'date-desc') {
            dispatch(categorySlice.actions.setDateDesc(true));
            return;
        }
        if (value == 'none') {
            dispatch(categorySlice.actions.resetDescFilters());
            return;
        }
    }

    return (
        <Select
            defaultValue="none"
            style={{ width: 180 }}
            onChange={handleSortChange}
            options={[
                { value: 'none', label: 'None' },
                { value: 'price-asc', label: 'Price: low to high' },
                { value: 'price-desc', label: 'Price: high to low' },
                { value: 'date-asc', label: 'Date: oldest to newest' },
                { value: 'date-desc', label: 'Date: newest to oldest' },
            ]}
        />
    )
}