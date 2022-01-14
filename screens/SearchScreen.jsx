import React, { useState } from "react";
import { View, Text, TextInput, Dimensions, Picker } from "react-native";
import { GoSearch } from "react-icons/go";
import Halte from "../components/Card/Halte";
import Vehicle from "../components/Card/Vehicle";

const VehicleScreen = () => {
  const { height, width } = Dimensions.get("window");
  const [selectedValue, setSelectedValue] = useState("kendaraan");
  const [type, setType] = useState("angkot");

  return (
    <View style={{ paddingTop: "20px", paddingBottom: "10px", overflowY: "scroll", width, height }}>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px", paddingRight: 20, paddingLeft: 20 }}>
        <View style={{ flex: 1, flexDirection: "row", justifyContent: "center", alignItems: "center", background: "transparent", borderRadius: "13px", gap: "5px" }}>
          <GoSearch size="1em" color="#B2B0B0" style={{ padding: "10px", position: "absolute", left: 0 }} />
          <TextInput
            style={{ fontSize: 12, flex: 1, paddingTop: 10, paddingRight: 10, paddingBottom: 10, paddingLeft: 45, background: "#E5E5E5", borderRadius: "13px", color: "#424242", fontFamily: "Poppins" }}
            placeholder="Cari kendraan terdekat"
          />
          <Picker
            selectedValue={selectedValue}
            style={{ fontSize: 12, paddingLeft: 3, paddingRight: 3, height: 40, background: "linear-gradient(180deg, #3741B5 0%, #568DFB 100%)", borderRadius: "23px", color: "white", fontFamily: "Poppins" }}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
          >
            <Picker.Item style={{ color: "black", fontSize: 12, fontFamily: "Poppins" }} label="Kendaraan" value="kendaraan" />
            <Picker.Item style={{ color: "black", fontSize: 12, fontFamily: "Poppins" }} label="Halte" value="halte" />
          </Picker>
        </View>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "80px", padding: "10px" }}>
        <View style={type === "angkot" ? { borderBottom: "2px solid #3741B5" } : {}}>
          <Text onPress={() => setType("angkot")} style={type === "angkot" ? { fontWeight: 500, fontSize: "12px", color: "#3741B5", fontFamily: "Poppins" } : { fontWeight: 500, fontSize: "12px", color: "#010B13", fontFamily: "Poppins" }}>
            Angkot
          </Text>
        </View>
        <View style={type === "bus" ? { borderBottom: "2px solid #3741B5" } : {}}>
          <Text onPress={() => setType("bus")} style={type === "bus" ? { fontWeight: 500, fontSize: "12px", color: "#3741B5", fontFamily: "Poppins" } : { fontWeight: 500, fontSize: "12px", color: "#010B13", fontFamily: "Poppins" }}>
            Bus
          </Text>
        </View>
      </View>
      {selectedValue === "kendaraan" ? (
        <>
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
          <Vehicle type={type} />
        </>
      ) : (
        <>
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
          <Halte type={type} />
        </>
      )}
    </View>
  );
};

export default VehicleScreen;
