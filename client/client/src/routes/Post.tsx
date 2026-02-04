import { useParams } from "react-router-dom"; 

export default function Post(){
    const params = useParams();

    return (
        <>
        <p className="font-black text-4xl">{params.postId}</p>
        </>
    );
}