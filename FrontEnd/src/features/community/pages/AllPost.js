import { View, Text, FlatList, Modal, StyleSheet, Pressable, Alert } from "react-native";
import PostCard from "../components/PostCard";
import { AddButton, AllText, CloseModal, CommentList, Container, HeaderRow, ImageWrapper, NavWrapper, PopContent, PopModal, SendButton2 } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-native-paper";
import { CommentSend, Input, Input2, InputView, InputView2, SendButton } from "../styles/add";
import Comment from "../components/Comment";
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBottomBar from '../../../components/NavigationBottomBar'
import SideBar from '../../../components/SideBar'


function AllPost({ navigation }) {
    const [posts, setposts] = useState([])
    const [comms, setcomms] = useState()
    const [uid, setuid] = useState()
    const [comm, setcomm] = useState('')
    const path = "http://10.0.2.2:8070"
    const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        getData()
        getUid()
    }, [])

    const getData = () => {
        axios.get(`${path}/api/post/all`).then(data => {
            setposts(data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const getUid = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const setCommdata = (data) => {
        setModalVisible(true)
        setcomms(data)
    }

    const addComment = (pid) => {
        if (comm === '') {
            alert("Please Enter a Comment")
            return
        }
        console.log(uid)
        axios.post(`${path}/api/post/addcomment`, { pid, uid, content: comm }).then(data => {
            // setexist(!exist)
            setcomms(data.data)
            setcomm("")
            getData()

        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <Container>
            <SideBar navigation={navigation} ind={true} />

            <ImageWrapper source={require('../../../../assets/backk.png')}>
                <HeaderRow>
                    <AllText>Community</AllText>
                    <AddButton onPress={() => navigation.navigate("addpost")}><Ionicons name="add-circle" color="#0099FF" size={57} /></AddButton>
                </HeaderRow>
                <View
                    style={{
                        marginBottom: '25%',
                    }}>
                    <FlatList
                        data={posts}
                        renderItem={({ item }) => <PostCard item={item} type={item.type} visible={setCommdata} meth={getData} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false} />
                    <PopModal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {

                            setModalVisible(!modalVisible);
                        }}>
                        {/* <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Hello World!</Text>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View> */}
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <PopContent>
                                    <InputView2>
                                        <CloseModal>
                                            <Pressable
                                                style={[styles.button, styles.buttonClose]}
                                                onPress={() => setModalVisible(!modalVisible)}>
                                                <Ionicons name="close" size={20} color={"white"} />
                                            </Pressable>
                                        </CloseModal>
                                        <CommentSend>
                                            <Input2 placeholder={"Enter the comment"} onChangeText={newtext => setcomm(newtext)} />
                                            <SendButton>
                                                <SendButton2 onPress={() => addComment(comms._id)}>
                                                    <Ionicons name="send-outline" size={26} color={"green"} />
                                                </SendButton2>
                                            </SendButton>
                                        </CommentSend>
                                        <CommentList>
                                            {comms?.comments?.map((m, i) => (
                                                <Comment data={m} />
                                            ))}
                                        </CommentList>
                                    </InputView2>
                                </PopContent>
                            </View>
                        </View>
                    </PopModal>
                </View>
            </ImageWrapper>
            <NavigationBottomBar navigation={navigation} />
        </Container >
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
        marginLeft: 20,
        marginRight: 20
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 5,

    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default AllPost;