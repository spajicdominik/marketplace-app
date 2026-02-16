import useFetchRecentPosts from "../../hooks/recentlyAdded/useFetchRecentPosts"
import PostListEntity from "../postlist/components/PostListEntity"

export default function RecentlyCarousel() {
    const items = useFetchRecentPosts();

    return (
        <div>
            <div className="text-black text-3xl font-bold p-3 w-fit m-4 bg-white rounded-xl">
                <h1>Recently added</h1>
            </div>
            <div className="flex mb-5">
                {items.map(post => (
                    <PostListEntity
                        key={post.id}
                        post={post}
                    />
                ))}
            </div>
        </div>
    )
}