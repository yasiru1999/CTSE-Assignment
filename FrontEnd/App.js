import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/features/home/Home";

import TripHome from "./src/features/trip/TripHome";
;

import HomeWelcome from "./src/features/home/HomeWelcome";
import AddEvent from "./src/features/event/pages/AddEvent";
import AllEvent from "./src/features/event/pages/AllEvent";
import MyEvent from "./src/features/event/pages/MyEvent";
import EditEvent from "./src/features/event/pages/EditEvent";




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
        <Stack.Screen name="HomeWelcome" component={HomeWelcome} />
        <Stack.Screen name="TripHome" component={TripHome} />
       
        <Stack.Screen name="addevent" component={AddEvent} />
         <Stack.Screen name="allevent" component={AllEvent} />
        <Stack.Screen name="myevent" component={MyEvent} />
         <Stack.Screen name="editevent" component={EditEvent} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

