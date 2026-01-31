import { IoIosSettings } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";

export default function SidebarItem({item}: any) {
    const [open, setOpen] = useState(false)

    if(item.children.length > 0){
    return (
        <div className={open ? "sidebar-item open text-black" : "sidebar-item text-black"}>
            <div className="sidebar-title">
                <span>
                    {item.name}
                </span>
                <FaChevronDown className="toggle-btn" onClick={() => setOpen(!open)}/>
            </div>
            <div className="sidebar-content">
                { item.children.map((child : any, index : number) => <SidebarItem key={index} item={child} />) }
            </div>
        </div>
    );
}else {
    return(
        <div className={open ? "sidebar-item open text-black" : "sidebar-item text-black"}>
            <div className="sidebar-title">
                <span>
                    {item.name}
                </span>
                <FaChevronDown className="toggle-btn" onClick={() => setOpen(!open)}/>
            </div>
            <div className="sidebar-content flex-col">
                {item.products.map((product : any, index: number) => <div className="cursor-pointer">{product.name}</div>)}
            </div>
        </div>
    );
}
}