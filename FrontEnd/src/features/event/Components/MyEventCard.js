import React from "react";
import { Card, EventImage } from "../styles/all";
import {
  CardContent,
  Controls,
  DeleteButton,
  Mycardcontent,
  MyCardImage,
  MyCardInfo,
  MyCardTitle,
  UpdateButton,
} from "../styles/myevent";
import {
  Pressable,
  Modal,
  TouchableOpacity,
  Button,
  Alert,
  Switch,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigatorIOS } from "react-native";
import { View, Image } from "react-native";

function MyEventCard({ item, del, navmethod, type = false }) {
  return (
    <View style={styles.Card}>
      <ScrollView>
        <Image source={{ uri: item.img }} style={styles.image}></Image>

        <Text style={styles.Title}>{item.title}</Text>

        <Text style={styles.sub1}>
          <Text style={styles.date}>Date : </Text> {item.date}
        </Text>
        <Text style={styles.sub1}>
          <Text style={styles.date}>Participants : </Text> {item.time}
        </Text>
        <Text style={styles.sub1}>
          <Text style={styles.date}>Location : </Text> {item.venue}
        </Text>

        {!type && (
          <View style={styles.flexCon}>
            <View style={styles.upButton} onPress={() => navmethod(item)}>
              <Text style={styles.Txt} onPress={() => navmethod(item)}>
                Edit
              </Text>
            </View>

            <View style={styles.deButton} onPress={() => del(item._id)}>
              <Text style={styles.Txt1}>Delete</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default MyEventCard;

const styles = StyleSheet.create({
  Card: {
    marginTop: 20,
    width: 350,
    marginBottom: 10,
    marginLeft: "5%",
    height: "auto",
    paddingBottom: 15,
    backgroundColor: "#fff",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
    zIndex: 1,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  sub: {
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    width: "100%",
  },
  sub1: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
  },
  sub3: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 18,
    marginLeft: 15,
    marginBottom: 15,
    width: "90%",
  },
  date: {
    color: "rgba(26, 182, 92, 1)",
  },
  Title: {
    fontWeight: "bold",
    fontSize: 25,
    marginLeft: 15,
    width: "100%",
    marginTop: 15,
    color: "rgba(26, 182, 92, 1)",
  },
  flexCon: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
    marginTop: 15,
    marginLeft: "25%",
    marginBottom: 15,
  },
  upButton: {
    backgroundColor: "rgba(26, 182, 92, 1)",
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginEnd: 10,
    alignItems: "center",
  },
  deButton: {
    backgroundColor: "white",
    //add border
    borderColor: "#FF0606",
    borderWidth: 2,
    width: 100,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    marginStart: 15,
    alignItems: "center",
  },
  Txt: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
  Txt1: {
    color: "#FF0606",
    fontWeight: "bold",
    fontSize: 18,
  },
});
