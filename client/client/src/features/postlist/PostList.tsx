import PostListEntity from "./components/PostListEntity";
import type { Post } from "./components/Post";

interface PostListProps {
  posts: Post[];
}

const PostList: React.FC<PostListProps> = ({ posts }) => {
  return (
    <div className="flex flex-col w-1/2">
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
