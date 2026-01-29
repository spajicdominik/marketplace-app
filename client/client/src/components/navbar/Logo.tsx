import { FaWarehouse } from "react-icons/fa";

function Logo() {
    return (
        <div className="flex">
            <FaWarehouse size={32}/>
            <h1 className="text-black">TechMarket</h1>
        </div>
    );
}

export default Logo;