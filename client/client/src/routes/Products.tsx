import PostList from "../features/postlist/PostList"
import useFetchPostList from "../hooks/useFetchPostList"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import SideMenu from "../features/side-menu/SideMenu";
import useFilterPosts from "../hooks/sidebar/useFilterPosts";
import FilterMenu from "../features/filterMenu/FilterMenu";


export default function Products() {
    const categoryId = useSelector((state: RootState) => state.category.categoryId);
    const subcategoryId = useSelector((state: RootState) => state.category.subcategoryId);
    const subcategoryItemId = useSelector((state: RootState) => state.category.subcategoryItemId);
    const productId = useSelector((state: RootState) => state.category.productId);
    const countryId = useSelector((state: RootState) => state.category.countryId);
    const countyId = useSelector((state: RootState) => state.category.countyId);
    const cityId = useSelector((state: RootState) => state.category.cityId);
    const minPrice = useSelector((state: RootState) => state.category.min_price);
    const maxPrice = useSelector((state: RootState) => state.category.max_price);
    const sortPriceDesc = useSelector((state: RootState) => state.category.sortPriceDesc);
    const sortPriceAsc = useSelector((state: RootState) => state.category.sortPriceAsc);
    const sortDateDesc = useSelector((state: RootState) => state.category.sortDateDesc);
    const sortDateAsc = useSelector((state: RootState) => state.category.sortDateAsc);

    const token = useSelector((state: RootState) => state.auth.accessToken);

    const posts = useFilterPosts(
        categoryId, 
        subcategoryId, 
        subcategoryItemId, 
        productId,
        countryId,
        countyId,
        cityId,
        minPrice,
        maxPrice,
        sortPriceDesc,
        sortPriceAsc,
        sortDateDesc,
        sortDateAsc
    );
    
    return (
        <div className="mx-8 mb-10">
            <FilterMenu token={token} />
            <PostList posts={posts}></PostList>
        </div>
    )
}