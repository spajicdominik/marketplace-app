import useFetchUserPosts from "../../hooks/userDetails/useFetchUserPosts";
import type { UserDetails } from "../../types/UserDetails";
import PostList from "../postlist/PostList";
import { Pagination } from "antd";

export default function UserPosts({userId, userDetails} : {userId : number | undefined, userDetails : UserDetails | undefined}) {
    const {userPosts, page, totalElements, setPage, size, setSize} = useFetchUserPosts(userId);

    return (
        <div>
            <div className="bg-white text-black shadow-xl p-5 w-fit rounded-2xl">
                <h1 className="text-2xl">Posts by {userDetails?.username}</h1>
            </div>
            <PostList posts={userPosts}/>
            <div className="flex justify-center mt-6">
                    <Pagination
                        current={page + 1}
                        total={totalElements}
                        pageSize={size}
                        onChange={(p, pageSize) => {
                            setPage(p - 1);

                            if (pageSize !== size) {
                                setSize(pageSize);
                            }

                        }}
                    />
                </div>
        </div>
    )
}