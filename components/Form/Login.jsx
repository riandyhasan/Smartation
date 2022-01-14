import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Dimensions } from "react-native";
import Button from "../Reuseable/Button";
import firebase from "../../firebase";
import { useNavigation } from "@react-navigation/core";

const Login = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Loading");
      }
    });

    return unsubscribe;
  }, []);

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        console.log("Logged in with:", user.email);
      })
      .catch((error) => alert(error.message));
  };

  const navigateToRegister = () => {
    navigation.replace("Register");
  };

  return (
    <View style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "25%", paddingBottom: "5%", background: "white", overflow: "hidden", height, width }}>
      <View style={{ justifyContent: "center", alignItems: "center", marginBottom: "40px" }}>
        <Text style={{ fontWeight: 700, fontSize: "40px", color: "#010B13", fontFamily: "Poppins" }}>Masuk</Text>
      </View>
      <View style={{ gap: "15px" }}>
        <View style={{ justifyContent: "center", gap: "10px" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#010B13", fontFamily: "Poppins" }}>Email</Text>
          <TextInput value={email} onChangeText={(text) => setEmail(text)} placeholder="Masukkan email" style={{ background: "#F0F0F0", borderRadius: "15px", padding: "10px", width: "100%", fontFamily: "Poppins" }} />
        </View>
        <View style={{ justifyContent: "center", gap: "10px" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#010B13", fontFamily: "Poppins" }}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(text) => setPassword(text)}
            placeholder="Masukkan password"
            secureTextEntry={true}
            style={{ background: "#F0F0F0", borderRadius: "15px", padding: "10px", width: "100%", fontFamily: "Poppins" }}
          />
        </View>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#3741B5", fontFamily: "Poppins" }}>Lupa password?</Text>
        </View>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: "80%" }}>
        <Text style={{ fontWeight: 500, fontSize: "14px", color: "#B0B0B0", fontFamily: "Poppins" }}>
          Belum memiliki akun?{" "}
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#5B45EF", fontFamily: "Poppins" }} onPress={navigateToRegister}>
            Daftar sekarang!
          </Text>
        </Text>
      </View>
      <View style={{ justifyContent: "center", marginTop: "15px" }}>
        <Button
          text="Masuk"
          click={handleLogin}
          styleText={{ color: "white", fontWeight: 600, fontSize: "18px", fontFamily: "Poppins" }}
          styleButton={{ background: "linear-gradient(146.02deg, #5B47F0 6.13%, #5785FA 93%)", borderRadius: "15px", justifyContent: "center", alignItems: "center", padding: "10px", filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15))" }}
        />
      </View>
    </View>
  );
};

export default Login;
