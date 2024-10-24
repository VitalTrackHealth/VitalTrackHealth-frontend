import { useState, useEffect } from "react";
import { View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import {
  Page,
  PageCell,
  TextHeader,
  Card,
  FoodNutritionCard,
  Button,
} from "@/components";
import { createStyles, padding, colors, fonts } from "@/styles";
import { getFoodNutrients, addFoodItem } from "@/services";
import { useSession, useSnackbar } from "@/context";

const FoodDetailScreen = () => {
  const { session } = useSession();
  const { showSnackbar } = useSnackbar();
  const [buttonLoading, setButtonLoading] = useState(false);

  const {
    foodName,
    foodId,
    calories,
    protein,
    carbohydrates,
    fat,
    servingSize,
  } = useLocalSearchParams();
  const [foodItem, setFoodItem] = useState({});

  useEffect(() => {
    getFoodNutrients(foodId, 1).then((response) => {
      // Nutrient data is per 100g
      if (response.success) {
        setFoodItem(response.results.data);
      }
    });
  }, []);

  const handleAddToLog = () => {
    setButtonLoading(true);
    addFoodItem(
      {
        foodId,
        foodName,
        calories,
        protein,
        carbohydrates,
        fat,
        servingSize,
      },
      session
    ).then((response) => {
      if (response.success) {
        showSnackbar("Food added to log", "success");
      }
      setButtonLoading(false);
    });
  };

  return (
    <Page>
      <PageCell>
        <View style={styles.headerContainer}>
          <TextHeader text={foodName} textStyle={styles.cellHeader} />
          <Button
            text="Add to Log"
            onPress={handleAddToLog}
            loading={buttonLoading}
          />
        </View>
        <Card>
          <FoodNutritionCard foodItem={foodItem} servingSize={servingSize} />
        </Card>
      </PageCell>
    </Page>
  );
};

const styles = createStyles({
  foodContainer: {
    padding: padding.lg,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
});

export default FoodDetailScreen;
