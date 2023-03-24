import { useState, useEffect } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Back2,
} from "react-native";
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { POST } from "../../helpers/httphelper";
import { Searchbar } from "react-native-paper";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useIsFocused } from "@react-navigation/native";
import { SearchView } from "../report/pages/Reports/Reports.style";

function MyTrip({ navigation }) {
  const [uid, setUid] = useState("");
  const [trip, setTrip] = useState([]);
  const isFocused = useIsFocused();
  //const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("uid");
      if (value !== null) {
        setUid(value);
      }
      POST("api/trip/getTripDetailsByUid", { uid: value }).then((res) => {
        setTrip(res.trip);
      });
    } catch (e) {
      console.log(e);
    }
  };

  const handleSearchByName = async () => {
    try {
      if (trip.destination === "") {
        getData();
      } else {
        let ob = {
          destination: trip.destination,
        };
        const res = await GET(`api/trip/search/${destination}`, ob);
        setTrip(res.trip);
        console.log(res);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    handleSearchByName();
  }, []);

  return (
    <View style={styles.container}>
      {/* Side Bar */}
      <SideBar navigation={navigation} />
      {/* Head Title */}
      <Text style={styles.title}>Manage Trips</Text>

      <Pressable
        style={styles.addTrip}
        onPress={() => navigation.navigate("TripAdd")}
      >
        <Image
          style={{
            width: 40,
            height: 40,
          }}
          source={require("../../../assets/add.png")}
        />
      </Pressable>

      <SearchView>
        <Searchbar
          placeholder="Search"
          style={{ width: "90%" }}
          onChangeText={handleSearchByName}
          value={trip.destination}
        />
      </SearchView>
      {/* Content Here */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{
          marginBottom: "20%",
        }}
      >
        <View style={styles.contentColumn}>
          {/* TripUserView */}
          {trip
            ? trip?.map((trip, index) => {
                return (
                  <Pressable
                    style={styles.viewMarianResources}
                    key={index}
                    onPress={() =>
                      navigation.navigate("TripCreate", {
                        trip: trip,
                      })
                    }
                  >
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 20,
                      }}
                    >
                      {" "}
                      {trip?.title}
                    </Text>
                    <ImageBackground
                      source={{ uri: trip?.image }}
                      style={{
                        width: "100%",
                        height: 100,
                        borderRadius: 10,
                        backgroundColor: "#82C7EE",
                      }}
                    />
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      Status: {trip?.status}
                    </Text>
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      Dates: {trip?.dates}
                    </Text>
                    <Text style={{ fontSize: 15, textAlign: "justify" }}>
                      Budget: {trip?.budget}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: "justify",
                      }}
                    >
                      Destination : {trip?.destination}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        textAlign: "justify",
                      }}
                    >
                      Activities : {trip?.activities}
                    </Text>
                    <Text
                      style={{
                        fontSize: 15,
                        top: 250,
                        right: 30,
                        position: "absolute",
                      }}
                    >
                      Last Updated: {(trip?.date).split("T")[0]}
                    </Text>
                  </Pressable>
                );
              })
            : null}
        </View>
      </ScrollView>
      {/* Bottom Navigation Bar */}
      <NavigationBottomBar navigation={navigation} />
    </View>
  );
}

export default MyTrip;

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
  addTrip: {
    position: "absolute",
    top: 33,
    right: 15,
    backgroundColor: "#fafafa",
    borderRadius: 50,
  },

  contentColumn: {
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "scroll",
    justifyContent: "space-evenly",
  },
  viewMarianResources: {
    width: 400,
    height: 300,
    margin: 5,
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#48A41D",
  },
});
