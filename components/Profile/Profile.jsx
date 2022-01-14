import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { TiUser, TiStarFullOutline } from "react-icons/ti";
import { BsSuitDiamondFill } from "react-icons/bs";
import ProgressBar from "../Reuseable/ProgressBar";
import firebase from "../../firebase";

const Profile = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setName(user.displayName);
      }
    });
  }, []);
  return (
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "20px", width: "100%" }}>
      <View style={{ justifyContent: "center", alignItems: "center", background: "linear-gradient(180deg, #568DFB 0%, #5B45EF 100%)", borderRadius: "50%", padding: "10px" }}>
        <TiUser color="white" size="3.5em" />
      </View>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
          <Text style={{ fontWeight: 700, fontSize: "24px", color: "#010B13", fontFamily: "Poppins" }}>{name}</Text>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TiStarFullOutline color="#5B45EF" size="2em" />
            <Text style={{ position: "absolute", fontWeight: 600, fontSize: "12px", color: "white", fontFamily: "Poppins" }}>2</Text>
          </View>
        </View>
        <ProgressBar percentage="60%" height="10px" backgroundColor="#E5E5E5" completedColor="#5B45EF" />
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: 500, color: "#5B45EF", fontSize: "12px", fontFamily: "Poppins" }}>2555/5000</Text>
            <BsSuitDiamondFill color="#5B45EF" size="1em" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Profile;
