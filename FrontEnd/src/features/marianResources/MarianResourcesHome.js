import { display } from '@mui/system';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { GET } from '../../helpers/httphelper';

function TripHome({ navigation }) {
    const [trip, setMarianResources] = useState([]);

    useEffect(() => {
        //get all resources
        getAll();
    }, [])

    //get all resources
    const getAll = async () => {
        await GET("api/trip/getTripDetails").then((res) => {
            setMarianResources(res.trip);
        });
    }
    return (
        <View style={styles.container} >
            {/* Side Bar */}
            <SideBar navigation={navigation} />
            {/* Head Title */}
            <Text style={styles.title}>
                All Trips
            </Text>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    marginBottom: '20%',
                }}
            >
                <View style={styles.contentColumn}>

                    {/* MarianResourcesViewUser */}
                    {trip ? trip?.map((trip, index) => {
                        return (
                            <Pressable style={styles.viewMarianResources} key={index}
                                onPress={() => navigation.navigate("MarianResourcesViewUser", { trip: trip })}
                            >

                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                    }}
                                > {trip?.title}</Text>
                                <Image
                                    source={{ uri: trip?.image }}
                                    style={{
                                        width: '100%',
                                        height: 100,
                                        borderRadius: 10,
                                        backgroundColor: "#82C7EE",

                                    }} />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        textAlign: "justify",
                                        height: '28%',
                                    }}
                                >{trip?.details}</Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        bottom: 25,
                                        right: 10,
                                        position: 'absolute',
                                    }}
                                >
                                    {trip?.author}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        bottom: 10,
                                        right: 10,
                                        position: 'absolute',
                                    }}
                                >
                                    {(trip?.date).split('T')[0]}

                                </Text>
                            </Pressable>
                        )
                    }) : null}
                </View>
            </ScrollView >
            {/* Bottom Navigation Bar */}
            < NavigationBottomBar navigation={navigation} />
        </View >
    )
}

export default TripHome
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
    contentColumn: {
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "scroll",
        justifyContent: "space-evenly",
    },
    viewMarianResources: {
        width: 400,
        height: 250,
        margin: 5,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        
    },
    
});