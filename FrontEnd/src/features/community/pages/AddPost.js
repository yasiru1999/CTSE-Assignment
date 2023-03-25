import React, { useEffect, useState } from 'react';
import { Pressable, View, Button, Alert, Switch, Text, TextInput, Image } from 'react-native';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch, AddImage, VisibleImageBox, EditButton } from '../styles/add';
import { ActivityIndicator, RadioButton } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import logo from '.././../../../assets/im.jpg'
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ContentWrapper, ImageWrapper } from '../styles/all';
import { HeadText } from '../styles/mypost';

function AddPost({ navigation }) {
    const [selectedLanguage, setSelectedLanguage] = useState('');
    const [image, setImage] = useState(null);
    const [title, settitle] = useState('');
    const [url1, seturl1] = useState('');
    const [url2, seturl2] = useState('');
    const [url3, seturl3] = useState('');
    const [url4, seturl4] = useState('');
    const [des, setdes] = useState('');
    const [uid, setuid] = useState('');
    const [uploading, setUploading] = useState(false)
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const [type, settype] = useState('')
    const path = "http://10.0.2.2:8070"
    // const pickImage = async () => {

    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         allowsEditing: true,
    //         aspect: [4, 3],
    //         quality: 1,
    //     });

    //     console.log(result);

    //     if (!result.cancelled) {
    //         setImage(result.uri);
    //     }
    // };

    // const uploadImage = async () => {
    //     const blob = await new Promise((resolve, reject) => {
    //         const xhr = new XMLHttpRequest();
    //         xhr.onload = function () {
    //             resolve(xhr.response);
    //         };
    //         xhr.onerror = function () {
    //             reject(new TypeError('Network request failed'));
    //         };
    //         xhr.responseType = 'blob';
    //         xhr.open('GET', image, true);
    //         xhr.send(null);
    //     })
    //     const ref = firebase.storage().ref().child(`Pictures/Image1`)
    //     const snapshot = ref.put(blob)
    //     snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
    //         () => {
    //             setUploading(true)
    //         },
    //         (error) => {
    //             setUploading(false)
    //             console.log(error)
    //             blob.close()
    //             return
    //         },
    //         () => {
    //             snapshot.snapshot.ref.getDownloadURL().then((url) => {
    //                 setUploading(false)
    //                 console.log("Download URL: ", url)
    //                 setImage(url)
    //                 blob.close()
    //                 return url
    //             })
    //         }
    //     )
    // }
    useEffect(() => {
        getData()
    }, [])
    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    const submitData = () => {

        if (type === '') {
            alert("Please select an Template")
            return
        }
        if (selectedLanguage === '' || selectedLanguage === 'n') {
            alert("Please select an Post Type")
            return
        }
        if (title === '') {
            alert("Please enter the post title")
            return
        }
        if (des === '') {
            alert("Please enter the description")
            return
        }
        const ob = {
            title,
            Description: des,
            type: Number(type),
            categoty: selectedLanguage,
            comment: isEnabled2,
            like: isEnabled1,
            comments: [],
            likes: [],
            img1: url1,
            img2: url2,
            img3: url3,
            img4: url4,
            uid
        }
        axios.post(`${path}/api/post/add`, ob).then(data => {
            console.log(data.data)
            Alert.alert("Post Added Successfully")
            navigation.navigate('allpost')
        }).catch(err => {
            console.log(err)
        })

    }
    return (
        <Container>
            <ImageWrapper source={require('../../../../assets/backk.png')}>
                <Pressable style={{
                    marginTop: 20,
                    marginLeft: 15,
                    justifyContent: "flex-start",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    backgroundColor: "#82C7EE",
                    paddingLeft: 10,
                    paddingRight: 10,
                    borderRadius: 50,
                }} onPress={() => navigation.goBack()}>
                    <Image style={{ marginTop: 5, width: 25, height: 40, }}
                        source={require("../../../../assets/back.png")} />
                </Pressable>
                <ContentWrapper>
                    <HeadText>Create Post</HeadText>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <TitleText style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Select the Template</TitleText>
                        <InputContainer>
                            <SelectContainer>
                                <ImageContainer>
                                    <SelectImage source={require('../../../../assets/im.jpg')} />
                                    <RadioButton color='#0099FF' status={type === 1 ? 'checked' : 'unchecked'} onPress={() => settype(1)} />
                                </ImageContainer>
                                <ImageContainer>
                                    <SelectImage source={require('../../../../assets/im.jpg')} />
                                    <RadioButton color='#0099FF' status={type === 2 ? 'checked' : 'unchecked'} onPress={() => settype(2)} />
                                </ImageContainer>
                                <ImageContainer>
                                    <SelectImage source={require('../../../../assets/im.jpg')} />
                                    <RadioButton color='#0099FF' status={type === 3 ? 'checked' : 'unchecked'} onPress={() => settype(3)} />
                                </ImageContainer>
                            </SelectContainer>
                            <InputView>
                                <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Post Category</Text>
                                <Picker
                                    selectedValue={selectedLanguage}
                                    onValueChange={(itemValue, itemIndex) =>
                                        setSelectedLanguage(itemValue)
                                    }
                                    itemStyle={{ backgroundColor: "#dddddd6" }}
                                >
                                    <Picker.Item label="Select one" value="n" />
                                    <Picker.Item label="Event" value="e" />
                                    <Picker.Item label="Article" value="a" />
                                    <Picker.Item label="Photos" value="p" />
                                </Picker>
                            </InputView>

                            <InputView>
                                <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Post Title</Text>
                                <Input placeholder={"Enter the Post title"} onChangeText={newtext => settitle(newtext)} />
                            </InputView>


                            <InputView>
                                {url1 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 1 URL</Text>
                                    <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl1(newtext)} /></> : <>
                                    <VisibleImageBox>
                                        <AddImage source={{ uri: url1 }} />
                                        <EditButton>
                                            <Button title='Edit' onPress={() => seturl1('')} />
                                        </EditButton>

                                    </VisibleImageBox>

                                </>}

                            </InputView>
                            {type === 3 ? <><InputView>
                                {url2 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 2 URL</Text>
                                    <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl2(newtext)} /></> : <>
                                    <VisibleImageBox>
                                        <AddImage source={{ uri: url2 }} />
                                        <EditButton>
                                            <Button title='Edit' onPress={() => seturl2('')} />
                                        </EditButton>

                                    </VisibleImageBox>

                                </>}

                            </InputView>


                                <InputView>
                                    {url3 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 3 URL</Text>
                                        <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl3(newtext)} /></> : <>
                                        <VisibleImageBox>
                                            <AddImage source={{ uri: url3 }} />
                                            <EditButton>
                                                <Button title='Edit' onPress={() => seturl3('')} />
                                            </EditButton>

                                        </VisibleImageBox>

                                    </>}

                                </InputView>



                                <InputView>
                                    {url4 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 4 URL</Text>
                                        <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl4(newtext)} /></> : <>
                                        <VisibleImageBox>
                                            <AddImage source={{ uri: url4 }} />
                                            <EditButton>
                                                <Button title='Edit' onPress={() => seturl4('')} />
                                            </EditButton>

                                        </VisibleImageBox>

                                    </>}

                                </InputView>
                            </> : <></>}
                            {type === 2 ? <>
                                <InputView>
                                    {url2 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 2 URL</Text>
                                        <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl2(newtext)} /></> : <>
                                        <VisibleImageBox>
                                            <AddImage source={{ uri: url2 }} />
                                            <EditButton>
                                                <Button title='Edit' onPress={() => seturl2('')} />
                                            </EditButton>

                                        </VisibleImageBox>

                                    </>}

                                </InputView>


                                <InputView>
                                    {url3 === '' ? <><Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Image 3 URL</Text>
                                        <Input placeholder={"Enter the Image url"} onChangeText={newtext => seturl3(newtext)} /></> : <>
                                        <VisibleImageBox>
                                            <AddImage source={{ uri: url3 }} />
                                            <EditButton>
                                                <Button title='Edit' onPress={() => seturl3('')} />
                                            </EditButton>

                                        </VisibleImageBox>

                                    </>}

                                </InputView>

                            </> : <></>}


                            <InputTextArea>
                                <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Post Description</Text>
                                <Input placeholder={"Enter the Description"} multiline={true} numberOfLines={10} textAlignVertical="top" onChangeText={newtext => setdes(newtext)} />
                            </InputTextArea>

                            <SwichGroup>
                                <OneSwitch>
                                    <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Likes</Text>
                                    <Switch
                                        trackColor={{ false: '#767577', true: '#0099FF' }}
                                        thumbColor={isEnabled1 ? '#0099FF' : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch1}
                                        value={isEnabled1}
                                    />
                                </OneSwitch>

                                <OneSwitch>
                                    <Text style={{ fontWeight: "bold", color: "grey", fontSize: 17 }}>Comments</Text>
                                    <Switch
                                        trackColor={{ false: '#767577', true: '#0099FF' }}
                                        thumbColor={isEnabled2 ? '#0099FF' : '#f4f3f4'}
                                        ios_backgroundColor="#3e3e3e"
                                        onValueChange={toggleSwitch2}
                                        value={isEnabled2}
                                    />
                                </OneSwitch>
                            </SwichGroup>
                        </InputContainer>

                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginBottom: 40 }}>
                            <Button title="Create" color="green" onPress={() => submitData()} />
                        </View>
                    </ScrollView>
                </ContentWrapper>
            </ImageWrapper>
        </Container>
    );
}

export default AddPost;