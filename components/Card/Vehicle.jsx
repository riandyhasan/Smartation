import React from "react";
import { FaBus } from "react-icons/fa";
import { RiCarFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { Text, View } from "react-native";
import Button from "../Reuseable/Button";

const Vehicle = ({ type }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "15px",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: "10px",
          paddingRight: "10px",
          background: "transparent",
        }}
      >
        {type === "bus" ? <FaBus size="2.5em" color="#5B45EF" /> : <RiCarFill size="2.5em" color="#5B45EF" />}

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "45px" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>{type === "bus" ? "Bus B20" : "Angkot B20"}</Text>
            <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Taman Sari - Cisitu</Text>
          </View>

          <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
            <MdNavigateNext size="2em" color="#5B45EF" />
          </View>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "#E5E5E5",
          borderBottomWidth: 1,
        }}
      />
    </View>
  );
};

export default Vehicle;
