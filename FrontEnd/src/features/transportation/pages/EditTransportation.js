import React, { useEffect, useState } from 'react';
import NavigationBottomBar from "../../../components/NavigationBottomBar";
import SideBar from "../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView } from "./Transportation.style";
import { View, ScrollView, Button } from 'react-native';
import { GET, PUT } from '../../../helpers/httphelper';
import { InputView, Input, TextArea, Caution } from './AddTransportation.style';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function EditTranportation({ navigation, route }) {

  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [travelDates, setTravelDates] = useState('');
  const [typeOfTransportation, setTypeOfTransportation] = useState('');
  const [travelClass, setTravelClass] = useState('');
  const [date, setDate] = useState('');
  const [Image, setImage] = useState('');
  const [accId, setaccId] = useState('');


  const handleFetchReportById = async () => {
    try {
      const res = await GET(`api/transportation/getTransportationById/${route.params.id}`);
      setaccId(res.data._id)
      setUser(res.data.user);
      setTitle(res.data.title);
      setOrigin(res.data.origin)
      setDestination(res.data.destination);
      setTravelDates(res.data.travelDates);
      setTypeOfTransportation(res.data.typeOfTransportation);
      setTravelClass(res.data.travelClass);
      setDate(res.data.date);
      setImage(res.data.Image);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateData = async () => {

    if (title === '') {
      alert("Please enter a title");
      return
    }
    if (origin === '') {
      alert("Please enter a location");
      return
    }
    if (destination === '') {
      alert("Please enter a description");
      return
    }
    if (typeOfTransportation === '') {
      alert("Please enter the description");
      return
    }

    const ob = {
      user,
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
    const res = await PUT(`api/transportation/updateTransportationById/${accId}`, ob);
    alert(res.message);
    navigation.navigate("tranportation");
  }

  useEffect(() => {
    handleFetchReportById();
  }, [])

  return (
    <Container>
      <SideBar navigation={navigation} />
      <TopNav>
        <View style={{ width: 30 }}></View>
        <View>
          <PageTitle>Edit Transportation Details.</PageTitle>
        </View>
        <IconView></IconView>
      </TopNav>
      <ScrollView style={{ marginBottom: "20%" }}>
        <InputView>
          <Title>Title</Title>
          <Input placeholder={"Enter Report Title"} onChangeText={value => setTitle(value)} value={title}/>
        </InputView>
        <InputView>
          <Title>Origin</Title>
          <Input placeholder={"Enter Origin"} onChangeText={value => setOrigin(value)} value={origin}/>
        </InputView>
        <InputView>
          <Title>Destination</Title>
          <Input placeholder={"Enter Report Destination"} onChangeText={value => setDestination(value)} value={destination}/>
        </InputView>
        <InputView>
          <Title>Travel Dates</Title>
          <Input placeholder={"Enter Report Travel Dates"} onChangeText={value => setTravelDates(value)} value={travelDates}/>
        </InputView>
        <InputView>
          <Title>Type Of Transportation</Title>
          <Input placeholder={"Enter Report Type Of Transportation"} onChangeText={value => setTypeOfTransportation(value)} value={typeOfTransportation} />
        </InputView>
        <InputView>
          <Title>Travel Class</Title>
          <Input placeholder={"Enter Report Description"} onChangeText={value => setTravelClass(value)} value={travelClass}/>
        </InputView>
        <InputView>
          <Title>Date</Title>
          <Input placeholder={"Enter Report Date"} onChangeText={value => setDate(value)} value={date}/>
        </InputView>
        <InputView>
          <Title>Image</Title>
          <Input placeholder={"Enter Image Link"} onChangeText={value => setImage(value)} value={Image}/>
        </InputView>
        <Caution>
          <Icon name="exclamation-circle" size={16} color="#42a1f5" />
          By Editing this Details, you resubmit the transportation details. Do not change if not necessary.
        </Caution>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Update" color="#42a1f5" onPress={() => { handleUpdateData() }} />
        </View>
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default EditTranportation;