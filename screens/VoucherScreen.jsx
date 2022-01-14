import React from "react";
import { View, Text, Dimensions } from "react-native";
import Voucher from "../components/Card/Voucher";

const VoucherScreen = () => {
  const { height, width } = Dimensions.get("window");
  return (
    <View style={{ paddingTop: "20px", paddingBottom: "10px", paddingLeft: "20px", paddingRight: "20px", overflowY: "scroll", width, height }}>
      <View style={{ justifyContent: "center", alignItems: "center", marginBottom: "10px" }}>
        <Text style={{ fontWeight: 700, fontSize: "30px", color: "#010B13", fontFamily: "Poppins" }}>Voucher</Text>
      </View>
      <View>
        <Text style={{ fontWeight: 700, fontSize: "16px", fontFamily: "Poppins", marginLeft: "5px", marginBottom: "10px" }}>Beli Voucher</Text>
        <View style={{ gap: "5px" }}>
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
          <Voucher />
        </View>
      </View>
    </View>
  );
};

export default VoucherScreen;
