import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert,
} from "react-native"
import { useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import NavigationBottomBar from "../../components/NavigationBottomBar";
import { PUT } from "../../helpers/httphelper";

function TripEdit({ navigation, route }) {
    const { trip } = route.params;
    console.log(trip);

    const [image, setImage] = useState(trip.image);
    const [name, setName] = useState(trip.name);
    const [destination, setDetails] = useState(trip.destination);
    const [status, setCategory] = useState("");
    const [dates, setLifeSpan] = useState(trip.dates);
    const [activities, setAuthor] = useState(trip.activities);
    const [budget, setHabit] = useState(trip.budget);
    const [selected, setSelected] = useState(trip.status);
    const [uid, setuid] = useState('');

    const data = [
        { key: '1', value: 'Planned' },
        { key: '2', value: 'In Progress' },
        { key: '3', value: 'Completed' },
    ]
    const updateSubmit = (id) => {
        if (name === '') {
            alert("Please Select an Name")
            return
        }
        if (destination === '') {
            alert("Please Select an Details")
            return
        }
        if (budget === '') {
            alert("Please Enter the Habitat")
            return
        }
        const newResource = {
            title: name,
            image:image,
            name,
            destination:destination,
            status: selected,
            activities:activities,
            budget:budget,
            dates:dates,
        };
        console.log(newResource);
        PUT(`api/trip/updateTrip/${id}`, newResource).then((res) => {
            Alert.alert("Details Updated Succuss", res.message);
            console.log(res);
            navigation.navigate("MyMarianResources");
        });
    };


    const deletePost = (id) => {
        DELETE(`api/trip/deleteTrip/${id}`).then(data => {
            console.log(data)
            Alert.alert("Deleted Successfully")
            navigation.navigate("MyMarianResources")
        }).catch(err => {
            console.log(err)
        })
    }
    const clickUpdate = (id) => {
        console.log(id)
        Alert.alert(
            "Update",
            "Sure You want to Update",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => updateSubmit(id) }
            ]
        );
    }
    return (
        <View style={styles.container} >
            {/* back button */}
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image
                    style={{
                        marginTop: 5,
                        width: 25,
                        height: 40,
                    }}
                    source={require("../../../assets/back.png")} />
            </Pressable>

            <Text style={styles.title}>
                Update Resources
            </Text>
            {/* Content Here */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    paddingRight: 15,
                    paddingLeft: 15,
                    // height: "100%",
                    bottom: '15%',
                    top: '0%',
                }}
            >
                <Image style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 10,
                }} source={(require("../../../assets/c1.jpg"))} />
                <Text>Image</Text>

                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={image}
                    placeholder="Enter image Url"
                    onChangeText={(image) => setImage(image)}
                />
                <Text>Trip Title</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={name}
                    placeholder="Enter name"
                    onChangeText={(name) => setName(name)}
                />
                <Text>Destination</Text>
                <TextInput
                    style={{
                        height: 80,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={destination}
                    placeholder="Enter destination"
                    
                    onChangeText={(destination) => setDetails(destination)}
                />
                <Text>Status</Text>
                {/* Select  */}
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    // onChangeText={(status) => setCategory(status)}
                    // defaultOption={selected}
                    save="value"
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                />

                <Text>Travel dates</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={dates}
                    placeholder="Enter life span"
                    onChangeText={(dates) => setLifeSpan(dates)}
                />
                <Text>Activities</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={activities}
                    placeholder="Enter activities"
                    onChangeText={(activities) => setAuthor(activities)}
                />
                <Text>Budget</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={budget}
                    placeholder="Enter budgetat"
                    onChangeText={(budget) => setHabit(budget)}
                />
                <Pressable style={styles.button} onPress={() => clickUpdate(trip._id)}>
                    <Text style={styles.buttonText}>Save Changes</Text>
                </Pressable>
            </ScrollView>
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
    )
}

export default TripEdit
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        margin: 30,
        justifyContent: "flex-start"
    },
    backButton: {
        marginTop: 30,
        marginLeft: 15,
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#d7ffc4",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#48A41D",
        padding: 10,
        borderRadius: 15,
        width:200,
        marginLeft:'30%',
        margin: 10,
        marginBottom: '20%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },

});