import SidebarItem from "./components/SidebarItem";
import useFetchSidebarItems from "../../hooks/sidebar/useFetchSidebarItems";
import FilterMenu from "./components/FilterMenu";

export default function Sidebar({ onSelectProduct, onSelectCategory } : { onSelectProduct : (id: number) => void, onSelectCategory : (id:number) => void }) {
    const category = useFetchSidebarItems();

    return (
        <div className="sidebar m-4">
           {category.map((item, index) => <SidebarItem key={index} item={item} onSelectProduct={onSelectProduct} onSelectCategory={onSelectCategory}/>)}
            <FilterMenu></FilterMenu>
        </div>
        
    );
}
          