import React from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import ThoughtCard from "@/components/ThoughtCard";
import { Ionicons } from "@expo/vector-icons";

const thoughts = [
    { id: "1", text: "If I delegate, it means I am losing control of my business." },
    { id: "2", text: "If I delegate, it means I am losing control of my business." },
    { id: "3", text: "I don’t deserve happiness because of my past mistakes." },
];

const IrrationalThoughts = ({ navigation }) => {
    return (
        <ImageBackground source={require('@/assets/images/BG.png')} style={styles.background}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back-outline" size={24} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Irrational Thoughts</Text>
                    <TouchableOpacity onPress={() => {}}>
                        <Ionicons name="refresh-outline" size={24} color="black" />
                    </TouchableOpacity>
                </View>

                {/* List of Thoughts */}
                <FlatList
                    data={thoughts}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ThoughtCard text={item.text} />}
                    contentContainerStyle={styles.listContainer}
                />

                {/* Bottom Buttons */}
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.finishButton}>
                        <Text style={styles.finishText}>Finish</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.changeButton}>
                        <Text style={styles.changeText}>Change</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        resizeMode: "cover",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 50,
        backgroundColor: "rgba(255, 255, 255, 0.85)", // Semi-transparent overlay for better readability
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "capitalize",
    },
    listContainer: {
        paddingBottom: 20,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
    },
    finishButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: "#E0E0F0",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    changeButton: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: "#5F84E9",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
    },
    finishText: {
        color: "#B0B0C0",
        fontSize: 16,
        fontWeight: "bold",
    },
    changeText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default IrrationalThoughts;
