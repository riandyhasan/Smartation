import React from "react";
import { View, Text } from "react-native";
import Button from "../components/Reuseable/Button";
import { BiLogOut } from "react-icons/bi";
import firebase from "../firebase";
import { useNavigation } from "@react-navigation/core";

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleSignOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        navigation.replace("Login");
      })
      .catch((error) => alert(error.message));
  };
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        text={
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20%",
            }}
          >
            <BiLogOut color="white" size="4em" />
            <Text style={{ color: "white", fontWeight: 700, fontSize: "24px", fontFamily: "Poppins" }}>Keluar</Text>
          </View>
        }
        click={handleSignOut}
        styleText={{ color: "white", fontWeight: 600, fontSize: "18px", fontFamily: "Poppins" }}
        styleButton={{
          background: "#FB5656",
          borderRadius: "15px",
          justifyContent: "center",
          alignItems: "center",
          paddingLeft: "10px",
          paddingRight: "10px",
          paddingTop: "5px",
          paddingBottom: "5px",
          filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15))",
          width: "80%",
        }}
      />
    </View>
  );
};

export default ProfileScreen;
