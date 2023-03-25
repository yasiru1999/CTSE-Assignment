import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/features/home/Home";
import AddEvent from "./src/features/event/pages/AddEvent";
import AllEvent from "./src/features/event/pages/AllEvent";
import MyEvent from "./src/features/event/pages/MyEvent";
import EditEvent from "./src/features/event/pages/EditEvent";

import TripAdd from "./src/features/trip/TripAdd";
import MyTrips from "./src/features/trip/MyTrips";
import TripHome from "./src/features/trip/TripHome";
import TripEdit from "./src/features/trip/TripEdit";
import TripCreate from "./src/features/trip/TripCreate";
import TripUserView from "./src/features/trip/TripUserView";
import HomeWelcome from "./src/features/home/HomeWelcome";




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
        <Stack.Screen name="addevent" component={AddEvent} />
         <Stack.Screen name="allevent" component={AllEvent} />
        <Stack.Screen name="myevent" component={MyEvent} />
         <Stack.Screen name="editevent" component={EditEvent} />
         <Stack.Screen name="HomeWelcome" component={HomeWelcome} />
        <Stack.Screen name="TripHome" component={TripHome} />
        <Stack.Screen name="MyTrips" component={MyTrips} />
        <Stack.Screen name="TripAdd" component={TripAdd} />
        <Stack.Screen name="TripEdit" component={TripEdit} />
        <Stack.Screen name="TripCreate" component={TripCreate} />
        <Stack.Screen name="TripUserView" component={TripUserView} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

