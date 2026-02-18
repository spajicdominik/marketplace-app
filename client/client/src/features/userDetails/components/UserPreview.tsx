import React, { useEffect, useState } from 'react';
import { CommentOutlined, HeartOutlined, UserOutlined, HeartFilled } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import type { UserDetails } from '../../../types/UserDetails';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import type { FavouritePost } from '../../../types/FavouritePost';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import { Bounce } from 'react-toastify';
import { useSelector } from "react-redux";
import type { RootState } from '../../../store';
import { useNavigate } from 'react-router-dom';

const { Meta } = Card;

export default function UserPreview({ userDetails, postId }: { userDetails: UserDetails | undefined, postId: number | undefined }) {
    const [isFavorited, setIsFavorited] = useState(false);

    const username = userDetails?.username;
    const email = userDetails?.email;
    const userUrl = `/users/${userDetails?.userId}`
    const userId = useSelector((state: RootState) => state.auth.user?.user_id);
    const navigate = useNavigate();

    const favourite: FavouritePost = {
        user_id: userId,
        post_id: postId
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/api/posts/is-favourite?post_id=${postId}&user_id=${userId}`).then(res => setIsFavorited(res.data));
    }, []);

    const toggleFavourite = () => {
        if (!userId){
            navigate("/auth?mode=login");
            return;
        }
        if (!isFavorited) {
            axios.post(`http://localhost:8080/api/posts/favourites`, favourite);

            toast.success('Added to favourites!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        else {
            axios.delete(`http://localhost:8080/api/posts/favourites`, {
                data: favourite
            });
            toast.error('Removed from favourites!', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        setIsFavorited(prev => !prev);


    }

    return (
        <Card
            style={{ width: 300 }}
            cover={
                <img
                    draggable={false}
                    alt="example"
                    src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
            }
            actions={[
                <div onClick={toggleFavourite}>
                    {isFavorited ? <HeartFilled style={{ color: "red" }} /> : <HeartOutlined />}
                </div>,
                <CommentOutlined key="contact-user" />,
                <NavLink to={userUrl}>
                    <UserOutlined key="info-user" />
                </NavLink>
            ]}
        >
            <Meta
                title={username}
                description={email}
            />
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />
        </Card>
    )

};
