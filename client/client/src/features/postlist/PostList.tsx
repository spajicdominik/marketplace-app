import PostListEntity from "./components/PostListEntity";
import type { Post } from "./components/Post";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-2 gap-2 w-fit">
      {posts.map(post => (
        <PostListEntity
          key={post.id}
          post={post}
        />
      ))}
    </div>
  );
};

export default PostList;
