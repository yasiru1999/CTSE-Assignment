import React from 'react';
import { Card, Container, UserImage, UserInfo, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Interactiontext } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
function PostCard({ item }) {
    return (
        <Card>
            <UserInfo>
                {/* <UserImage source={require('../../../../assets/user.jpg')} /> */}
                <UserInfoText>
                    <UserName>{item.name}</UserName>
                    <PostTime>
                        4 hours ago
                    </PostTime>
                </UserInfoText>
            </UserInfo>
            <PostText>
                This is an sample text sssssssssssssssaaaaaaaaaaaaaaaaaaaaaa
            </PostText>
            {/* <PostImg source={require('../../../../assets/eve1.jpg')} /> */}
            <InteractionWrapper>
                <Interaction active>
                    <Ionicons name="heart" color="#2e64e5" size={25} />
                    <Interactiontext active>12 Like</Interactiontext>
                </Interaction>
                <Interaction>
                    <Ionicons name="md-chatbubble-outline" size={25} />
                    <Interactiontext>Comment</Interactiontext>
                </Interaction>
            </InteractionWrapper>
        </Card>
    );
}

export default PostCard;