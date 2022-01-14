import React from "react";
import { MapView } from "expo";
import { MapViewDirections } from "react-native-maps-directions";
import { Dimensions } from "react-native";

const origin = { latitude: 37.3318456, longitude: -122.0296002 };
const destination = { latitude: 37.771707, longitude: -122.4053769 };
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE = 37.771707;
const LONGITUDE = -122.4053769;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const Map = () => {
  return (
    <MapView
      initialRegion={{
        latitude: LATITUDE,
        longitude: LONGITUDE,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      }}
    >
      <MapViewDirections origin={origin} destination={destination} apikey="AIzaSyD3AWMtWzjRz6JTCrs74nA15plU4CLGV3Q" />
    </MapView>
  );
};

export default Map;
