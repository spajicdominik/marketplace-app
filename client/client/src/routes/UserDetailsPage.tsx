import { useParams } from "react-router-dom"
import useFetchUserDetails from "../hooks/userDetails/useFetchUserDetails";
import UserInfo from "../features/userInfo/UserInfo";
import UserPosts from "../features/userInfo/UserPosts";

export default function UserDetailsPage() {
    const params = useParams();
    const userId = Number(params.userId);
    const userDetails = useFetchUserDetails(userId);

    return (
        <div className="flex flex-col justify-center gap-10 my-10 mx-5">
            <UserInfo userDetails={userDetails} />
            <UserPosts userId={userId} userDetails={userDetails}/>
        </div>
    )
}