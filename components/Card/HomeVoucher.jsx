import React from "react";
import { Text, View } from "react-native";
import { MdLocalOffer } from "react-icons/md";
import Button from "../Reuseable/Button";

const Pembayaran = () => {
  return (
    <View>
      <Text style={{ fontWeight: 700, fontSize: "16px", fontFamily: "Poppins", marginLeft: "5px", marginBottom: "10px" }}>Lebih hemat dengan paket!</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "25px",
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
        <MdLocalOffer size="3.5em" color="#5B45EF" />

        <View style={{ gap: "5px", maxWidth: "70%" }}>
          <Text style={{ fontWeight: 500, fontSize: "12px", fontFamily: "Poppins" }}>Beli paket voucher perjalanan dan nikmati 10x perjalanan hanya dengan sekali bayar!</Text>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
            <Button
              text="Dapatkan"
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
  );
};

export default Pembayaran;
