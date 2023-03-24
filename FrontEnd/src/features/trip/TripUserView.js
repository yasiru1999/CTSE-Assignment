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

function TripViewUser({ navigation, route }) {
  const { trip } = route.params;
  console.log(trip);
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
          width: "95%",
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#48A41D",
        }}
      >
        <Text
          style={{
            fontSize: 35,
            fontWeight: "bold",
            marginBottom: 10,
            marginLeft: 40,
            color: "#48A41D",
          }}
        >
          {trip.title}
        </Text>
        <Image
          source={{ uri: trip?.image }}
          style={{
            width: "80%",
            height: 200,
            borderRadius: 10,
            borderWidth: 2,
            backgroundColor: "#d7ffc4",
            marginLeft: 40,

            marginBottom: 50,
          }}
        />
        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Title: {trip.name}
        </Text>
        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Status: {trip?.status}
        </Text>
        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Dates: {trip?.dates}
        </Text>
        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Budget: {trip?.budget}
        </Text>

        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Destination: {trip?.destination}
        </Text>
        <Text style={{ marginBottom: 10, marginLeft: 40 }}>
          Activities:
          {trip?.activities}
        </Text>
        <Text
          style={{
            fontSize: 15,
            bottom: 10,
            right: 10,
            position: "absolute",
          }}
        >
          {(trip?.date).split("T")[0]}
        </Text>
      </ScrollView>
      <Image
        style={{
          width: "90%",
          height: 400,
          borderRadius: 10,
        }}
        source={require("../../../assets/c2.png")}
      />
      {/* Bottom Navigation Bar */}
      <NavigationBottomBar navigation={navigation} />
    </View>
  );
}

export default TripViewUser;
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
});
