import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/features/home/Home";
import EventAdd from "./src/features/event/pages/EventAdd";
import AllEvent from "./src/features/event/pages/AllEvent";
import MyEvent from "./src/features/event/pages/MyEvent";
import EventEdit from "./src/features/event/pages/EventEdit";

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
