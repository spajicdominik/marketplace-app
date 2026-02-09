import Sidebar from "../features/sidebar/Sidebar"
import PostList from "../features/postlist/PostList"
import useFetchPostList from "../hooks/useFetchPostList"

export default function Products({currentCategory} : {currentCategory : number}) {
    const posts = useFetchPostList(currentCategory);
    return (
        <div className="flex">
            <Sidebar></Sidebar>
            <PostList posts={posts}></PostList>
        </div>
    )
}