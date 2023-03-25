import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/features/home/Home";
import EventAdd from "./src/features/event/pages/EventAdd";
import AllEvent from "./src/features/event/pages/AllEvent";
import MyEvent from "./src/features/event/pages/MyEvent";
import EventEdit from "./src/features/event/pages/EventEdit";
import Accommodations from "./src/features/accommodations/pages/Accommodations/Accommodations";
import MyAccommodations from "./src/features/accommodations/pages/MyAccommodations/MyAccommodations";
import CreateAccomadation from "./src/features/accommodations/pages/CreateAccomadation/CreateAccomadation";
import EditAccommodation from "./src/features/accommodations/pages/EditAccommodation/EditAccommodation";
import TripAdd from "./src/features/trip/TripAdd";
import MyTrips from "./src/features/trip/MyTrips";
import TripHome from "./src/features/trip/TripHome";
import TripEdit from "./src/features/trip/TripEdit";
import TripCreate from "./src/features/trip/TripCreate";
import TripUserView from "./src/features/trip/TripUserView";
import HomeWelcome from "./src/features/home/HomeWelcome";
import AddTransportation from "./src/features/transportation/pages/AddTransportation";
import Tranportation from "./src/features/transportation/pages/Transportation";
import EditTranportation from "./src/features/transportation/pages/EditTransportation";
import AllTranportation from "./src/features/transportation/pages/AllTransportation";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="addevent" component={EventAdd} />
        <Stack.Screen name="allevent" component={AllEvent} />
        <Stack.Screen name="myevent" component={MyEvent} />
        <Stack.Screen name="editevent" component={EventEdit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
