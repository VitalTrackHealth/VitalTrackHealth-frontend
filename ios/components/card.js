import React from "react";
import { StyleSheet, View, TouchableOpacity, Image, Text } from "react-native";
import COLORS from "../../constants/colors";
import Ring from "./ring";

export default function Card(props) {
  return (
    <TouchableOpacity onPress={{}}>
      <View style={styles.Card}>
        <View style={styles.cardContent}>{props.children}</View>
        
        <View 
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: 'center', // Align items vertically center
          }}
        >
          <View 
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              marginRight: 10,
              marginBottom: 10,
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 5 }}>
              Pete Davidson
            </Text>
            <Text style={{ fontSize: 15, fontWeight: "bold", marginBottom: 5 }}>
              Diabetes
            </Text>

            <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 0 }}>
              Appt time : 10:00 AM - 11:00 AM
            </Text>
            <Text style={{ fontSize: 10, fontWeight: "bold", marginBottom: 10 }}>
              Appt Date : 12/12/2021 
            </Text>


                  <Image
        source={{uri: "https://banner2.cleanpng.com/20180722/gfc/kisspng-user-profile-2018-in-sight-user-conference-expo-5b554c0968c377.0307553315323166814291.jpg"
        }
        }
        style={styles.image}
       
      />
  
          </View>

          <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
          <Ring />
            <View style={styles.box}>
              <Text style={{ textAlign: "left", color: COLORS.primary }}>
                Carbohydrates: 15g
              </Text>
              <Text style={{ textAlign: "left", color: "blue" }}>
                Protein: 50g
              </Text>
              <Text style={{ textAlign: "left", color: "red" }}>Fat: 20g</Text>
            </View>
            
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "rgba(255, 255, 255, 0.2)", // semi-transparent white
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "rgba(255, 255, 255, 0.0)",
    borderWidth: 0.7,
    borderColor: COLORS.primary,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 6,
    padding: 20,
  },
  cardContent: {},
  box: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    letterSpacing: 20,
    marginTop: 10,
    padding: 10,
    borderRadius: 5,
  },
  image: {
    
    height: 100,
    width: 100,
  },
});
