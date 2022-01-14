import React from "react";
import { FaBus, FaMapPin } from "react-icons/fa";
import { RiCarFill } from "react-icons/ri";
import { MdNavigateNext } from "react-icons/md";
import { Text, View } from "react-native";
import Button from "../Reuseable/Button";

const Halte = ({ type }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "45px",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: "10px",
          paddingRight: "10px",
          background: "transparent",
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <FaMapPin size="2.5em" color="#5B45EF" />

          <View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "15px" }}>
              <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>Taman Sari</Text>
              <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>600m</Text>
            </View>
            <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "5px" }}>
              {type === "bus" ? <FaBus size="1em" color="#5B45EF" /> : <RiCarFill size="1em" color="#5B45EF" />}
              <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Taman Sari - Cisitu</Text>
            </View>
          </View>
        </View>

        <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
          <MdNavigateNext size="2em" color="#5B45EF" />
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

export default Halte;
