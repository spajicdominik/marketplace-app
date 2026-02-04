import { useEffect, useState } from "react";
import { getAuthToken } from "../../utils/Auth";

function useFetchSidebarItems(){
    const [category, setCategory] = useState([]);

    useEffect(() => {
        async function fetchCategories() {
            const token = getAuthToken();
            const response = await fetch('http://localhost:8080/api/get-sidebar-list', {
                headers: {
                    'Authorization' : 'Bearer ' + token
                }
            });
            const data = await response.json();
            setCategory(data);
        }
        fetchCategories();
    }, []);

    return category;
}

export default useFetchSidebarItems;