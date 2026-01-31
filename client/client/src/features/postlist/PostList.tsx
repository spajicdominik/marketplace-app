import PostListItem from "../../components/post/PostListItem";
import { useEffect, useState } from "react";


function PostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            const response = await fetch('http://localhost:8080/api/posts');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        }
        
        fetchPosts();
    }, []);

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