import SideMenu from "../side-menu/SideMenu"
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import useFetchCategoryById from "../../hooks/useFetchCategoryById";
import SortMenu from "../sortMenu/SortMenu";
export default function FilterMenu({ token }: { token: string | null }) {
    const categoryId = useSelector((state: RootState) => state.category.categoryId);

    const category = useFetchCategoryById(categoryId);
    return (
        <div className="flex p-5 items-center border-b mb-10">
            <SideMenu token={token}></SideMenu>
            <h1 className="text-black text-2xl font-medium mx-5">{ category?.name }</h1>
            <div className="w-1/5"></div>
            <h1 className="text-black text-xl font-light ml-5">Sort by:</h1>
            <div className="mx-3 pt-2">
                <SortMenu></SortMenu>
            </div>
            
        </div>
    )
}