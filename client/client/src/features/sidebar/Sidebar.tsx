import { Menu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { mapCategoriesToMenuItems } from "./components/mapCategoriesToMenuItems";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";

const Sidebar = ({token} : {token : string | null}) => {
    const [items, setItems] = useState<MenuProps["items"]>([]);
    const categoryId = useSelector((state : RootState)=> state.category.categoryId);

    useEffect(() => {
        fetch(`http://localhost:8080/api/category/sidebar-items/${categoryId}`)
            .then(res => res.json())
            .then(data => {
                setItems(mapCategoriesToMenuItems(data));
            });
    }, [categoryId]);

    return (
        <div className="w-1/6 h-min">
            <Menu
                mode="inline"
                items={items}
                style={{ height: "100%", borderRight: 0 }}
            />
        </div>

    );
};

export default Sidebar;
