import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  ImageContainer,
  SelectContainer,
  Input,
  InputContainer,
  InputTextArea,
  InputView,
  RadioContainer,
  RadioHolder,
  SelectImage,
  TitleText,
  BackPage,
  SwichGroup,
  OneSwitch,
  SearchView,
  PageTitle,
} from "../styles/add";
import { AddButton } from "../styles/all";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Searchbar } from "react-native-paper";
import { View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import MyEventCard from "../Components/MyEventCard";
import SideBar from "../../../components/SideBar";
import NavigationBottomBar from "../../../components/NavigationBottomBar";

function AllEvent({ navigation }) {
  const [data, setdate] = useState([]);
  const [uid, setuid] = useState("");
  const path = "http://10.0.2.2:8070";
  const getData2 = async () => {
    try {
      const value = await AsyncStorage.getItem("uid");
      if (value !== null) {
        setuid(value);
        getData(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData2();
  }, [data]);
  const getData = (id) => {
    axios
      .get(`${path}/api/event/allevent`)
      .then((data) => {
        setdate(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <SideBar navigation={navigation} />
      <AddButton onPress={() => navigation.navigate("addevent")}>
        <Ionicons name="add-circle" color="green" size={57} />
      </AddButton>
      <View style={{ width: 30 }}></View>

      <View>
        <BackPage>
          <PageTitle>All Events</PageTitle>
        </BackPage>
      </View>

      <View
        style={{
          marginBottom: "40%",
        }}
      >
        <FlatList
          data={data}
          renderItem={({ item }) => <MyEventCard item={item} type={true} />}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
        <View style={{ height: 100 }}></View>
      </View>

      <NavigationBottomBar navigation={navigation} />
    </Container>
  );
}

export default AllEvent;
