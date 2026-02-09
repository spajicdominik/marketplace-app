import { Menu } from "antd";
import { useEffect, useState } from "react";
import type { MenuProps } from "antd";
import { mapCategoriesToMenuItems } from "./components/mapCategoriesToMenuItems";


const Sidebar = () => {
    const [items, setItems] = useState<MenuProps["items"]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/api/category/sidebar-items/1")
            .then(res => res.json())
            .then(data => {
                setItems(mapCategoriesToMenuItems(data));
            });
    }, []);

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
