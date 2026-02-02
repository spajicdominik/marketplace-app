import { useEffect, useState } from "react";

function useFetchSidebarItems(){
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const response = await fetch('http://localhost:8080/api/get-sidebar-list');
            const data = await response.json();
            setCategory(data);
        }
        fetchCategories();
    }, []);

    return category;
}

export default useFetchSidebarItems;