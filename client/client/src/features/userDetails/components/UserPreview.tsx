import React from 'react';
import { CommentOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import type { UserDetails } from '../../../types/UserDetails';
import { NavLink } from 'react-router-dom';

const { Meta } = Card;

export default function UserPreview({userDetails} : {userDetails : UserDetails | undefined}) {
    const username = userDetails?.username;
    const email = userDetails?.email;
    const userUrl = `/users/${userDetails?.userId}`

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
                <HeartOutlined key="save-user" />,
                <CommentOutlined key="contact-user" />,
                <NavLink to={userUrl}>
                    <UserOutlined key = "info-user"/>
                </NavLink>
            ]}
        >
            <Meta
                title={username}
                description={email}
            />
        </Card>
    )

};
