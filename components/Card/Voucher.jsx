import React from "react";
import { MdLocalOffer } from "react-icons/md";
import { Text, View } from "react-native";
import Button from "../Reuseable/Button";

const Voucher = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "5px",
        paddingTop: "2px",
        paddingBottom: "2px",
        paddingLeft: "5px",
        paddingRight: "5px",
        background: "white",
        borderRadius: "10px",
        filter:
          "drop-shadow(0px 100px 80px rgba(0, 0, 0, 0.07)) drop-shadow(0px 41.7776px 33.4221px rgba(0, 0, 0, 0.0503198)) drop-shadow(0px 22.3363px 17.869px rgba(0, 0, 0, 0.0417275)) drop-shadow(0px 12.5216px 10.0172px rgba(0, 0, 0, 0.035)) drop-shadow(0px 6.6501px 5.32008px rgba(0, 0, 0, 0.0282725)) drop-shadow(0px 2.76726px 2.21381px rgba(0, 0, 0, 0.0196802))",
      }}
    >
      <MdLocalOffer size="2.5em" color="#5B45EF" />

      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: "45px" }}>
        <View>
          <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>Paket 5x Perjalanan</Text>
          <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Masa berlaku : 30 hari</Text>
        </View>

        <View style={{ justifyContent: "flex-end", alignItems: "flex-end" }}>
          <View style={{ justifyContent: "flex-end", alignItems: "flex-end", gap: "15px" }}>
            <Text style={{ fontWeight: "bold", fontSize: "12px", fontFamily: "Poppins" }}>Rp25.000,00</Text>
            <Button
              text="Beli"
              styleText={{ color: "white", fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}
              styleButton={{
                background: "#3741B5",
                borderRadius: "15px",
                justifyContent: "center",
                alignItems: "center",
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "1px",
                paddingBottom: "1px",
                width: "80%",
                boxShadow: "0px 4px 7px rgba(0, 0, 0, 0.15)",
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Voucher;
