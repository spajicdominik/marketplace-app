import { useEffect, useState } from "react";
import type { Post } from "../../features/postlist/components/Post";
import axios from "axios";
import type { Page } from "../../types/PaginatedPost";

export default function useFilterPosts(
    categoryId : number, 
    subcategoryId : number | null, 
    subcategoryItemId : number | null, 
    productId : number | null,
    countryId : number | null,
    countyId : number | null,
    city_id : number | null,
    min_price: number | null,
    max_price : number | null,
    sortPriceDesc : boolean | null,
    sortPriceAsc : boolean | null,
    sortDateDesc: boolean | null,
    sortDateAsc: boolean | null
) 
{
    const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(4);
    const [totalElements, setTotalElements] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        let url = `http://localhost:8080/api/posts-filter?category_id=${categoryId}&page=${page}&size=${size}`

        if (subcategoryId != null) {
            url += `&subcategory_id=${subcategoryId}`;
        }
        if (subcategoryItemId != null) {
            url+= `&subcategory_item_id=${subcategoryItemId}`;
        }
        if (productId != null) {
            url+=`&product_id=${productId}`;
        }
        if (countryId != null) {
            url+=`&country_id=${countryId}`;
        }
        if (countyId != null) {
            url+=`&county_id=${countyId}`;
        }
        if (city_id != null) {
            url+=`&city_id=${city_id}`;
        }
        if (min_price != null) {
            url+=`&min_price=${min_price}`;
        }
        if (max_price != null) {
            url+=`&max_price=${max_price}`;
        }
        if (sortPriceDesc != null) {
            url+=`&sortPriceDesc=${sortPriceDesc}`;
        }
        if (sortPriceAsc != null) {
            url+=`&sortPriceAsc=${sortPriceAsc}`;
        }
        if (sortDateDesc != null) {
            url+=`&sortDateDesc=${sortDateDesc}`;
        }
        if (sortDateAsc != null) {
            url+=`&sortDateAsc=${sortDateAsc}`;
        }
        
        const fetchFilteredPosts = async () => {
            try {
                const response = await axios.get(url);
                const data : Page<Post> = response.data;
                console.log("Data content: ", data.content);
                setFilteredPosts(data.content);
                setTotalElements(data.totalElements);
            } catch (error) {
                setError("Error fetching filtered posts");
                console.error("Error fetching filtered posts", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilteredPosts();
    }, [categoryId, subcategoryId, subcategoryItemId, productId, countryId, countyId, city_id, min_price, max_price, sortPriceAsc, sortDateAsc, sortDateDesc, sortPriceDesc, page, size]);
    return {filteredPosts, page, totalElements, setPage, size, setSize};
}