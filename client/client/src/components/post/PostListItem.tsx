import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

function PostListItem() {
    return (
        <div className="bg-white m-4 inline-block p-4 rounded-lg shadow-md">
            <PostImage url="C:\Users\dspajic\Documents\GitHub\marketplace-app\client\client\src\assets\macbook.jpg"/>
            <PostDescription title="Macbook Pro 16" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. " price="1000€"/>
        </div>
    );
}

export default PostListItem;