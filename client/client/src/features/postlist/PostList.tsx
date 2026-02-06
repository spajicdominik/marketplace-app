import PostListItem from "./components/PostListItem";
import useFetchPosts from "../../hooks/postlist/useFetchPosts";
import { Input } from "antd";
const {Search} = Input;


function PostList({ productId, categoryId, minPrice, maxPrice } : { productId : number | 0, categoryId : number | 0, minPrice : number | 0, maxPrice : number | 20000}) {
    const {posts, isLoading, error} = useFetchPosts(productId, categoryId, minPrice, maxPrice);

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