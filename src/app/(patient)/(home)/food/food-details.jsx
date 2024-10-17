import { useLocalSearchParams } from "expo-router";

import {
  Page,
  PageCell,
  TextHeader,
  Card,
  FoodNutritionCard,
} from "@/components";
import { createStyles, padding, colors, fonts } from "@/styles";

const styles = createStyles({
  foodContainer: {
    padding: padding.lg,
  },
  cellHeader: {
    color: colors.lightNeutral.darkest,
    fontSize: fonts.xl,
    textAlign: "left",
  },
});

const FoodDetailScreen = () => {
  const { foodItemName } = useLocalSearchParams();

  return (
    <Page>
      <PageCell>
        <TextHeader text={foodItemName} textStyle={styles.cellHeader} />
        <Card>
          <FoodNutritionCard foodItem={foodItemName} />
        </Card>
      </PageCell>
    </Page>
  );
};

export default FoodDetailScreen;
