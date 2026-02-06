import NavItems from "./components/NavItems";
import Logo from "./components/Logo"

function Navbar(){
    return (
        <nav className="bg-white flex justify-between items-center p-4 shadow-md m-4">
            <Logo></Logo>
            <NavItems></NavItems>
        </nav>
    );
}

export default Navbar;