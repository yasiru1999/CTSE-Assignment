import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Button,
  Alert,
  Switch,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
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
  SwichGroup,
  OneSwitch,
} from "../styles/add";
import { EventImage } from "../styles/all";
import { Picker } from "@react-native-picker/picker";
import * as ImagePicker from "expo-image-picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

function EditEvent({ route, navigation }) {
  const { event } = route.params;
  const [uid, setuid] = useState("");
  const [eid, seteid] = useState("");
  const [title, settitle] = useState("");
  const [date, setdate] = useState("");
  const [venue, setvenue] = useState("");
  const [time, settime] = useState("");
  const [description, setdescription] = useState("");
  const path = "http://10.0.2.2:8070";

  useEffect(() => {
    getData();
    setdata();
  }, []);

  const setdata = () => {
    seteid(event._id);
    settitle(event.title);
    setdescription(event.description);
    settime(event.time);
    setvenue(event.venue);
  };
  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uid");
      if (value !== null) {
        setuid(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const submitData = () => {
    if (title === "") {
      alert("Please select an title");
      return;
    }

    if (venue === "") {
      alert("Please enter the location");
      return;
    }

    if (time === "") {
      alert("Please enter the number of participants");
      return;
    }

    if (description === "") {
      alert("Please enter the event type");
      return;
    }

    const newEvent = {
      uid,
      title,
      date,
      venue,
      time,
      description,
    };

    axios
      .post(`${path}/api/event/edit`, { eid, obj: newEvent })
      .then((data) => {
        console.log(data.data);
        alert("successfully created");
        navigation.navigate("myevent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Pressable
        style={{
          marginTop: 20,
          marginLeft: 15,
          justifyContent: "flex-start",
          position: "absolute",
          top: 0,
          left: 0,
          backgroundColor: "#1AB65C",
          paddingLeft: 10,
          paddingRight: 10,
          borderRadius: 50,
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{
            marginTop: 5,
            width: 25,
            height: 40,
          }}
          source={require("../../../../assets/back.png")}
        />
      </Pressable>
      <TitleText>Update Event</TitleText>
      <ScrollView>
        <View style={styles.Border}>
          <InputContainer>
            <EventImage source={require("../../../../assets/createEv.png")} />

            <InputView>
              <Text>Event Title</Text>
              <Input
                placeholder={"Enter the Event title"}
                onChangeText={(newtext) => settitle(newtext)}
                value={title}
              />
            </InputView>

            <InputView>
              <Text>Location</Text>
              <Input
                placeholder={"Enter the event location"}
                onChangeText={(newtext) => setvenue(newtext)}
                value={venue}
              />
            </InputView>

            <InputView>
              <Text>Participants</Text>
              <Input
                placeholder={"Enter the time"}
                onChangeText={(newtext) => settime(newtext)}
                value={time}
              />
            </InputView>

            <InputView>
              <Text>Event type</Text>
              <Input
                placeholder={"Enter the Description"}
                onChangeText={(newtext) => setdescription(newtext)}
                value={description}
              />
            </InputView>
          </InputContainer>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.ButtonAdd} onPress={() => submitData()}>
              Update
            </Text>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}

export default EditEvent;

const styles = StyleSheet.create({
  ButtonAdd: {
    backgroundColor: "#1AB65C",
    marginTop: 20,
    width: 80,
    height: 40,
    borderRadius: 10,
    textAlign: "center",
    paddingTop: 8,
    color: "black",
    fontWeight: "bold",
    fontSize: 15,
    marginBottom: 20,
  },
  Border: {
    borderWidth: 2,
    borderColor: "#1AB65C",
    borderRadius: 10,
    padding: 15,
    margin: 10,
  },
});
