import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import PieChart from "react-native-pie-chart";
import { colors } from "@/styles";
import { AntDesign } from "@expo/vector-icons";

const NavigationMenu = ({ navigation }) => {
  const homebuttom = () => {
    {
      /* OK WTF why doesnt it work???? */
    }
    navigation.navigate("PatientStack", { screen: "Login" });
  };
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
        <Pressable onPress={() => ""}>
          <View style={styles.regularbuttom}>
            <AntDesign name="setting" size={40} color="black" />
          </View>
        </Pressable>

        <Pressable onPress={() => homebuttom()}>
          <View style={styles.regularbuttom}>
            <AntDesign name="user" size={40} color="black" />
          </View>
        </Pressable>
        <Pressable onPress={() => ""}>
          <View style={styles.circularbuttom}>
            <AntDesign name="home" size={50} color="white" />
          </View>
        </Pressable>
        <Pressable onPress={() => ""}>
          <View style={styles.regularbuttom}>
            <AntDesign name="book" size={40} color="black" />
          </View>
        </Pressable>

        <Pressable onPress={() => ""}>
          <View style={styles.regularbuttom}>
            <AntDesign name="heart" size={40} color="red" />
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //  flex: 1, // Make the view take up the full available space
    backgroundColor: "#ffffff",

    margin: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: "90%",
    height: "80%",
    padding: 0,
  },

  circularbuttom: {
    //  width: 100,

    backgroundColor: "#40ade0",
    borderRadius: 100,
    marginTop: -15,
    shadowColor: "#40ade0",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 2,
    shadowRadius: 10,
    padding: 10,
  },

  regularbuttom: {
    borderRadius: 100,
    justifyContent: "center",
    marginTop: 10,

    padding: 0,
  },
  image: {
    width: 70, // Adjust the width as needed
    height: 70, // Adjust the height as needed
  },
});

export default NavigationMenu;
