import { View, Text, ScrollView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";
import Card from "../ios/components/card";
import { Image } from "react-native";
import { Button } from "../ios/components/Buttom";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import Ring from "../ios/components/ring";
import AddButtom from "../ios/components/AddButtom";
import SearchBar from "../ios/components/SearchBar";

const Mainpage = ({ navigation }) => {
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

export default Mainpage;
