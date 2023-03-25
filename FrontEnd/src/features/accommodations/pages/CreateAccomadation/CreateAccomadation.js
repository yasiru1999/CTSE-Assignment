import React, { useEffect, useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Container, PageTitle, TopNav, IconView } from "../Accommodations/Accommodations.style";
import { POST } from '../../../../helpers/httphelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { Title } from 'react-native-paper';
import { View, ScrollView, Button } from 'react-native';
import { InputView, Input, TextArea, Caution } from './CreateAccomadation.style';


function CreateAccomadation({ navigation }) {

  const [userId, setUserId] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleGetUserId = async () => {
    try {

      const value = await AsyncStorage.getItem('uid');

      if (value !== null) {
        setUserId(value);
      }

    } catch (err) {

      console.log(err);

    }
  }

  const handleSubmitData = async () => {

    if (name === '') {
      alert("Please enter a Name");
      return
    }
    if (location === '') {
      alert("Please enter a location");
      return
    }
    if (description === '') {
      alert("Please enter a description");
      return
    }
    if (image === '') {
      alert("Please enter the image Link");
      return
    }

    const ob = {

      user: userId,
      name,
      location,
      description,
      image,
      status: false,
      date: new Date().toISOString().slice(0, 10)

    }
    console.log(ob);
    const res = await POST('api/accommodations/create', ob);
    alert(res.message);
    navigation.navigate("Accommodations");
  }

  useEffect(() => {

    handleGetUserId();

  }, []);


  return (
    <Container>
      <SideBar navigation={navigation} />
      <TopNav>

        <View style={{ width: 30 }}></View>

        <View>
          <PageTitle>New Accomadation</PageTitle>
        </View>

        <IconView></IconView>
      </TopNav>

      <ScrollView style={{ marginBottom: "20%" }}>

        <InputView>
          <Title>Name</Title>
          <Input placeholder={"Enter Accommodation Name"} onChangeText={value => setName(value)} />
        </InputView>

        <InputView>
          <Title>Location</Title>
          <Input placeholder={"Enter Location"} onChangeText={value => setLocation(value)} />
        </InputView>

        <InputView>
          <Title>Description</Title>
          <TextArea placeholder={"Enter Description(feedback/price/...)"} onChangeText={value => setDescription(value)} multiline={true} numberOfLines={10} textAlignVertical="top" />
        </InputView>

        <InputView>
          <Title>Image</Title>
          <Input placeholder={"Enter Image Link"} onChangeText={value => setImage(value)} />
        </InputView>

        <Caution>
          <Icon name="exclamation-circle" size={16} color="#42a1f5" />
          By Clicking Create You Agree to take full resposibility for this place and are under the privacy & policy of this and government law.
        </Caution>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Create" color="#42a1f5" onPress={() => { handleSubmitData() }} />
        </View>

      </ScrollView>
      
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default CreateAccomadation;