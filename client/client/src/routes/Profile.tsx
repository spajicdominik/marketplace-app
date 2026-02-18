import useFetchUserDetails from "../hooks/userDetails/useFetchUserDetails";
import UserInfo from "../features/userInfo/UserInfo";
import UserPosts from "../features/userInfo/UserPosts";
import { useSelector } from "react-redux";
import type { RootState } from "../store";
import FavouritePosts from "../features/userInfo/FavouritePosts";

export default function Profile() {
    const userId = useSelector((state : RootState ) => state.auth.user?.user_id);
    const userDetails = useFetchUserDetails(userId);

    return (
        <div className="flex justify-center gap-10">
            <UserInfo userDetails={userDetails}/>
            <div>
                <UserPosts userId={userId} userDetails={userDetails}></UserPosts>
                <FavouritePosts userId={userId}/>
            </div>
        </div>
    )
}