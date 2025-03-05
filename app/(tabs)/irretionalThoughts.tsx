import React from "react";
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    ImageBackground,
    Pressable,
    SafeAreaView,
} from "react-native";
import ThoughtCard from "@/components/ThoughtCard";
import { Ionicons } from "@expo/vector-icons";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {router, Stack} from "expo-router";

const thoughts = [
    { id: "1", text: "If I delegate, it means I am losing control of my business." },
    { id: "2", text: "If I delegate, it means I am losing control of my business." },
    { id: "3", text: "I don’t deserve happiness because of my past mistakes." },
];

const IrrationalThoughts = ({ navigation }) => {
    return (
        <>
            <ImageBackground source={require('../../assets/images/BG.png')} style={styles.background}>
                <Stack.Screen
                    options={{
                        header: () => (
                            <SafeAreaView style={styles.headerContainer}>
                                <View style={styles.header}>
                                    {/* Back Button */}
                                    <Pressable onPress={() => router.back()} style={{ marginLeft: 16 }}>
                                        <Ionicons name="arrow-back" size={24} color="#4B5563"/>
                                    </Pressable>
                                    <Text style={styles.title}>irrational thoughts</Text>
                                    <Pressable onPress={() => router.push('/history')} style={styles.iconButton}>
                                        <Ionicons name="time-outline" size={24} color="#4B5563" />
                                    </Pressable>
                                </View>
                            </SafeAreaView>
                        ),
                    }}
                />
                <ThemedView style={styles.container}>
                    {/* List of Thoughts */}
                    <FlatList
                        data={thoughts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <ThoughtCard text={item.text} />}
                        contentContainerStyle={styles.listContainer}
                    />
                    {/* Bottom Buttons */}
                    <ThemedView style={styles.buttonContainer}>
                        <Pressable onPress={() => router.push('/feelingBetter')} style={styles.finishButton}>
                            <ThemedText style={styles.finishText}>Finish</ThemedText>
                        </Pressable>
                        <View style={styles.buttonWrapper}>
                            <ImageBackground source={require('../../assets/images/button.png')} style={styles.buttonBackground}>
                            </ImageBackground>
                            <Pressable style={styles.changeButton}>
                                <Text style={styles.changeText}>Change</Text>
                            </Pressable>
                        </View>
                    </ThemedView>
                </ThemedView>
            </ImageBackground>
        </>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        backgroundColor: "#E9EFFF",
        paddingTop: 30,
    },
    iconButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    background: {
        // top: -80,
        flex: 1,
        resizeMode: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 20,
        backgroundColor: "transparent",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 15,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        // textTransform: "capitalize",
        color: "#494949",
        marginLeft: 20,
    },
    listContainer: {
        paddingTop: 20,
        paddingBottom: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        backgroundColor: "transparent",
        paddingBottom: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    finishButton: {
        flex: 1,
        marginRight: 10,
        backgroundColor: "transparent",
        padding: 15,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: "#D2A5FA",
        alignItems: "center",
    },
    buttonWrapper: {
        borderRadius: 20,
        marginLeft: 10,
        padding: 15,
        width: 206,
        overflow: "hidden",
        backgroundColor: "white",
    },
    changeButton: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
    },
    buttonBackground: {
        width: 210,
        height: 80,
        left: -15,
        top: -15,
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    finishText: {
        fontFamily: "inter",
        color: "#D2A5FA",
        fontSize: 18,
        fontWeight: "normal",
    },
    changeText: {
        fontFamily: "inter",
        color: "white",
        fontSize: 18,
        height: 25,
        fontWeight: "normal",
        top: -10,
    },
});

export default IrrationalThoughts;
