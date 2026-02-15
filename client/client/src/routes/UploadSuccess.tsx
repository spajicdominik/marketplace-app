import { TiTickOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function UploadSuccess() {
    return (
        <div className="bg-white text-black flex flex-col items-center p-20">
            <div className="flex">
                <h1 className="text-4xl p-5">You have successifully made a post!</h1>
                <div className="p-5">
                    <TiTickOutline size={40}></TiTickOutline>
                </div>
            </div>
            <div className="p-3">
                <Button>
                    <NavLink to="/">Go to main page</NavLink>
                </Button>
            </div>
        </div>
    )
}