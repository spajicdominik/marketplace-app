import type { PostDetails } from "../../../types/PostDetails";
import { Typography } from 'antd';

const { Title } = Typography;


export default function Description ({ postDetails }: { postDetails: PostDetails | undefined }) {
    return (
        <div className="bg-white text-black p-4 my-4">
            <h1 className="text-2xl font-semibold mb-3">Post description</h1>
            <p>{postDetails?.description}</p>
        </div>
    )
}