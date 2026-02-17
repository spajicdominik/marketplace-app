import { Menu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { mapCategoriesToMenuItems } from "./components/mapCategoriesToMenuItems";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../../store";
import categorySlice from "../../store/category";
import sidebarSlice from "../../store/sidebarSlice";

const Sidebar = ({token} : {token : string | null}) => {
    const dispatch = useDispatch<AppDispatch>();
    const [items, setItems] = useState<MenuProps["items"]>([]);
    const categoryId = useSelector((state : RootState)=> state.category.categoryId);

    useEffect(() => {
        fetch(`http://localhost:8080/api/category/sidebar-items/${categoryId}`)
            .then(res => res.json())
            .then(data => {
                setItems(mapCategoriesToMenuItems(data));
            });
    }, [categoryId]);

    const onClick: MenuProps["onClick"] = ({key}) => {
        const [type, idStr] = String(key).split("-");
        const id = Number(idStr);
        if(type === "subcategory") {
            dispatch(categorySlice.actions.setSubcategory(id));
        }
        if(type === "subcategory-item") {
            dispatch(categorySlice.actions.setSubcategoryItem(id));
        }
        if(type === "product") {
            dispatch(categorySlice.actions.setProduct(id));
        }
        dispatch(sidebarSlice.actions.onClose());
    }

    return (
        <div className="w-90 h-min">
            <Menu
                mode="vertical"
                items={items}
                onClick={onClick}
                style={{ height: "100%", borderRight: 0}}
            />
        </div>

    );
};

export default Sidebar;
