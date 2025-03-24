import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Modal,
  Image,
} from "react-native";
import ThoughtCard from "@/components/ThoughtCard";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { router, Stack } from "expo-router";

import Swiper from "react-native-swiper";
import MaskedView from "@react-native-masked-view/masked-view";

const thoughts = [
    {
        id: "1",
        title: "Past Success",
        positiveText: "Reflect on times in the past when you have successfully managed tasks and responsibilities despite challenges. This demonstrates your competence and ability to adapt to different situations. It's important to remember that struggling with tasks occasionally does not define your overall competence.",
        negativeText: "I often struggle with tasks and responsibilities, which makes me feel incompetent and unable to adapt to different situations.",
      },
      {
        id: "2",
        title: "Delegation",
        positiveText: "Delegating tasks can empower my team and allow me to focus on strategic decisions, enhancing overall business control.",
        negativeText: "If I delegate, it means I am losing control of my business.",
      },
      {
        id: "3",
        title: "Past Mistakes",
        positiveText: "Everyone makes mistakes, and learning from them is a part of growth. I deserve happiness and can move forward positively.",
        negativeText: "I don't deserve happiness because of my past mistakes.",
      },
];

const cards = [
  {
    id: "1",
    title: "Past Success",
    text: "Reflect on times in the past when you have successfully managed tasks and responsibilities despite challenges. This demonstrates your competence and ability to adapt to different situations. It's important to remember that struggling with tasks occasionally does not define your overall competence.",
  },
  {
    id: "2",
    title: "Delegation",
    text: "If I delegate, it means I am losing control of my business.",
  },
  {
    id: "3",
    title: "Past Mistakes",
    text: "I don't deserve happiness because of my past mistakes.",
  },
];

const IrrationalThoughts = ({ navigation }) => {
  const [isCardModalVisible, setIsCardModalVisible] = useState(false);

  const handleCardClick = (item) => {
    setIsCardModalVisible(true);
  };

  return (
    <>
      <ImageBackground
        source={require("../../assets/images/BG.png")}
        style={styles.background}
      >
        <Stack.Screen
          options={{
            header: () => (
              <SafeAreaView style={styles.headerContainer}>
                <View style={styles.header}>
                  {/* Back Button */}
                  <Pressable
                    onPress={() => router.back()}
                    style={{ marginLeft: 16 }}
                  >
                    <Ionicons name="arrow-back" size={24} color="#4B5563" />
                  </Pressable>
                  <Text style={styles.title}>irrational thoughts</Text>
                  <Pressable
                    onPress={() => router.push("/irrationalThoughtsHistory")}
                    style={styles.iconButton}
                  >
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
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleCardClick(item)}>
                <ThoughtCard positiveText={item.positiveText} negativeText={item.negativeText} />
              </TouchableOpacity>
            )}
            contentContainerStyle={styles.listContainer}
          />

          {/* Bottom Buttons */}
          <ThemedView style={styles.buttonContainer}>
            <Pressable
              onPress={() => router.push("/feelingBetter")}
              style={styles.finishButton}
            >
              <ThemedText style={styles.finishText}>Finish</ThemedText>
            </Pressable>
            
            <View style={styles.buttonWrapper}>
              <ImageBackground
                source={require("../../assets/images/button.png")}
                style={styles.buttonBackground}
              ></ImageBackground>
              <Pressable style={styles.changeButton}>
                <Text style={styles.changeText}>Change</Text>
              </Pressable>
            </View>
            
          </ThemedView>
        </ThemedView>

        {/* Card Modal */}
        <Modal visible={isCardModalVisible} transparent animationType="fade">
          <TouchableOpacity
            style={styles.overlay}
            activeOpacity={1}
            onPress={() => setIsCardModalVisible(false)}
          >
            <TouchableOpacity activeOpacity={1}>
              <View style={styles.modalContainer}>
                <Swiper
                  style={styles.wrapper}
                  showsButtons={true}
                  loop={false}
                  dot={<View style={styles.customDot} />}
                  activeDot={
                    <ImageBackground
                      source={require("../../assets/images/button.png")}
                      style={styles.activeDotImage}
                    />
                  }
                  paginationStyle={{ bottom: 20 }}
                  nextButton={
                    <MaskedView
                      style={styles.swiperButtonBackground}
                      maskElement={
                        <View
                          style={{
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40,
                            height: 40,
                          }}
                        >
                          <Text style={styles.swiperButtonText}>›</Text>
                        </View>
                      }
                    >
                      <Image
                        source={require("../../assets/images/button.png")}
                        style={styles.swiperButtonBackground}
                      />
                    </MaskedView>
                  }
                  prevButton={
                    <MaskedView
                      style={styles.swiperButtonBackground}
                      maskElement={
                        <View
                          style={{
                            backgroundColor: 'transparent',
                            justifyContent: 'center',
                            alignItems: 'center',
                            width: 40,
                            height: 40,
                          }}
                        >
                          <Text style={styles.swiperButtonText}>‹</Text>
                        </View>
                      }
                    >
                      <Image
                        source={require("../../assets/images/button.png")}
                        style={styles.swiperButtonBackground}
                      />
                    </MaskedView>
                  }
                >
                  {cards.map((card, index) => (
                    <View style={styles.contentContainer} key={index}>
                      <View style={{ height: "30%", width: "100%" }}>
                      <MaskedView
                        style={{ flex: 1, flexDirection: "row", height: "100%" }}
                        maskElement={
                          <View
                            style={{
                              backgroundColor: "transparent",
                              alignItems: "flex-start",
                              justifyContent: "center",
                            }}
                          >
                            <Text style={{fontSize: 18, fontWeight: "bold"}}>{card.title}</Text>
                          </View>
                        }
                      >
                        <ImageBackground
                          source={require("../../assets/images/button.png")}
                          style={{ flex: 1 , width: "50%"}}
                        />
                      </MaskedView>
                      </View>
                      <Text style={styles.modalText}>{card.text}</Text>
                    </View>
                  ))}
                </Swiper>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
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
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  background: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "center",
    backgroundColor: "#E9EFFF",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    backgroundColor: "#E9EFFF",
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
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
  },
  wrapper: {},
  customDot: {
    backgroundColor: "#ccc",
    width: 20,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
  },
  activeDotImage: {
    width: 20,
    height: 6,
    borderRadius: 4,
    marginHorizontal: 3,
    overflow: "hidden",
  },
  modalContainer: {
    width: "90%",
    height: "70%",
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingVertical: 30,
  },
  contentContainer: {
    paddingVertical: 20,
    paddingHorizontal: 50,
  },
  modalText: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
    textAlign: "left",
  },
  swiperButtonBackground: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  swiperButtonText: {
    fontSize: 40,
    fontWeight: "bold",
    color: 'black',
  },
});

export default IrrationalThoughts;
