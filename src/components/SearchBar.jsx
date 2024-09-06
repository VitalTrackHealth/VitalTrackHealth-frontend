import React from "react";
import { StyleSheet, TextInput, View, Keyboard, TouchableOpacity, Text } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { colors } from "@/styles";

const SearchBar = ({
  clicked,
  searchPhrase,
  setSearchPhrase,
  setClicked,
  onSearch,
  navigation,
}) => {
  const handleSearch = () => {
    onSearch();
    Keyboard.dismiss();
    setClicked(false);
  };

  const backBtnPressed = () => {
    navigation.goBack();
  };

  const handleDone = () => {
    Keyboard.dismiss();
    setSearchPhrase(""); 
    onSearch("");         
    setClicked(false);
  };

  return (
    <View style={styles.container}>
      {clicked ? (
        <TouchableOpacity style={styles.doneBtn} onPress={handleDone}>
          <Text style={styles.doneText}>Done</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.backBtn} onPress={backBtnPressed}>
          <AntDesign name="arrowleft" size={28} color={colors.grey} />
        </TouchableOpacity>
      )}
      <View style={clicked ? styles.searchBar__clicked : styles.searchBar__unclicked}>
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={(text) => {
            setSearchPhrase(text); 
            onSearch(text);        
          }}
          onFocus={() => setClicked(true)}
          placeholderTextColor="gray"
        />
        <Feather style={styles.searchIcon} name="search" size={20} color="black" />
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
    marginTop: 60,
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderWidth: 0.2,
    borderColor: "grey",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    flexDirection: "row",
    width: "90%",
    backgroundColor: "#FFFFFF",
    borderRadius: 15,
    borderWidth: 0.2,
    borderColor: "grey",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "black",
  },
  backBtn: {
    marginLeft: 10,
    marginRight: 5,
  },
  doneBtn: {
    marginLeft: 10,
    marginRight: 5,
  },
  doneText: {
    fontSize: 18,
    color: colors.grey,
  },
});



