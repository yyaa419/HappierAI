import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For heart icon

const ThoughtCard = ({ positiveText, negativeText }) => {
    const [isPositive, setIsPositive] = useState(false);

    const toggleSwitch = () => setIsPositive(previousState => !previousState);

    return (
        <ImageBackground
            source={isPositive ? require('../assets/images/button.png') : require('../assets/images/BG.png')}
            style={styles.card}
        >
            <Text style={[styles.text, { color: isPositive ? 'white' : '#494949' }]}>{isPositive ? positiveText : negativeText}</Text>
            <Switch
                trackColor={{ false: "#C2DEFF", true: "#C2DEFF" }}
                thumbColor={isPositive ? "#ffffff" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isPositive}
                style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }], marginRight: -30, marginBottom: 100 }}
            />
            <TouchableOpacity>
                <Ionicons name="heart-outline" size={20} color={isPositive ? 'white' : 'gray'}  top={50}/>
            </TouchableOpacity>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        padding: 15,
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
        overflow: "hidden",
    },
    text: {
        left: 10,
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 30,
        color: "#494949",
        flex: 1,
    },
});

export default ThoughtCard;
