import PostList from "../features/postlist/PostList"
import useFetchPostList from "../hooks/useFetchPostList"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import SideMenu from "../features/side-menu/SideMenu";
import useFilterPosts from "../hooks/sidebar/useFilterPosts";
import FilterMenu from "../features/filterMenu/FilterMenu";

export interface FilterParams {
    categoryId : number | null,
    subcategoryId : number | null,
    subcategoryItemId: number | null,
    productId : number | null,
    countryId: number | null,
    countyId : number | null,
    cityId : number | null,
    minPrice : number | null,
    maxPrice : number | null,
    sortPriceDesc : boolean | null,
    sortPriceAsc : boolean | null,
    sortDateDesc: boolean | null,
    sortDateAsc : boolean | null
}

export default function Products() {
    const categoryId = useSelector((state: RootState) => state.category.categoryId);
    const subcategoryId = useSelector((state: RootState) => state.category.subcategoryId);
    const subcategoryItemId = useSelector((state: RootState) => state.category.subcategoryItemId);
    const productId = useSelector((state: RootState) => state.category.productId);

    const token = useSelector((state: RootState) => state.auth.accessToken);

    const posts = useFilterPosts(categoryId, subcategoryId, subcategoryItemId, productId);
    return (
        <div className="mx-8 mb-10">
                <FilterMenu token = {token}/>
                <PostList posts={posts}></PostList>
        </div>
    )
}