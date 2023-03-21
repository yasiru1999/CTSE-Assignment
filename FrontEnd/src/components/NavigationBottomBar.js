import { Image, Pressable, StyleSheet, Text, View } from "react-native"
import { BottomNavigationDetails } from "../service/Data"

function NavigationBottomBar({ navigation }) {
    return (
        <View style={styles.container}>
            {BottomNavigationDetails.map((item, index) => {
                return (
                    <Pressable key={index} style={styles.bottomBar} onPress={() => navigation.navigate(item.screen)}>
                        <Image source={item.image} style={styles.bottomBarIcon} />
                    </Pressable>
                )
            })}
        </View>
    )
}

export default NavigationBottomBar
const styles = StyleSheet.create({
    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: -4,
        },
        shadowOpacity: 0.55,
        shadowRadius: 3.84,
        elevation: 5,
        borderTopColor: "#000",
        flex: 0.2,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: 0,
        zIndex: 2,
    },
    bottomBar: {
        flex: 1,
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: -4,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 3.84,
        // elevation: 5,
        backgroundColor: "#fafafa",
    },
    bottomBarIcon: {
        width: 30,
        height: 30,
        margin: 20,
    },

});