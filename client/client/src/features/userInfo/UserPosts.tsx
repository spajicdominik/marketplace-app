import useFetchUserPosts from "../../hooks/userDetails/useFetchUserPosts";
import type { UserDetails } from "../../types/UserDetails";
import PostList from "../postlist/PostList";

export default function UserPosts({userId, userDetails} : {userId : number, userDetails : UserDetails | undefined}) {
    const posts = useFetchUserPosts(userId);

    return (
        <div>
            <div className="bg-white text-black shadow-xl p-5 w-fit rounded-2xl">
                <h1 className="text-2xl">Posts by {userDetails?.username}</h1>
            </div>
            <PostList posts={posts}/>
        </div>
    )
}