import NavbarItems from "./NavbarItems";

export default function Navbar() {
    return (
        <div className="flex justify-between p-4 m-4 bg-white text-black">
            <div>
                <h1 className="text-2xl">LOGO COMPONENT</h1>
            </div>

            <NavbarItems></NavbarItems>
        </div>
    );
}