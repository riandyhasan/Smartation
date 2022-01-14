import React, { useEffect, useState } from "react";
import { Animated, Easing, View, Dimensions, Text, Image, ImageBackground } from "react-native";
import { useNavigation } from "@react-navigation/core";
import firebase from "../../firebase";
// import { loop, mix } from "react-native-redash";

const DataViewer = () => {
  //   const { set, useCode, Value } = Animated;
  //   const animation = new Value(0);

  //   useCode(
  //     () =>
  //       set(
  //         animation,
  //         loop({
  //           duration: 1000,
  //           easing: Easing.inOut(Easing.ease),

  //           boomerang: true,
  //           autoStart: true,
  //         })
  //       ),
  //     [animation]
  //   );

  //   const opacity = mix(animation, 0.1, 1);

  const navigation = useNavigation();

  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        sleep(2000).then(() => {
          navigation.replace("Home");
        });
      }
    });
  }, []);

  const { height, width } = Dimensions.get("window");

  return (
    <View style={{ justifyContent: "center", alignItems: "center", height, width }}>
      <ImageBackground source={require("../../assets/loadingbg.png")} style={{ width: "100%", height: "100%", resizeMode: "cover", justifyContent: "center", alignItems: "center" }}>
        {/* <Animated.View style={{ opacity }}> */}
        <Image style={{ width: "100%", height: 200, resizeMode: "contain" }} source={require("../../assets/logo.png")} />
        {/* </Animated.View> */}
      </ImageBackground>
    </View>
  );
};

export default DataViewer;
