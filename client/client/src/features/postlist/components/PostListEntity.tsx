import useFetchMainImage from "../../../hooks/postList/useFetchMainImage";
import type { Post } from "./Post";
import { Button } from "antd";
import { NavLink } from "react-router-dom";
import { Card } from "antd";
import FormatDate from "../../../hooks/userDetails/formatDate";

const { Meta } = Card;

interface PostListEntityProps {
  post: Post;
}

const PostListEntity: React.FC<PostListEntityProps> = ({ post }) => {
  const { id, title, description, price, currency, createdAt } = post;

  const imageUrl = useFetchMainImage(id);
  const navigationLink = `/post/${id}`;

  const formatedDate = FormatDate(createdAt);

  return (
    <div className="p-2">
      <Card
        hoverable
        style={{ width: 300 }}
        cover={
          <img
            draggable={false}
            alt="example"
            src={imageUrl}
            className="h-90 object-scale-down bg-neutral-900"
          />
        }
      >
        <Meta title={title} description={price + currency} />
        <p className="font-light text-sm my-3">Posted: {formatedDate}</p>
        <NavLink to={navigationLink}>
          <Button>Info</Button>
        </NavLink>
      </Card>
    </div>
  );
};

export default PostListEntity;
