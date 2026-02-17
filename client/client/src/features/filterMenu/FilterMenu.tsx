import SideMenu from "../side-menu/SideMenu"
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import useFetchCategoryById from "../../hooks/useFetchCategoryById";
import LocationFilter from "./components/LocationFilter";

export default function FilterMenu({ token }: { token: string | null }) {
    const categoryId = useSelector((state: RootState) => state.category.categoryId);

    const category = useFetchCategoryById(categoryId);
    return (
        <div className="flex p-5 items-center">
            <SideMenu token={token}></SideMenu>
            <h1 className="text-black text-2xl font-medium mx-5">{ category?.name }</h1>
            <div className="w-1/5"></div>
            <h1 className="text-black text-xl font-light ml-5">Filter by:</h1>
            <LocationFilter/>
        </div>
    )
}