import PostListItem from "../../components/post/PostListItem";
import { useEffect, useState } from "react";


function PostList({ productId } : { productId : number | null}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const defaultUrl = 'http://localhost:8080/api/posts-with-images';
        const productUrl = 'http://localhost:8080/api/posts/product/';
        const url = productId == null ? defaultUrl : `${productUrl}${productId}`;

        async function fetchPosts() {
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }
        
        fetchPosts();
    }, [productId]);

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