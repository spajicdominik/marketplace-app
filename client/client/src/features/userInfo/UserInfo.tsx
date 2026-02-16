import type { UserDetails } from "../../types/UserDetails";
import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import FormatDate from "../../hooks/userDetails/formatDate";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import useFetchLocationDto from "../../hooks/userDetails/useFetchLocation";

export default function UserInfo({ userDetails }: { userDetails: UserDetails | undefined }) {
    const username = userDetails?.username;
    const dateCreated = FormatDate(userDetails?.createdAt)
    const location = useFetchLocationDto(userDetails?.cityId);
    console.log(userDetails);

    return (
        <div className="user-info bg-white text-black p-4 my-4 shadow-xl rounded-2xl">
            <div className="basic-info flex">
                <Avatar shape="square" size={120} icon={<UserOutlined />} />
                <div className="p-4">
                    <h1>{username}</h1>
                    <p>Registered since: {dateCreated}</p>
                </div>
            </div>

            <div className="flex my-6 pt-5 border-t">
                <div className="contact-info-1 mr-7">
                    <div className="flex items-center">
                        <FaRegUser />
                        <h1 >{userDetails?.firstName} {userDetails?.lastName}</h1>
                    </div>
                    <div className="flex items-center">
                        <MdOutlineEmail />
                        <h1>{userDetails?.email}</h1>
                    </div>
                </div>

                <div className="contact-info-2">
                <div className="flex items-center">
                    <MdOutlineLocalPhone />
                    <h1>{userDetails?.phoneNumber}</h1>
                </div>
                <div className="flex items-center">
                    <IoLocationOutline />
                    <h1>{location?.cityName}, {location?.countyName}, {location?.countryName}</h1>
                </div>
            </div>
            </div>
        </div>
    )
}