import React, { useRef } from "react";
import { View, Dimensions } from "react-native";
import Profile from "../components/Profile/Profile";
import Saldo from "../components/Card/Saldo";
import Pembayaran from "../components/Card/Pembayaran";
import HomeVoucher from "../components/Card/HomeVoucher";
import NewestTransaction from "../components/Card/NewestTransaction";
import TranscationHistory from "../components/Card/TranscationHistory";
import Carousel from "react-native-anchor-carousel";
// import sliderData from "../constant/data";

const sliderData = [
  {
    code: "Angkot B30",
    type: "Angkot",
  },
  {
    code: "Bus B30",
    type: "Bus",
  },
  {
    code: "Bus B30",
    type: "Bus",
  },
  {
    code: "Bus B30",
    type: "Bus",
  },
  {
    code: "Bus B30",
    type: "Bus",
  },
  {
    code: "Angkot B30",
    type: "Angkot",
  },
];

const HomeScreen = () => {
  const { height, width } = Dimensions.get("window");

  return (
    <View style={{ flex: 1, paddingRight: "5%", paddingLeft: "5%", paddingTop: "15%", paddingBottom: "5%", gap: "20px", backgroundColor: "#F9F9F9", overflowY: "scroll", overflowX: "hidden", width }}>
      <Profile />
      <Saldo />
      <Pembayaran />
      <HomeVoucher />
      <NewestTransaction />
      <View style={{ flexDirection: "row", gap: "30px", overflowX: "scroll", paddingTop: "20px", paddingBottom: "20px", paddingLeft: "5px", background: "transparent", width }}>
        {sliderData.map((item, idx) => (
          <TranscationHistory key={idx} code={item.code} type={item.type} />
        ))}
      </View>
    </View>
  );
};

export default HomeScreen;
