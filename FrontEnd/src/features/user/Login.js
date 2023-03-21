import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, Alert, Pressable, Image } from "react-native";
import { POST } from "../../helpers/httphelper";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LoginImageContainer } from './Login.style';
import { Back2, ContentWrapper, LogoImage, LogoWrapper } from "../community/styles/all";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("nethini@gmail.com");
  const [password, setPassword] = useState("1234");

  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('uid', value)
    } catch (e) {
      console.log(e)
    }
  }

  const login = async () => {
    const data = {
      email: email,
      password: password,
    };
    console.log(data);
    POST("api/user/login", data)
      .then((res) => {
        if (res.message === "Login successful") {
          Alert.alert("Success login Success", res.message);
          storeData(res.user._id);
          navigation.navigate("Home");
        } else if (res.message === "Wrong password") {
          Alert.alert("Password Wrong", res.message);
        } else if (res.message === "User does not exist") {
          Alert.alert("User Name Wrong try again or register", res.message);
          navigation.navigate("Register");
        } else if (res.message === "Please enter all fields") {
          Alert.alert("Please enter all fields", res.message);
        } else {
          Alert.alert("Error", res.message);
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Back2 source={require('../../../assets/bg.png')}>
        <ContentWrapper>
          <LogoWrapper>
            <LogoImage source={require('../../../assets/log.png')} style={{ width: 250, height: 200 }} />
          </LogoWrapper>


          <Text style={styles.title}>Sign In</Text>
          <TextInput style={styles.input} placeholder="Enter your email" onChangeText={(email) => setEmail(email)} />
          <TextInput secureTextEntry={true} style={styles.input} placeholder="Enter your password" onChangeText={(text) => setPassword(text)} />
          <Button style={styles.button}  color="#48A41D" title="SignIn" onPress={() => login()} />
          <Pressable onPress={() => navigation.navigate("Register")}>
            <View>
              <Text style={styles.link}>
                Signup
              </Text>
            </View>
          </Pressable>
        </ContentWrapper>
      </Back2>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderRadius: 10,
    width: 250,
    height: 60,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:"#48A41D",
   
  },
  button:{
   marginBottom:50 ,
  },
  title: {
    fontSize: 30,
    marginBottom: 20,
    marginTop: 30,
    fontWeight: "bold",
  },
  link: {
    color: "#48A41D",
    fontSize: 15,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginTop: 10,
    cursor: "pointer",
  },
});
