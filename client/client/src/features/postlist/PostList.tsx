import PostListItem from "../../components/post/PostListItem";
import { useEffect, useState } from "react";


function PostList({ productId, categoryId } : { productId : number | null, categoryId : number | null}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const defaultUrl = 'http://localhost:8080/api/posts-with-images';
        const productUrl = 'http://localhost:8080/api/posts/product/';
        const categoryUrl = 'http://localhost:8080/api/posts/category/'

        let url = defaultUrl;

        if (productId != null) {
            url = `${productUrl}${productId}`;
        }

        if (categoryId != null) {
            url = `${categoryUrl}${categoryId}`
        }

        async function fetchPosts() {
            const response = await fetch(url);
            const data = await response.json();
            setPosts(data);
        }
        
        fetchPosts();
    }, [productId, categoryId]);

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