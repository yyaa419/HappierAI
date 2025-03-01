import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For heart icon

const ThoughtCard = ({ text }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.text}>{text}</Text>
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color="gray" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        padding: 20,
        borderRadius: 15,
        marginBottom: 15,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
    },
    text: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
        flex: 1,
    },
});

export default ThoughtCard;
