import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import HomeScreen from "../../screens/HomeScreen";
import NotificationScreen from "../../screens/NotificationScreen";
import ProfileScreen from "../../screens/ProfileScreen";
import VoucherScreen from "../../screens/VoucherScreen";
import SearchScreen from "../../screens/SearchScreen";
import { MdHomeFilled } from "react-icons/md";
import { FaCompass } from "react-icons/fa";
import { IoNavigateCircle, IoNotifications } from "react-icons/io5";
import { TiUser } from "react-icons/ti";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: { background: "#F9F9F9", boxShadow: "0px -4px 21px rgba(0, 0, 0, 0.1)", borderRadius: "20px", paddingBottom: "10px", paddingTop: "10px", height: "8%" },
        tabBarInactiveTintColor: "#E5E5E5",
        tabBarActiveTintColor: "#5B45EF",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => <MdHomeFilled name="home" color={color} size="2.5em" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color, size }) => <FaCompass name="compass" color={color} size="2em" />,
        }}
      />
      <Tab.Screen
        name="Voucher2"
        component={VoucherScreen}
        options={{
          tabBarIcon: ({ color, size }) => <IoNavigateCircle name="navigator" color="#5B45EF" size="4.5em" />,
        }}
      />
      {/* <Tab.Screen name="Voucher" component={VoucherScreen} style={{ display: "none" }} /> */}
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: { backgroundColor: "red" },
          tabBarIcon: ({ color, size }) => <IoNotifications name="notification" color={color} size="2em" />,
        }}
      />
      <Tab.Screen
        name="Favorite3"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => <TiUser name="user" color={color} size="2.5em" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
