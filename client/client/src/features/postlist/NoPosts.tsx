import { AiOutlineMeh } from "react-icons/ai";

export default function NoPosts() {
    return (
        <div className="bg-white text-black flex flex-col items-center p-20 h-100 mt-20 border-b">
            <div className="flex">
                <h1 className="text-4xl p-5">There are no posts in this category!</h1>
                <div className="p-5">
                    <AiOutlineMeh size={40}></AiOutlineMeh>
                </div>
            </div>
        </div>
    )
}