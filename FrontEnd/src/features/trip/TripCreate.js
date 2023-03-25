import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { DELETE } from "../../helpers/httphelper";

function TripViewCreator({ navigation, route }) {
  const { trip } = route.params;
  console.log(trip);

  const deletePost = (id) => {
    DELETE(`api/trip/deleteTrip/${id}`)
      .then((data) => {
        console.log(data);
        Alert.alert("Deleted Successfully");
        navigation.navigate("MyTrips");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const clickDelete = (id) => {
    console.log(id);
    Alert.alert("Delete", "Sure You want to Delete", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => deletePost(id) },
    ]);
  };
  return (
    <View style={styles.container}>
      {/* Side Bar */}
      <SideBar navigation={navigation} />
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

      <Text style={styles.title}>View Trip Details</Text>
      {/* Content Here */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: "20%",
          width: "95%",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 10,
            marginTop:50,
          }}
        >
          {trip.title}
        </Text>
        <Image
          source={{ uri: trip?.image }}
          style={{
            width: "100%",
            height: 200,
            borderRadius: 10,
            borderWidth: 2,
            borderColor: "#82C7EE",
            backgroundColor: "#82C7EE",
          }}
        />
        <Text>Trip Title : {trip.name}</Text>
        <Text>Status : {trip?.status}</Text>
        <Text>Number of Dates : {trip?.dates}</Text>
        <Text>Budget : {trip?.budget}</Text>
        <Text>Activities :{trip?.activities}</Text>
        <Text
          style={{
            fontSize: 15,
            textAlign: "justify",
            height: "100%",
            overflow: "scroll",
            marginBottom: "10%",
          }}
        >
          Destination : {trip?.destination}
        </Text>
        
       
        <Text
          style={{
            fontSize: 15,
            bottom: 10,
            right: 10,
            position: "absolute",
          }}
        >
         Last Updated :  {(trip?.date).split("T")[0]}
        </Text>

        <Pressable
          style={{
            fontSize: 15,
            bottom: 0,
            left: 10,
            position: "absolute",
            padding: 2,
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() =>
            navigation.navigate("TripEdit", { trip: trip })
          }
        >
          <Image
            source={require("../../../assets/edit.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
        <Pressable
          style={{
            fontSize: 15,
            bottom: 0,
            left: 50,
            position: "absolute",
            padding: 2,
            margin: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => clickDelete(trip._id)}
        >
          <Image
            source={require("../../../assets/delete.png")}
            style={{ width: 30, height: 30 }}
          />
        </Pressable>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <NavigationBottomBar navigation={navigation} />
    </View>
  );
}

export default TripViewCreator;
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
    right: 10,
    backgroundColor: "#d7ffc4",
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 50,
  },
});
