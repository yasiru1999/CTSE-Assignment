import React, { useEffect, useState } from 'react';
import { Container, PageTitle, TopNav, IconView } from "../Reports/Reports.style";
import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { View, ScrollView, Button } from 'react-native';
import { InputView, Input, TextArea, Caution } from './CreateReport.style';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { POST } from '../../../../helpers/httphelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function CreateReport({ navigation }) {

  const [userId, setUserId] = useState('');
  const [title, setTitle] = useState('');
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

    if (title === '') {
      alert("Please enter a title");
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
      alert("Please enter the description");
      return
    }

    const ob = {
      user: userId,
      title,
      location,
      description,
      image,
      status: false,
      date: new Date().toISOString().slice(0, 10)
    }
    console.log(ob);
    const res = await POST('api/reports/create', ob);
    alert(res.message);
    navigation.navigate("Reports");
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
          <PageTitle>Create Report</PageTitle>
        </View>
        <IconView></IconView>
      </TopNav>
      <ScrollView style={{ marginBottom: "20%" }}>
        <InputView>
          <Title>Title</Title>
          <Input placeholder={"Enter Report Title"} onChangeText={value => setTitle(value)} />
        </InputView>
        <InputView>
          <Title>Location</Title>
          <Input placeholder={"Enter Location"} onChangeText={value => setLocation(value)} />
        </InputView>
        <InputView>
          <Title>Description</Title>
          <TextArea placeholder={"Enter Report Description"} onChangeText={value => setDescription(value)} multiline={true} numberOfLines={10} textAlignVertical="top" />
        </InputView>
        <InputView>
          <Title>Image</Title>
          <Input placeholder={"Enter Image Link"} onChangeText={value => setImage(value)} />
        </InputView>

        <Caution>
          <Icon name="exclamation-circle" size={16} color="#42a1f5" />
          By Clicking Create You Agree to take full resposibility for this report and are under the privacy & policy of this and government law.
        </Caution>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Create" color="#42a1f5" onPress={() => { handleSubmitData() }} />
        </View>
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default CreateReport;