import PostListItem from "./components/PostListItem";
import useFetchPosts from "../../hooks/postlist/useFetchPosts";


function PostList({ productId, categoryId } : { productId : number | 0, categoryId : number | 0}) {
    const {posts, isLoading, error} = useFetchPosts(productId, categoryId);

    if (isLoading) {
        return <div>Loading posts...</div>
    }
    
    return (
        <div className="flex-col justify-center">
            {posts.map((post: any) => (
                <PostListItem 
                    key={post.id}
                    title={post.title}
                    description={post.description}
                    price={post.price}
                    currency={post.currency}
                />
            ))}
        </div>
    );
}

export default PostList;