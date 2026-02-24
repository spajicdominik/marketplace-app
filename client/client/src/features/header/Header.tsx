import AuthBar from "./components/AuthBar";
import SearchSection from "./components/SearchSection";
import TopNavMegaMenu from "./components/TopNavMegaMenu";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import DropdownMenu from "./components/DropDownMenu";

type SubcategorySplitDto = {
    left : { id: number; name: string; categoryId: number }[];
    right : { id: number; name: string; categoryId: number }[];
}

export type CategoryMenuItem = {
  id: number;
  name: string;
  subcategories: SubcategorySplitDto;
};

export default function Header() {
    const [categories, setCategories] = useState<CategoryMenuItem[]>([]);
    const token = useSelector((state : RootState ) => state.auth.accessToken);

    useEffect(() => {
    fetch("http://localhost:8080/api/category/menu-items")
      .then((r) => r.json())
      .then(setCategories);
  }, [token]);


    return (
        <div className="">
            <AuthBar></AuthBar>
            <SearchSection></SearchSection>
            <DropdownMenu categories={categories}></DropdownMenu>
        </div>
    );
}