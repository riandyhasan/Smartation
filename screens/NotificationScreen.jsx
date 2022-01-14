import React from "react";
import { View, Text, Dimensions } from "react-native";
import Notification from "../components/Card/Notification";

const NotificationScreen = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View style={{ paddingTop: "20px", paddingBottom: "10px", overflowY: "scroll", width, height }}>
      <View style={{ justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <Text style={{ fontWeight: 700, fontSize: "30px", color: "#010B13", fontFamily: "Poppins" }}>Notifikasi</Text>
      </View>
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
      <Notification />
    </View>
  );
};

export default NotificationScreen;
