import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For heart icon

const ThoughtCard = ({ text }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color="gray" top={50}/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 20,
        borderRadius: 20,
        marginBottom: 30,
        marginLeft: 10,
        marginRight: 10,
        height: 156,
        // width: 330,
        borderColor: "rgba(211, 193, 193, 0.4)",
        borderWidth: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    text: {
        left: 20,
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 30,
        color: "#494949",
        flex: 1,
    },
});

export default ThoughtCard;
