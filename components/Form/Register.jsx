import React, { useState, useEffect } from "react";
import { Text, TextInput, View, Dimensions } from "react-native";
import Button from "../Reuseable/Button";
import firebase from "../../firebase";
import { useNavigation } from "@react-navigation/core";

const Register = () => {
  const { height, width } = Dimensions.get("window");
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [nama, setNama] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState("");

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       navigation.replace("Home");
  //     }
  //   });

  //   return unsubscribe;
  // }, []);

  const handleSignUp = () => {
    if (password === validate) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const profile = {
            phone: phone,
            email: email,
            name: nama,
          };
          registerUser(profile);
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Password anda tidak sama!");
    }
  };

  function registerUser(profile) {
    firebase.auth().onAuthStateChanged((user) => {
      user
        .updateProfile({
          displayName: nama,
        })
        .then(() => {
          alert("Berhasil register!");
          navigation.replace("Login");
          //   firebaseFirestore
          //     .collection("profiles")
          //     .doc(user.uid)
          //     .set(profile)
          //     .then(() => {
          //       alert("masuk fungsi");

          //       setUser({
          //         data: user,
          //         displayName: nama,
          //         userID: user.uid,
          //         profile,
          //         loading: false,
          //       });

          //       alert("Berhasil register!");
          //     });
        });
    });
  }
  return (
    <View style={{ paddingLeft: "10%", paddingRight: "10%", paddingTop: "25%", background: "white", overflow: "hidden", height, width }}>
      <View style={{ justifyContent: "center", alignItems: "center", marginBottom: "20px" }}>
        <Text style={{ fontWeight: 700, fontSize: "40px", color: "#010B13", fontFamily: "Poppins" }}>Daftar</Text>
      </View>
      <View style={{ gap: "15px" }}>
        <View style={{ justifyContent: "center", gap: "10px" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#010B13", fontFamily: "Poppins" }}>Nama</Text>
          <TextInput value={nama} onChangeText={(text) => setNama(text)} placeholder="Masukkan name" style={{ background: "#F0F0F0", borderRadius: "15px", padding: "10px", width: "100%", fontFamily: "Poppins" }} />
        </View>
        <View style={{ justifyContent: "center", gap: "10px" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#010B13", fontFamily: "Poppins" }}>Nomor Telepon</Text>
          <TextInput value={phone} onChangeText={(text) => setPhone(text)} placeholder="Masukkan nomor telepon" style={{ background: "#F0F0F0", borderRadius: "15px", padding: "10px", width: "100%", fontFamily: "Poppins" }} />
        </View>
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
        <View style={{ justifyContent: "center", gap: "10px" }}>
          <Text style={{ fontWeight: 500, fontSize: "14px", color: "#010B13", fontFamily: "Poppins" }}>Ulangi Password</Text>
          <TextInput
            value={validate}
            onChangeText={(text) => setValidate(text)}
            placeholder="Masukkan kembali password"
            secureTextEntry={true}
            style={{ background: "#F0F0F0", borderRadius: "15px", padding: "10px", width: "100%", fontFamily: "Poppins" }}
          />
        </View>
      </View>
      <View style={{ justifyContent: "center", marginTop: "40px" }}>
        <Button
          text="Daftar"
          click={handleSignUp}
          styleText={{ color: "white", fontWeight: 600, fontSize: "18px", fontFamily: "Poppins" }}
          styleButton={{ background: "linear-gradient(146.02deg, #5B47F0 6.13%, #5785FA 93%)", borderRadius: "15px", justifyContent: "center", alignItems: "center", padding: "10px", filter: "drop-shadow(0px 4px 7px rgba(0, 0, 0, 0.15))" }}
        />
      </View>
    </View>
  );
};

export default Register;
