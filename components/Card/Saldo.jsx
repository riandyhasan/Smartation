import React from "react";
import { Text, View } from "react-native";
import { IoMdWallet } from "react-icons/io";
import Button from "../Reuseable/Button";

const Saldo = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "40px",
        paddingTop: "15px",
        paddingBottom: "15px",
        background: "linear-gradient(109.84deg, #3741B5 5.59%, #568DFB 76.38%)",
        borderRadius: "22px",
        filter:
          "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", background: "#F9F9F9", borderRadius: "8px", padding: "15px" }}>
        <IoMdWallet size="3.5em" color="#5B45EF" style={{ transform: "rotate(-30deg)" }} />
      </View>
      <View>
        <Text style={{ fontWeight: 500, color: "white", fontSize: "14px", fontFamily: "Poppins" }}>Saldo E-Money</Text>
        <Text style={{ fontWeight: 600, color: "white", fontSize: "20px", fontFamily: "Poppins" }}>Rp10.000.000</Text>
        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <Button
            text="Isi saldo"
            styleText={{ color: "#5B45EF", fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}
            styleButton={{
              background: "white",
              borderRadius: "15px",
              justifyContent: "center",
              alignItems: "center",
              paddingLeft: "10px",
              paddingRight: "10px",
              boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Saldo;
