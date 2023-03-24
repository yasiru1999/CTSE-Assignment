import React, { useEffect, useState } from 'react';
import { Card, Container, UserImage, UserInfo, UserName, UserInfoText, PostTime, PostText, PostImg, InteractionWrapper, Interaction, Interactiontext, ImageBox, ImageBoxContent, ImageBoxContent1, ImageBoxContent2, Image1, Image2, PostTitle } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { MainRow } from '../styles/add';
function PostCard({ item, type, visible, meth }) {
    const [exist, setexist] = useState(false)
    const [uid, setuid] = useState('')
    const [post, setpost] = useState(item)
    const path = "http://10.0.2.2:8070"
    useEffect(() => {
        getData2()

    }, [item])
    const getData2 = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
                checkExist(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const checkExist = (id) => {
        console.log(item)
        let arr = []
        arr = item.likes
        if (arr.includes(id)) {
            setexist(true)
        }
        else {
            setexist(false)
        }
    }

    const loadPost = (pid) => {
        console.log(pid)
        axios.get(`${path}/api/post/one`, { pid }).then(data => {
            setpost(data.data)
            getData2()
        }).catch(err => {
            console.log(err)
        })
    }

    const addLike = (pid) => {
        if (exist) {
            axios.post(`${path}/api/post/delike`, { uid, pid }).then(data => {
                // setexist(!exist)
                meth()

            }).catch(err => {
                console.log(err)
            })
        }
        else {
            axios.post(`${path}/api/post/like`, { uid, pid }).then(data => {
                //setexist(!exist)
                meth()

            }).catch(err => {
                console.log(err)
            })
        }

    }




    return (
        <Card>
            <MainRow>
                <UserInfo>
                    <UserImage source={{ uri: item.uid.image }} />
                    <UserInfoText>
                        <UserName>{item?.uid?.fname}</UserName>
                        <PostTime>
                            4 hours ago
                        </PostTime>
                    </UserInfoText>

                </UserInfo>
                <PostTitle>
                    {item.title}
                </PostTitle>
            </MainRow>

            <PostText>
                {item.Description}
            </PostText>

            {type === 3 ? <>

                <ImageBox>
                    <ImageBoxContent2>
                        <Image2 source={{ uri: item.img1 }} />
                        <Image2 source={{ uri: item.img2 }} />
                    </ImageBoxContent2>

                    <ImageBoxContent2>

                        <Image2 source={{ uri: item.img3 }} />
                        <Image2 source={{ uri: item.img4 }} />
                    </ImageBoxContent2>

                </ImageBox>
            </> : <></>}
            {type == 2 ? <>

                <ImageBox>
                    <ImageBoxContent1>
                        <Image1 source={{ uri: item.img1 }} />
                    </ImageBoxContent1>

                    <ImageBoxContent2>
                        <Image2 source={{ uri: item.img2 }} />
                        <Image2 source={{ uri: item.img3 }} />
                    </ImageBoxContent2>

                </ImageBox>
            </> : <>

            </>}

            {type === 1 ? <>
                <ImageBox>
                    <PostImg source={{ uri: item.img1 }} />
                </ImageBox>
            </> : <></>}

            <InteractionWrapper>
                {item.like ? <>
                    <Interaction active={exist} onPress={() => addLike(item._id)}>
                        <Ionicons name={exist ? "heart" : "heart-outline"} color={exist ? "#0099FF" : "#333"} size={25} />
                        <Interactiontext active={exist}>{item?.likes?.length !== 0 ? <>{item?.likes?.length}</> : <></>} Like</Interactiontext>
                    </Interaction>
                </> : <></>}

                {item.comment ? <>
                    <Interaction onPress={() => visible(item)}>
                        <Ionicons name="md-chatbubble-outline" size={25} />
                        <Interactiontext>{item?.comments?.length !== 0 ? <>{item?.comments?.length}</> : <></>} Comment</Interactiontext>
                    </Interaction>
                </> : <></>}


            </InteractionWrapper>
        </Card>
    );
}

export default PostCard;