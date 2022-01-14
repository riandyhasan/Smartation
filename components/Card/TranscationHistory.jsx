import React from "react";
import { FaBus } from "react-icons/fa";
import { RiCarFill } from "react-icons/ri";
import { Text, View, Image } from "react-native";
import Button from "../Reuseable/Button";
import { AiFillStar } from "react-icons/ai";

const Transaksi = ({ code, type }) => {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "20px",
        paddingRight: "20px",
        background: "white",
        borderRadius: "22px",
        // filter:
        //   "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
        width: "55%",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        <Text style={{ fontWeight: 400, color: "#979797", fontSize: "10px", fontFamily: "Poppins" }}>20 Desember 2021 </Text>
        <Text style={{ fontWeight: 400, color: "#979797", fontSize: "10px", fontFamily: "Poppins" }}>09:41 </Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px" }}>
        {type === "Angkot" ? <RiCarFill size="2em" color="#5B45EF" /> : <FaBus size="2em" color="#5B45EF" />}
        <View>
          <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>{code}</Text>
          <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Taman Sari - Cisitu</Text>
        </View>
      </View>

      <Image style={{ width: "100%", height: 80, resizeMode: "contain" }} source={require("../../assets/mapexample.png")} />

      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "25px" }}>
        <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
          <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Beri rating</Text>
          <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
            <AiFillStar size="0.5em" color="#DBDBDB" />
            <AiFillStar size="0.5em" color="#DBDBDB" />
            <AiFillStar size="0.5em" color="#DBDBDB" />
            <AiFillStar size="0.5em" color="#DBDBDB" />
            <AiFillStar size="0.5em" color="#DBDBDB" />
          </View>
        </View>
        <Button
          text="Detail"
          styleText={{ color: "white", fontWeight: 500, fontSize: "8px", fontFamily: "Poppins" }}
          styleButton={{
            background: "#3741B5",
            borderRadius: "15px",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "1px",
            paddingBottom: "1px",
            boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)",
          }}
        />
      </View>
    </View>
  );
};

export default Transaksi;
