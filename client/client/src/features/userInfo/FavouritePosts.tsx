import useFetchFavourites from "../../hooks/userDetails/useFetchFavourites";
import PostList from "../postlist/PostList";
import { Pagination } from "antd";

export default function FavouritePosts({ userId }: { userId: number | undefined }) {
    const {userPosts, page, totalElements, setPage, size, setSize} = useFetchFavourites(userId);
    console.log(userId);

    if (userPosts.length > 0) {
        return (
            <div>
                <div className="bg-white text-black shadow-xl p-5 w-fit rounded-2xl">
                    <h1 className="text-2xl">Your favourite posts</h1>
                </div>
                <PostList posts={userPosts} />
                <div className="flex justify-center mt-6">
                    <Pagination
                        current={page + 1}
                        total={totalElements}
                        pageSize={size}
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
            <div className="text-black">
                <div className="bg-white text-black shadow-xl p-5 w-fit rounded-2xl">
                    <h1 className="text-2xl">Your favourite posts</h1>
                </div>
                <p className="p-20">No favourite posts!</p>
            </div>
        )

    }

}