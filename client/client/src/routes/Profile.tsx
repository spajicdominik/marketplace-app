import { useParams } from "react-router-dom"
import useFetchUserDetails from "../hooks/userDetails/useFetchUserDetails";
import UserInfo from "../features/userInfo/UserInfo";
import UserPosts from "../features/userInfo/UserPosts";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import ProfileMenu from "../features/profile/sidebar/ProfileMenu";

export default function Profile() {
    const userId = useSelector((state : RootState ) => state.auth.user?.user_id);
    const userDetails = useFetchUserDetails(userId);

    return (
        <div className="flex">
            <ProfileMenu></ProfileMenu>
            <UserInfo userDetails={userDetails}/>
        </div>
    )
}