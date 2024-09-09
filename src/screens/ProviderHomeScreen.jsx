import { View, Text, ScrollView } from "react-native";
import { FlatList, TouchableOpacity } from "react-native-web";
import { Card, Ring, SearchBar } from "@/components";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

const ProviderHomeScreen = ({ navigation }) => {
  return (
    <View
      
      style={{
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 25,
        backgroundColor: "#ffffff",
      }}
    >
      <View>


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


    </View>
  );
};

export default ProviderHomeScreen;
