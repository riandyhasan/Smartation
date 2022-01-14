import React from "react";
import { FaBus } from "react-icons/fa";
import { RiCarFill } from "react-icons/ri";
import { Text, View } from "react-native";
import Button from "../Reuseable/Button";

const Transaksi = () => {
  return (
    <View>
      <Text style={{ fontWeight: 700, fontSize: "16px", fontFamily: "Poppins", marginLeft: "5px", marginBottom: "10px" }}>Transaksi Terkini</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: "20px",
          paddingRight: "20px",
          background: "white",
          borderRadius: "22px",
          filter:
            "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
        }}
      >
        <RiCarFill size="3.5em" color="#5B45EF" />

        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "20px" }}>
          <View>
            <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>Angkot B30</Text>
            <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Taman Sari - Cisitu</Text>
            <Text style={{ fontWeight: 400, fontSize: "10px", fontFamily: "Poppins" }}>Perkiraan waktu tiba 09.50</Text>
          </View>

          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <View style={{ justifyContent: "flex-end", alignItems: "flex-end", gap: "15px" }}>
              <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>11/01/2021, 09:41</Text>
              <Button
                text="Detail"
                styleText={{ color: "white", fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}
                styleButton={{
                  background: "#3741B5",
                  borderRadius: "15px",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  paddingTop: "3px",
                  paddingBottom: "3px",
                  boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)",
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Transaksi;
