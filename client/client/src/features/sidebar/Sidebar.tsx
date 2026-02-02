import { useEffect, useState } from "react";
import SidebarItem from "./SidebarItem";
import items from "./sidebar.json"

export default function Sidebar({ onSelectProduct, onSelectCategory } : { onSelectProduct : (id: number) => void, onSelectCategory : (id:number) => void }) {
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
        <div className="sidebar m-4">
           {category.map((item, index) => <SidebarItem key={index} item={item} onSelectProduct={onSelectProduct} onSelectCategory={onSelectCategory}/>)}
           <div className="text-black">
            Filter menu
           </div>
        </div>
        
    );
}
          