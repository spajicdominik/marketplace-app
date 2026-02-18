import useFetchFavourites from "../../hooks/userDetails/useFetchFavourites";
import PostList from "../postlist/PostList";

export default function FavouritePosts({ userId }: { userId: number | undefined }) {
    const posts = useFetchFavourites(userId);
    console.log(userId);

    if (posts.length > 0) {
        return (
            <div>
                <div className="bg-white text-black shadow-xl p-5 w-fit rounded-2xl">
                    <h1 className="text-2xl">Your favourite posts</h1>
                </div>
                <PostList posts={posts} />
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