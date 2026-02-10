import Sidebar from "../features/sidebar/Sidebar"
import PostList from "../features/postlist/PostList"
import useFetchPostList from "../hooks/useFetchPostList"
import { useSelector } from "react-redux";
import type { RootState } from "../store";

export default function Products() {
    const categoryId = useSelector((state : RootState)=> state.category.categoryId);
    const token = useSelector((state : RootState ) => state.auth.accessToken);

    const posts = useFetchPostList(categoryId, token);
    return (
        <div className="flex">
            <Sidebar token={token}></Sidebar>
            <PostList posts={posts}></PostList>
        </div>
    )
}