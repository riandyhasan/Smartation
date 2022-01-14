import React from "react";
import { MdLocalOffer } from "react-icons/md";
import { Text, View } from "react-native";

const Notification = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          paddingTop: "15px",
          paddingBottom: "15px",
          paddingLeft: "10px",
          paddingRight: "10px",
          background: "transparent",
        }}
      >
        <MdLocalOffer size="2em" color="#5B45EF" />

        <View>
          <Text style={{ fontWeight: 500, fontSize: "10px", fontFamily: "Poppins" }}>Pembelian berhasil!</Text>
          <Text style={{ fontWeight: 400, fontSize: "10px", fontFamily: "Poppins" }}>Voucher paket 10x perjalanan</Text>
        </View>

        <View style={{ justifyContent: "flex-end", alignItems: "flex-end", marginLeft: "20px", marginBottom: "10px" }}>
          <Text style={{ fontWeight: 400, fontSize: "10px", fontFamily: "Poppins" }}>17/01/2021</Text>
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

export default Notification;
