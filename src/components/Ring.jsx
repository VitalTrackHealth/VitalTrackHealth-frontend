import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import { ProgressBar } from "react-native";

const Ring = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <AnimatedCircularProgress
        size={150}
        width={12}
        fill={80}
        tintColor="#007260"
        onAnimationComplete={() => console.log("onAnimationComplete")}
        backgroundColor="#C1C7C9"
      >
        {() => (
          <AnimatedCircularProgress
            size={110}
            width={12}
            fill={40}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#C1C7C9"
          >
            {() => (
              <AnimatedCircularProgress
                size={70}
                width={12}
                fill={60}
                tintColor="#ff0000"
                onAnimationComplete={() =>
                  console.log("inner onAnimationComplete")
                }
                backgroundColor="#C1C7C9"
              />
            )}
          </AnimatedCircularProgress>
        )}
      </AnimatedCircularProgress>

      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        1540kc
      </Text>
    </View>
  );
};

export default Ring;
