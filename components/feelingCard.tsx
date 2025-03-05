import React from "react";
import { View, Text, StyleSheet, Pressable, ImageBackground } from "react-native";

const FeelingCard = ({ id, text, onPress, isSelected }) => {
    return (
        <Pressable onPress={() => onPress(id)}>
            {isSelected ? (
                <View style={styles.card}>
                    <ImageBackground
                        source={require('../assets/images/button.png')}
                        style={styles.buttonBackground}
                        resizeMode="cover"
                    ></ImageBackground>
                    <Text style={[styles.selectedText, { color: "white" }]}>{text}</Text>
                </View>
            ) : (
                <View style={styles.card}>
                    <Text style={styles.text}>{text}</Text>
                </View>
            )}
        </Pressable>
    );
};
const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        padding: 20,
        borderRadius: 20,
        marginBottom: 20,
        marginLeft: 10,
        marginRight: 10,
        height: 67,
        // width: 330,
        borderColor: "rgba(0, 0, 0, 0.05)",
        borderWidth: 1,
        overflow: "hidden",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,

    },
    buttonBackground: {
        width: 350,
        height: 67,
        flex: 1,
        left: -25,
        resizeMode: "cover",
        justifyContent: "center",
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        // lineHeight: 30,
        color: "#494949",
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
    },
    selectedText: {
        fontSize: 16,
        fontWeight: "600",
        // lineHeight: 30,
        left: -75,
        flex: 1,
        textAlign: "center",
        justifyContent: "center",
    },
});

export default FeelingCard;
