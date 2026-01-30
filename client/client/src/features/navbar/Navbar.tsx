import NavItems from "../../components/navbar/NavItems";
import Logo from "../../components/navbar/Logo";

function Navbar(){
    return (
        <nav className="bg-white flex justify-between items-center p-4 shadow-md m-4">
            <Logo></Logo>
            <NavItems></NavItems>
        </nav>
    );
}

export default Navbar;