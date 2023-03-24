import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/features/home/Home";
import AddTransportation from "./src/features/transportation/pages/AddTransportation";
import Tranportation from "./src/features/transportation/pages/Transportation";





const Stack = createNativeStackNavigator();

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator
        screenOptions={
          {
            headerShown: false
          }
        }>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Addtransportation" component={AddTransportation} />
        <Stack.Screen name="tranportation" component={Tranportation} />

      </Stack.Navigator>
    </NavigationContainer >

  );
}

