import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Pressable,
  Modal,
  TouchableOpacity,
  View,
  Button,
  Alert,
  Switch,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
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
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from "@react-native-community/datetimepicker";
import NavigationBottomBar from "../../../components/NavigationBottomBar";
import SideBar from "../../../components/SideBar";

function AddEvent({ navigation }) {
  const [uid, setuid] = useState("");
  const [title, settitle] = useState("");
  const [date, setdate] = useState("09-10-2020");
  const [venue, setvenue] = useState("");
  const [time, settime] = useState("");
  const [description, setdescription] = useState("");
  const [img, setImg] = useState("");
  const path = "http://10.0.2.2:8070";

  useEffect(() => {
    getData();
  }, []);
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

  const onChangeTextComment = (value) => {
    setComment(value);
  };

  const submitData = () => {
    if (title === "") {
      alert("Please select an event title");
      return;
    }

    if (date === "") {
      alert("Please enter the date");
      return;
    }

    if (img === "") {
      alert("Please enter the image");
      return;
    }

    if (venue === "") {
      alert("Please enter the location");
      return;
    }

    if (time === "") {
      alert("Please enter the participants");
      return;
    }

    if (description === "") {
      alert("Please enter the type");
      return;
    }

    const newEvent = {
      uid,
      title,
      date,
      img,
      venue,
      time,
      description,
    };

    axios
      .post(`${path}/api/event/add`, newEvent)
      .then((data) => {
        console.log(data.data);
        alert("successfully created");

        navigation.navigate("allevent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <TitleText>Create Event</TitleText>
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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 12,
            },
          }}
          source={require("../../../../assets/back.png")}
        />
      </Pressable>
      <ScrollView
        style={{
          marginBottom: "18%",
        }}
      >
        <View style={styles.Border}>
          <InputContainer>
            <EventImage source={require("../../../../assets/createEv.png")} />

            <InputView>
              <Text>Event Title</Text>
              <Input
                placeholder={"Enter the Event title"}
                onChangeText={(newtext) => settitle(newtext)}
              />
            </InputView>

            <InputView>
              <Text>Date</Text>
              <Input
                placeholder={"Enter the Date"}
                onChangeText={(newtext) => setdate(newtext)}
              />
            </InputView>

            <InputView>
              <Text>Image</Text>
              <Input
                placeholder={"Enter the Image"}
                onChangeText={(newtext) => setImg(newtext)}
              />
            </InputView>

            <InputView>
              <Text>Location</Text>
              <Input
                placeholder={"Enter the event location"}
                onChangeText={(newtext) => setvenue(newtext)}
              />
            </InputView>

            <InputView>
              <Text>Participants</Text>
              <Input
                placeholder={"Enter the number of participants"}
                onChangeText={(newtext) => settime(newtext)}
              />
            </InputView>

            <InputView>
              <Text>Event Type </Text>
              <Input
                placeholder={"Enter the Event type"}
                onChangeText={(newtext) => setdescription(newtext)}
              />
            </InputView>
          </InputContainer>

          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <Text style={styles.ButtonAdd} onPress={() => submitData()}>
              Create
            </Text>
          </View>
        </View>
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  );
}

export default AddEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
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
