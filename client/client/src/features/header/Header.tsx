import AuthBar from "./components/AuthBar";
import SearchSection from "./components/SearchSection";
import TopNavMegaMenu from "./components/TopNavMegaMenu";
import { useState, useEffect } from "react";

type CategoryMenuItem = {
  id: number;
  name: string;
  subcategories: { id: number; name: string; categoryId: number }[];
};

export default function Header({isLogedIn} : {isLogedIn : boolean}) {
    const [categories, setCategories] = useState<CategoryMenuItem[]>([]);

    useEffect(() => {
    fetch("http://localhost:8080/api/category/menu-items")
      .then((r) => r.json())
      .then(setCategories);
  }, []);


    return (
        <div className="">
            <AuthBar isLogedIn = {isLogedIn}></AuthBar>
            <SearchSection></SearchSection>
            <TopNavMegaMenu categories={categories}></TopNavMegaMenu>
        </div>
    );
}