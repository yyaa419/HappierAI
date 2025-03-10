import React, {useState} from "react";
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
import FeelingCard from "@/components/feelingCard";

const feelings = [
    { id: "1", text: "angry" },
    { id: "2", text: "sad" },
    { id: "3", text: "shame" },
    { id: "4", text: "tired" },
    { id: "5", text: "anxious" },
];

const Feeling = ({ navigation }) => {
    const [selectedIds, setSelectedIds] = useState([]);
    const toggleSelection = (id) => {
        setSelectedIds((prevSelected) =>
            prevSelected.includes(id)
                ? prevSelected.filter((selectedId) => selectedId !== id)
                : [...prevSelected, id]
        );
    };
    return (
        <>
            <ImageBackground source={require('../../assets/images/BG.png')} style={styles.background}>
                <Stack.Screen
                    options={{
                        headerShown: false,
                    }}
                />
                <SafeAreaView style={styles.headerContainer}>
                    <View style={styles.header}>
                        {/* Back Button */}
                        <Pressable onPress={() => router.back()} style={{ marginLeft: 16 }}>
                            <Ionicons name="arrow-back" size={24} color="#4B5563"/>
                        </Pressable>
                    </View>
                </SafeAreaView>
                <ThemedView style={styles.container}>
                    <ThemedView style={styles.titleContainer}>
                        <ThemedText style={styles.title}>How are you feeling now ?</ThemedText>
                        <ThemedText style={styles.subtitle}>Choose the emotions that describe your current state.</ThemedText>
                    </ThemedView>
                    {/* List of Thoughts */}
                    <FlatList
                        data={feelings}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <FeelingCard
                                id={item.id}
                                text={item.text}
                                onPress={toggleSelection}
                                isSelected={selectedIds.includes(item.id)}
                            />
                        )}
                        contentContainerStyle={styles.listContainer}
                    />
                    {/* Bottom Buttons */}
                    <ThemedView style={styles.buttonContainer}>
                        <Pressable onPress={() => router.push('/irretionalThoughts')} style={styles.iconButton}>
                            <Ionicons name="arrow-forward" size={28} color="#4B5563"/>
                        </Pressable>
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
        marginLeft: 10,
        marginRight: 10,
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
    titleContainer: {
        paddingBottom: 20,
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        // textTransform: "capitalize",
        color: "#494949",
        marginLeft: 20,
    },
    subtitle: {
        fontSize: 14,
        fontWeight: "normal",
        // textTransform: "capitalize",
        color: "#646366",
        marginLeft: 20,
        marginTop: 10,
    },
    listContainer: {
        paddingTop: 20,
        paddingBottom: 50,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingVertical: 20,
        backgroundColor: "transparent",
        paddingBottom: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    iconButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Feeling;
