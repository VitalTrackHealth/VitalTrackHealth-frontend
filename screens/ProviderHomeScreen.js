import { View, Text, ScrollView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";
import { Button, Card, Ring, SearchBar } from "../components";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProviderHomeScreen = ({ navigation }) => {
  return (
    <LinearGradient
      colors={["#FFFFFF", "#007260"]}
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
      }}
    >
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text
            style={{
              color: "black",
              fontSize: 35,
              fontWeight: 800,
              padding: 10,
            }}
          >
            {" "}
            Dr John Doe.
          </Text>
        </View>

        <ScrollView>
          <Card></Card>

          <Card></Card>

          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </ScrollView>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          position: "absolute",
          bottom: 0,
          width: "100%",
          backgroundColor: "#007260",
          padding: 10,
        }}
      ></View>
    </LinearGradient>
  );
};

export default ProviderHomeScreen;
