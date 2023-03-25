import React from 'react';
import { Card, Card2, PostTime, UserImage, UserImage2, UserInfo, UserInfoText, UserName } from '../styles/all';

function Comment({ data }) {
    return (
        <Card2>
            <UserInfo>
                <UserImage2 source={{ uri: data.uid.image }} />
                <UserInfoText>
                    <UserName>{data?.uid?.fname}</UserName>
                    <PostTime>
                        {data.content}
                    </PostTime>
                </UserInfoText>
            </UserInfo>
        </Card2>
    );
}

export default Comment;