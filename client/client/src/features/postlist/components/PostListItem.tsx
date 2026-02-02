import PostImage from "./PostImage";
import PostDescription from "./PostDescription";

function PostListItem({title, description, price, currency}: {title: string, description: string, price: string, currency: string}) {
    return (
        <div className="bg-white m-4 inline-block p-4 rounded-lg shadow-md w-[50%]">
            <PostImage url="to-be-implemented"/>
            <PostDescription title={title} description={description} price={price} currency={currency}/>
        </div>
    );
}

export default PostListItem;