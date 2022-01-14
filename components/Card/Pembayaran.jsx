import React from "react";
import { Text, View } from "react-native";
import { FaMoneyBillWaveAlt } from "react-icons/fa";
import { MdQrCodeScanner } from "react-icons/md";
import Button from "../Reuseable/Button";

const Pembayaran = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "45px",
        paddingTop: "15px",
        paddingBottom: "15px",
        paddingLeft: "20px",
        paddingRight: "20px",
        background: "linear-gradient(109.84deg, #3741B5 5.59%, #568DFB 76.38%)",
        borderRadius: "22px",
        filter:
          "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
      }}
    >
      <View style={{ justifyContent: "center", alignItems: "center", background: "#F9F9F9", borderRadius: "8px", padding: "15px" }}>
        <FaMoneyBillWaveAlt size="3.5em" color="#5B45EF" style={{ transform: "rotate(-30deg)" }} />
      </View>
      <View style={{ gap: "5px" }}>
        <Text style={{ fontWeight: 500, color: "white", fontSize: "12px", fontFamily: "Poppins" }}>Lakukan Pembayaran</Text>
        <View>
          <Button
            text={
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <MdQrCodeScanner color="#5B45EF" size="2em" />
                <Text style={{ color: "#5B45EF", fontWeight: 700, fontSize: "10px", fontFamily: "Poppins" }}>Scan QR Code</Text>
              </View>
            }
            styleButton={{
              background: "white",
              borderRadius: "18px",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "5px",
              paddingBottom: "5px",
              boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)",
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Pembayaran;
