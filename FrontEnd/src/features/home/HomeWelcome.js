import { Image, Pressable,ImageBackground, ScrollView, Button,StyleSheet, Text, View } from "react-native";
import { HomeDetails } from "../../service/Data";
// import { StatusBar } from "expo-status-bar";
function HomeWelcome({ navigation }) {
    return (
        <ImageBackground
      source={require("../../../assets/welcome.png")}
      style={{ width: "100%", height: "100%" }}
    >
        <View style={styles.container}>
        <Pressable style={styles.button} onPress={() => navigation.navigate("Home")}>
          <Text style={styles.buttonText}>Continue</Text>
        </Pressable>
        </View >
        </ImageBackground>
    );
}

export default HomeWelcome;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:800,
        alignItems: "center",
        justifyContent: "center",
        
    },
    button: {
        alignItems: "center",
        backgroundColor: "#000000",
        padding: 10,
        borderRadius: 35,
        margin: 10,
        width: 250,
        marginLeft: "5%",
        marginBottom: "20%",
      },
      buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
      },
    
   
});
