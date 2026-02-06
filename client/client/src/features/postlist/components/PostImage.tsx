function PostImage({ url }: { url: string }) {
    return (
        <div>
            <img src={url} alt="" />
        </div>
    );
}

export default PostImage;