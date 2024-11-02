import React from "react";
import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
} from "react-native";

import { Feather } from '@expo/vector-icons'
// import { MotiView } from "moti";
// import { MotiView, MotiText } from 'moti'

const StatusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View
             style={styles.content}
            //  from={{
            //     translateY: -150,
            //     opacity: 0,
            // }}
            //  animate={{
            //     translateY: 0,
            //     opacity: 1,
            // }}
             >
                <Text style={styles.userName}>{name}</Text>
                <TouchableOpacity activeOpacity={0.5} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8000ff",
        paddingTop: StatusBarHeight,
        paddingStart: 16,
        flexDirection: "row",
        paddingEnd: 16,
        paddingBottom: 44
    },

    content: {
        flex: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
    },

    userName: {
        fontSize: 18,
        color: "#FFF",
        fontWeight: "bold",
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: "rgba(255,255,255,0.5)",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 44 / 2
    }
})