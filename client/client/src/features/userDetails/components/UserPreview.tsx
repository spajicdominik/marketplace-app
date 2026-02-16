import React from 'react';
import { CommentOutlined, HeartOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import type { UserDetails } from '../../../types/UserDetails';

const { Meta } = Card;

export default function UserPreview({userDetails} : {userDetails : UserDetails | undefined}) {
    const username = userDetails?.username;
    const email = userDetails?.email;

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
                <UserOutlined key = "info-user"/>
            ]}
        >
            <Meta
                title={username}
                description={email}
            />
        </Card>
    )

};
