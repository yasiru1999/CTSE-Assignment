import { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Alert,
} from "react-native";
import NavigationBottomBar from "../../components/NavigationBottomBar";
import { POST } from "../../helpers/httphelper";
import { SelectList } from "react-native-dropdown-select-list";
import AsyncStorage from "@react-native-async-storage/async-storage";

function TripAdd({ navigation }) {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [destination, setDetails] = useState("");
  const [status, setCategory] = useState("");
  const [dates, setLifeSpan] = useState("");
  const [activities, setAuthor] = useState("");
  const [budget, setHabit] = useState("");
  const [selected, setSelected] = useState("");
  const [uid, setuid] = useState("");

  const data = [
    { key: "1", value: "Planned" },
    { key: "2", value: "In Progress" },
    { key: "3", value: "Completed" },
  ];

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
  console.log(uid);

  const handleSubmit = () => {
    if (name === "") {
      alert("Please Select an Name");
      return;
    }
    if (destination === "") {
      alert("Please Select an Details");
      return;
    }
    if (budget === "") {
      alert("Please Enter the budget");
      return;
    }
    const newTrip = {
      uid,
      title: name,
      image,
      name,
      destination,
      status: selected,
      activities,
      budget,
      dates,
    };
    console.log(newTrip);
    POST("api/trip/addTrip", newTrip).then((res) => {
      Alert.alert("Details Entered Succuss", res.message);
      console.log(res);
      navigation.navigate("MyTrips");
    });
  };
  return (
    <View style={styles.container}>
      {/* back button */}
      <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image
          style={{
            marginTop: 5,
            width: 25,
            height: 40,
          }}
          source={require("../../../assets/back.png")}
        />
      </Pressable>
      <Text style={styles.title}>Travel Itinerary Form</Text>
      {/* Content Here */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          width: "100%",
          paddingRight: 15,
          paddingLeft: 15,
          bottom: "15%",
          top: "0%",
        }}
      >
        <Image
          style={{
            width: "100%",
            height: 250,
            borderRadius: 10,
          }}
          source={require("../../../assets/c1.jpg")}
        />
        <Text>Image</Text>

        <TextInput
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter image Url"
          onChangeText={(image) => setImage(image)}
        />
        <Text>Trip Title</Text>
        <TextInput
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter name"
          onChangeText={(name) => setName(name)}
        />
        <Text>Destination</Text>
        <TextInput
          style={{
            height: 80,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter destination"
          onChangeText={(destination) => setDetails(destination)}
        />
        <Text>Status</Text>
        {/* Select  */}
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          save="value"
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
        />

        <Text>Travel dates</Text>
        <TextInput
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter life span"
          onChangeText={(dates) => setLifeSpan(dates)}
        />
        <Text>Activities </Text>
        <TextInput
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter activities"
          onChangeText={(activities) => setAuthor(activities)}
        />
        <Text>Budget</Text>
        <TextInput
          style={{
            height: 40,
            width: "100%",
            borderWidth: 1,
            borderRadius: 10,
            paddingLeft: 10,
          }}
          placeholder="Enter budgetat"
          onChangeText={(budget) => setHabit(budget)}
        />
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <NavigationBottomBar navigation={navigation} />
    </View>
  );
}

export default TripAdd;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 30,
    justifyContent: "flex-start",
  },
  backButton: {
    marginTop: 30,
    marginLeft: 15,
    justifyContent: "flex-start",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "#82C7EE",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
  },

  editMarianResources: {
    backgroundColor: "#82C7EE",
    padding: 2,
    borderRadius: 15,
    borderWidth: 1,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  editMarianResourcesText: {
    fontSize: 20,
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#48A41D",
    padding: 10,
    borderRadius: 15,
    margin: 10,
    width: 200,
    marginLeft: "30%",
    marginBottom: "20%",
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
});
