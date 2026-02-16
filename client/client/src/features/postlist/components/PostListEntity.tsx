import useFetchMainImage from "../../../hooks/postList/useFetchMainImage";
import type { Post } from "./Post";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

interface PostListEntityProps {
  post: Post;
}

const PostListEntity: React.FC<PostListEntityProps> = ({ post }) => {
  const {
    id,
    title,
    description,
    price,
    currency,
    createdAt,
  } = post;

  const imageUrl = useFetchMainImage(id);
  const navigationLink = `/post/${id}`;

  return (
    <div className="bg-white text-black p-3 m-3 rounded-2xl flex">
        <img src={imageUrl} alt="Post Image" className="h-50 w-40"/>
        <div className="info w-1/2 p-3">
            <h1 className="text-2xl font-bold pb-3">{title}</h1>
            <p className="pb-3">{description}</p>
            <p className="pb-3">{price.toFixed(2)} {currency}</p>
            <div className="pb-3">
                <Button>
                  <NavLink to={navigationLink}>Info</NavLink>
                </Button>
            </div>
            
        </div>
    </div>
  );
};

export default PostListEntity;
