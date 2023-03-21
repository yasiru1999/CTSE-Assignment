import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { HomeDetails } from "../../service/Data";
// import { StatusBar } from "expo-status-bar";
function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Here We Go ..
            </Text>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                {HomeDetails.map((item, index) => (
                    <Pressable
                        key={index}
                        onPress={() => navigation.navigate(item.screen)}
                    >

                        <View style={{ backgroundColor: `${item.color}` ,borderColor:'#48A41D',borderBottomWidth:2,borderTopWidth:2,borderRightWidth:2,borderLeftWidth:2,borderRadius: 15, marginTop:40,margin: 10 }}>
                            <View style={styles.button}>

                                <Image source={item.image} style={styles.image} />
                                <Text style={styles.buttonText} >
                                    {item.title}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </ScrollView>
        </View >
    );
}

export default Home;
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
        marginTop: 60,
        marginBottom: 10,
        justifyContent: "flex-start"
    },

    image: {
        width: 100,
        height: 100,
    },
    button: {
        alignItems: "center",
        padding: 15,
        margin: 10,
        flexDirection: "row",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
        color: "#48A41D",
    },
});