import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, ImageContainer, SelectContainer, Input, InputContainer, InputTextArea, InputView, RadioContainer, RadioHolder, SelectImage, TitleText, SwichGroup, OneSwitch, SearchView, PageTitle } from '../styles/add';
import { AddButton } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Searchbar } from 'react-native-paper';
import { View, FlatList, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyEventCard from '../Components/MyEventCard';
import NavigationBottomBar from '../../../components/NavigationBottomBar'
import SideBar from '../../../components/SideBar'

function MyEvent({ navigation }) {

    const [data, setdate] = useState([])
    const [uid, setuid] = useState('')
    const path = "http://10.0.2.2:8070"
    const getData2 = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
                getData(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData2()


    }, [data])
    const getData = (id) => {
        axios.post(`${path}/api/event/myevent`, { uid: id }).then(data => {
            setdate(data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const deletePost = (id) => {
        axios.post(`${path}/api/event/del`, { eid: id }).then(data => {
            console.log(data)
            getData2()
        }).catch(err => {
            console.log(err)
        })
    }

    const updateMethod = (item) => {
        navigation.navigate("editevent", { event: item })

    }

    const clickDelete = (id) => {
        Alert.alert(
            "Delete",
            "Sure You want to Delete",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deletePost(id) }
            ]
        );

    }

    return (
        <Container>
            <SideBar navigation={navigation} />
            <AddButton onPress={() => navigation.navigate("addevent")}><Ionicons name="add-circle" color="blue" size={57} /></AddButton>
            <View style={{ width: 30 }}></View>
            <View>
                <PageTitle>My Events</PageTitle>
            </View>

            {/* <SearchView>
                <Searchbar
                    placeholder="Search"
                    // onChangeText={(query) => setSearchQuery(query)}
                    // value={searchQuery}
                    style={{ width: "90%" }}
                />
            </SearchView> */}

            <FlatList
                data={data}
                renderItem={({ item }) => <MyEventCard item={item} del={clickDelete} navmethod={updateMethod} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 50 }}
            />
            < NavigationBottomBar navigation={navigation} />
        </Container>
    );
}

export default MyEvent;