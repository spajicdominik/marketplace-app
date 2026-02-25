import PostList from "../features/postlist/PostList"
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import useFilterPosts from "../hooks/sidebar/useFilterPosts";
import FilterMenu from "../features/filterMenu/FilterMenu";
import NoPosts from "../features/postlist/NoPosts";
import RecentlyCarousel from "../features/recentlyAdded/RecentlyCarousel";
import { Pagination } from 'antd';
import { useEffect } from "react";

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

    const { filteredPosts, page, totalElements, setPage, size, setSize } = useFilterPosts(
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

    useEffect(() => {
        setPage(0);
    }, [size]);


    if (filteredPosts.length > 0) {
        return (
            <div className="mx-8 mb-10">
                <FilterMenu token={token} />
                <PostList posts={filteredPosts}></PostList>

                <div className="flex justify-center mt-6">
                    <Pagination
                        showSizeChanger
                        current={page + 1}
                        total={totalElements}
                        pageSize={size}
                        pageSizeOptions={["4", "8", "12", "16", "20"]}
                        onChange={(p, pageSize) => {
                            setPage(p - 1);

                            if (pageSize !== size) {
                                setSize(pageSize);
                            }

                        }}
                    />
                </div>

            </div>
        )
    }
    else {
        return (
            <div className="mx-8 mb-10">
                <FilterMenu token={token} />
                <NoPosts></NoPosts>
                <RecentlyCarousel />
            </div>
        )

    }

}