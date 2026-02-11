import { TiTickOutline } from "react-icons/ti";
import { MdOutlineEmail } from "react-icons/md";
import { Button } from "antd";
import { NavLink } from "react-router-dom";

export default function RegisterDone() {
    return (
        <div className="bg-white text-black flex flex-col items-center p-20">
            <div className="flex">
                <h1 className="text-4xl p-5">You have successifully registered!</h1>
                <div className="p-5">
                    <TiTickOutline size={40}></TiTickOutline>
                </div>
            </div>
            <div className="flex">
                <p className="text-xl p-5">To finish your registration please confirm by pressing the link we sent to your e-mail.</p>
                <div className="p-5">
                    <MdOutlineEmail size={32}></MdOutlineEmail>
                </div>
            </div>
            <div className="p-3">
                <Button>
                    <NavLink to="/auth?mode=login">Go to login</NavLink>
                </Button>
            </div>
        </div>
    )
}