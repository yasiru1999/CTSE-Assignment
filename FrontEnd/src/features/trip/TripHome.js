import { display } from "@mui/system";
import { useEffect, useState } from "react";
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  ImageBackground,
} from "react-native";
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { GET } from "../../helpers/httphelper";

function TripHome({ navigation }) {
  const [trip, setMarianResources] = useState([]);

  useEffect(() => {
    //get all resources
    getAll();
  }, []);

  //get all resources
  const getAll = async () => {
    await GET("api/trip/getTripDetails").then((res) => {
      setMarianResources(res.trip);
    });
  };

  return (
    <ImageBackground
      source={require("../../../assets/bg2.png")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        {/* Side Bar */}
        <SideBar navigation={navigation} />
        {/* Head Title */}
        <Text style={styles.title}>All Trips</Text>
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
                        navigation.navigate("TripUserView", {
                          trip: trip,
                        })
                      }
                    >
                      <Text
                        style={{
                          fontWeight: "bold",
                          fontSize: 20,
                          marginLeft: 40,
                        }}
                      >
                        {" "}
                        {trip?.title}
                      </Text>
                      <Image
                        source={{ uri: trip?.image }}
                        style={{
                          width: "80%",
                          height: 150,
                          borderRadius: 10,
                          backgroundColor: "#82C7EE",
                          marginLeft: 40,
                          marginTop: 10,
                        }}
                      />

                      <Text
                        style={{
                          fontSize: 15,
                          bottom: 10,
                          right: 60,
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
    </ImageBackground>
  );
}

export default TripHome;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    margin: 30,
    justifyContent: "flex-start",
  },
  contentColumn: {
    height: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    overflow: "scroll",

    justifyContent: "space-evenly",
  },
  viewMarianResources: {
    width: 420,
    height: 250,
    margin: 5,
    padding: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#48A41D",
  },
});
