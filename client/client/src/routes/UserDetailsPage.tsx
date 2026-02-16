import { useParams } from "react-router-dom"
import useFetchUserDetails from "../hooks/userDetails/useFetchUserDetails";
import UserInfo from "../features/userInfo/UserInfo";
import UserPosts from "../features/userInfo/UserPosts";

export default function UserDetailsPage() {
    const params = useParams();
    const userId = Number(params.userId);
    const userDetails = useFetchUserDetails(userId);

    return (
        <div>
            <UserInfo userDetails={userDetails} />
            <UserPosts userId={userId} userDetails={userDetails}/>
        </div>
    )
}