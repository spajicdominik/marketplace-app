import type { Post } from "./Post";
import { Button } from "antd";

interface PostListEntityProps {
  post: Post;
}

const PostListEntity: React.FC<PostListEntityProps> = ({ post }) => {
  const {
    title,
    description,
    price,
    currency,
    createdAt,
  } = post;

  const formattedDate = new Date(createdAt).toLocaleDateString("hr-HR");

  return (
    <div className="bg-white text-black p-3 m-3 rounded-2xl flex">
        <img src="http://localhost:8080/uploads/example.jpg" alt="Post Image" className="h-50"/>
        <div className="info w-1/2 p-3">
            <h1 className="text-2xl font-bold pb-3">{title}</h1>
            <p className="pb-3">{description}</p>
            <p className="pb-3">{price.toFixed(2)} {currency}</p>
            <div className="pb-3">
                <Button>Info</Button>
            </div>
            
        </div>
    </div>
  );
};

export default PostListEntity;
