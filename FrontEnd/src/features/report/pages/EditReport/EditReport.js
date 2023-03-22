import React, { useEffect, useState } from 'react';
import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView } from "../Reports/Reports.style";
import { View, ScrollView, Button } from 'react-native';
import { GET, PUT } from '../../../../helpers/httphelper';
import { InputView, Input, TextArea, Caution } from '../CreateReport/CreateReport.style';
import { Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome5';

function EditReport({ navigation, route }) {

  const [user, setUser] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [reportId, setReportId] = useState('');


  const handleFetchReportById = async () => {
    try {
      const res = await GET(`api/reports/get/report/${route.params.id}`);
      setReportId(res.data._id);
      setUser(res.data.user);
      setTitle(res.data.title);
      setLocation(res.data.location);
      setDescription(res.data.description);
      setImage(res.data.image);
    } catch (err) {
      console.log(err);
    }
  }

  const handleUpdateData = async () => {

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
      user,
      title,
      location,
      description,
      image,
      status: false,
      date: new Date().toISOString().slice(0, 10)
    }
    console.log(ob);
    const res = await PUT(`api/reports/update/report/${reportId}`, ob);
    alert(res.message);
    navigation.navigate("MyReports");
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
          <PageTitle>Edit Report</PageTitle>
        </View>
        <IconView></IconView>
      </TopNav>
      <ScrollView style={{ marginBottom: "20%" }}>
        <InputView>
          <Title>Title</Title>
          <Input placeholder={"Enter Report Title"} onChangeText={value => setTitle(value)} value={title} />
        </InputView>
        <InputView>
          <Title>Location</Title>
          <Input placeholder={"Enter Location"} onChangeText={value => setLocation(value)} value={location} />
        </InputView>
        <InputView>
          <Title>Description</Title>
          <TextArea placeholder={"Enter Report Description"} onChangeText={value => setDescription(value)} multiline={true} numberOfLines={10} textAlignVertical="top" value={description} />
        </InputView>
        <InputView>
          <Title>Image</Title>
          <Input placeholder={"Enter Image Link"} onChangeText={value => setImage(value)} value={image} />
        </InputView>
        <Caution>
          <Icon name="exclamation-circle" size={16} color="#42a1f5" />
          By Editing this report, you resubmit the report. Do not change if not necessary.
        </Caution>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Button title="Update" color="#42a1f5" onPress={() => { handleUpdateData() }} />
        </View>
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default EditReport;