import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import items from "./sidebar.json"

export default function Sidebar() {
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('http://localhost:8080/api/get-sidebar-list');
            const data = await response.json();
            setCategory(data);
        }
        fetchCategories();
    }, []);

    return (
        <div className="sidebar">
           {category.map((item, index) => <SidebarItem key={index} item={item}/>)}
        </div>
    );
}
          