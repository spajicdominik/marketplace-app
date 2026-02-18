import PostListEntity from "./components/PostListEntity";
import type { Post } from "./components/Post";
import { Pagination } from 'antd';

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-2 w-fit">
        {posts.map(post => (
          <PostListEntity
            key={post.id}
            post={post}
          />
        ))}
      </div>

    </div>
  );
};

export default PostList;
