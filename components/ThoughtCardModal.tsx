import React from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet, ImageBackground } from "react-native";
import Swiper from "react-native-swiper";
import MaskedView from "@react-native-masked-view/masked-view";

const ThoughtCardModal = ({ isVisible, onClose, cards }) => {
  return (
    <Modal visible={isVisible} transparent animationType="fade">
      <TouchableOpacity
        style={styles.overlay}
        activeOpacity={1}
        onPress={onClose}
      >
        <TouchableOpacity activeOpacity={1}>
          <View style={styles.modalContainer}>
            <Swiper
              style={styles.wrapper}
              showsButtons={true}
              loop={false}
              dot={<View style={styles.customDot} />}
              activeDot={<View style={styles.activeDot} />}
              paginationStyle={{ bottom: 20 }}
            >
              {cards.map((card, index) => (
                <View style={styles.contentContainer} key={index}>
                  <MaskedView
                    style={{
                      flex: 1,
                      flexDirection: "column",
                      height: "100%",
                      width: "100%",
                    }}
                    maskElement={
                      <View
                        style={{
                          flex: 1,
                          height: "100%",
                          backgroundColor: "#324376",
                        }}
                      >
                        <Text>Basic Mask</Text>
                      </View>
                    }
                  >
                    <ImageBackground
                      source={require("../assets/images/button.png")}
                    />
                  </MaskedView>
                  <Text style={styles.modalText}>{card.text}</Text>
                </View>
              ))}
            </Swiper>
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.3)",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 80,
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
  customDot: {
    // Define your custom dot style here
  },
  activeDot: {
    // Define your active dot style here
  },
});

export default ThoughtCardModal;