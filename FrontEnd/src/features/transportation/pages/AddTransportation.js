import React, { useEffect, useState } from 'react';
import { Container, PageTitle, TopNav, IconView } from "./Transportation.style";
import NavigationBottomBar from "../../../components/NavigationBottomBar";
import SideBar from "../../../components/SideBar";
import { View, ScrollView, Button } from 'react-native';
import { InputView, Input, TextArea, Caution } from './AddTransportation.style';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { POST } from '../../../helpers/httphelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function AddTransportation({ navigation }) {


  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [typeOfTransportation, setTypeOfTransportation] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [date, setDate] = useState('');
  const [Image, setImage] = useState('');


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

  //handle form validation
  const handleSubmitData = async () => {

    if (title === '') {
      alert("Please enter a title");
      return
    }
    if (origin === '') {
      alert("Please enter a origin");
      return
    }
    if (destination === '') {
      alert("Please enter a destination");
      return
    }
    if (typeOfTransportation === '') {
      alert("Please enter the typeOfTransportation");
      return
    }

    const ob = {
      user: userId,
      title,
      origin,
      destination,
      travelDates,
      typeOfTransportation,
      travelClass,
      date,
      Image,
    }
    console.log(ob);
    const res = await POST('api/transportation/addTransportation', ob);
    alert(res.message);
    navigation.navigate("tranportation");
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
          <PageTitle>Add Transportation Details.</PageTitle>
        </View>
        <IconView></IconView>
      </TopNav>
      <ScrollView style={{ marginBottom: "20%" }}>

        <InputView>
          <Title>Title</Title>
          <Input placeholder={"Enter Title"} onChangeText={value => setTitle(value)} />
        </InputView>

        <InputView>
          <Title>Origin</Title>
          <Input placeholder={"Enter Origin"} onChangeText={value => setOrigin(value)} />
        </InputView>

        <InputView>
          <Title>Destination</Title>
          <Input placeholder={"Enter Destination"} onChangeText={value => setDestination(value)} />
        </InputView>

        <InputView>
          <Title>Contact number</Title>
          <Input placeholder={"Enter contact number"} onChangeText={value => setTravelDates(value)}  />
        </InputView>

        <InputView>
          <Title>Type Of Transportation</Title>
          <Input placeholder={"Enter Type Of Transportation"} onChangeText={value => setTypeOfTransportation(value)}  />
        </InputView>

        <InputView>
          <Title>Travel Class</Title>
          <Input placeholder={"Enter Description"} onChangeText={value => setTravelClass(value)}  />
        </InputView>

        <InputView>
          <Title>Date</Title>
          <Input placeholder={"Enter Date"} onChangeText={value => setDate(value)} />
        </InputView>

        <InputView>
          <Title>Image</Title>
          <Input placeholder={"Enter Image Link"} onChangeText={value => setImage(value)} />
        </InputView>

        <Caution>
          <Icon name="exclamation-circle" size={16} color="#42a1f5" />
          By Clicking Create You Agree to take full resposibility for this details and are under the privacy & policy of this and government law.
        </Caution>

        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Create" color="#42a1f5" onPress={() => { handleSubmitData() }} />
        </View>

      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default AddTransportation;