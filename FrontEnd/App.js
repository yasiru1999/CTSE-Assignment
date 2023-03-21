import Login from "./src/features/user/Login";
import Register from "./src/features/user/Register";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./src/features/home/Home";
import MarianResourcesAdd from "./src/features/marianResources/MarianResourcesAdd";
import MyMarianResources from "./src/features/marianResources/MyMarianResources";
import MarianResourcesHome from "./src/features/marianResources/MarianResourcesHome";
import MarianResourcesEdit from "./src/features/marianResources/MarianResourcesEdit";
import MarianResourcesViewCreator from "./src/features/marianResources/MarianResourcesViewCreator";
import MarianResourcesViewUser from "./src/features/marianResources/MarianResourcesViewUser";
import AddEvent from "./src/features/event/pages/AddEvent";
import AllPost from "./src/features/community/pages/AllPost";
import AddPost from "./src/features/community/pages/AddPost";
import MyPost from "./src/features/community/pages/MyPost";
import AllEvent from "./src/features/event/pages/AllEvent";
import MyEvent from "./src/features/event/pages/MyEvent";
import Reports from "./src/features/report/pages/Reports/Reports";
import MyReports from "./src/features/report/pages/MyReports/MyReports";
import EditPost from "./src/features/community/pages/EditPost";
import CreateReport from "./src/features/report/pages/CreateReport/CreateReport";
import EditReport from "./src/features/report/pages/EditReport/EditReport";
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
        <Stack.Screen name="MarianResourcesHome" component={MarianResourcesHome} />
        <Stack.Screen name="MyMarianResources" component={MyMarianResources} />
        <Stack.Screen name="MarianResourcesAdd" component={MarianResourcesAdd} />
        <Stack.Screen name="MarianResourcesEdit" component={MarianResourcesEdit} />
        <Stack.Screen name="MarianResourcesViewCreator" component={MarianResourcesViewCreator} />
        <Stack.Screen name="MarianResourcesViewUser" component={MarianResourcesViewUser} />
        <Stack.Screen name="addevent" component={AddEvent} />
        <Stack.Screen name="allpost" component={AllPost} />
        <Stack.Screen name="addpost" component={AddPost} />
        <Stack.Screen name="mypost" component={MyPost} />
        <Stack.Screen name="allevent" component={AllEvent} />
        <Stack.Screen name="myevent" component={MyEvent} />
        <Stack.Screen name="editpost" component={EditPost} />
        <Stack.Screen name="editevent" component={EditEvent} />
        <Stack.Screen name="Reports" component={Reports} />
        <Stack.Screen name="MyReports" component={MyReports} />
        <Stack.Screen name="CreateReport" component={CreateReport} />
        <Stack.Screen name="EditReport" component={EditReport} />

      </Stack.Navigator>
    </NavigationContainer >

  );
}

