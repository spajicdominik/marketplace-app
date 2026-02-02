import { IoIosSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function SidebarItem({item, onSelectProduct, onSelectCategory}: any) {
    const [open, setOpen] = useState(false)

    
    if(item.children.length > 0){
    return (
        <div className={open ? "sidebar-item open text-black" : "sidebar-item text-black"}>
            <div className="sidebar-title">
                <span className="cursor-pointer" onClick={() => {onSelectCategory(item.id)}}>
                    {item.name}
                </span>
                <FaChevronDown className="toggle-btn" onClick={() => setOpen(!open)}/>
            </div>
            <div className="sidebar-content">
                { item.children.map((child : any, index : number) => <SidebarItem key={index} item={child} onSelectProduct={onSelectProduct} onSelectCategory={onSelectCategory}/>) }
            </div>
        </div>
    );
}else {
    return(
        <div className={open ? "sidebar-item open text-black" : "sidebar-item text-black"}>
            <div className="sidebar-title">
                <span className="cursor-pointer" onClick={() => {onSelectCategory(item.id)}}>
                    {item.name}
                </span>
                <FaChevronDown className="toggle-btn" onClick={() => setOpen(!open)}/>
            </div>
            <div className="sidebar-content flex-col">
                {
                item.products.map((product : any, index: number) => <div className="cursor-pointer" onClick={() => {onSelectProduct(product.id)}}>{product.name}</div>)}
            </div>
        </div>
    );
}
}