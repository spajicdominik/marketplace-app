import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhone } from "react-icons/md";
import { BsHouse } from "react-icons/bs";
import { FaInfo } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function FooterPage() {
    return (
        <>
            <div className="flex justify-around items-center text-black bg-white border-t">
                <div className="flex flex-col p-4">
                    <h1 className="text-2xl mb-2">Info</h1>
                    <div className="flex items-center my-1">
                        <FaRegUser />
                        <p className="ml-2">About me</p>
                    </div>
                    <div className="flex items-center my-1">
                        <FaInfo />
                        <p className="ml-2">About Fina</p>
                    </div>
                    <div className="flex items-center my-1">
                        <MdMiscellaneousServices />
                        <p className="ml-2">Misc</p>
                    </div>
                </div>

                <div className="flex flex-col p-4">
                    <h1 className="text-2xl mb-2">Contact</h1>
                    <div className="flex items-center my-1">
                        <IoMailOutline />
                        <p className="ml-2">dominikspajic7@gmail.com</p>
                    </div>
                    <div className="flex items-center my-1">
                        <MdOutlinePhone />
                        <p className="ml-2">+385 91 448 8601</p>
                    </div>

                    <div className="flex items-center my-1">
                        <BsHouse />
                        <p className="ml-2">Moja adresa 165, Čepin 31431</p>
                    </div>
                </div>

                <div className="flex flex-col p-4">
                    <h1 className="text-2xl mb-2">Social media</h1>
                    <div className="flex items-center my-1">
                        <FaFacebook />
                        <a href="https://www.facebook.com/profile.php?id=100079144643418" target="_blank" className="ml-2">Facebook</a>
                    </div>
                    <div className="flex items-center my-1">
                        <FaLinkedin />
                        <a href="https://hr.linkedin.com/company/fina" target="_blank" className="ml-2">LinkedIn</a>
                    </div>

                    <div className="flex items-center my-1">
                        <FaYoutube />
                        <a href="https://www.youtube.com/@fina-financijskaagencija5915/featured" target="_blank" className="ml-2">YouTube</a>
                    </div>
                </div>
            </div>
            <div className="bg-stone-800 text-center h-15 flex items-center justify-center">
                Dominik Spajić, 2026.
            </div>
        </>
    );
}
