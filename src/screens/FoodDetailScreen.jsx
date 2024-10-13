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

const FoodDetailScreen = ({ route }) => {
  const { foodItem } = route.params;

  return (
    <Page>
      <PageCell>
        <TextHeader text={foodItem.name} textStyle={styles.cellHeader} />
        <Card>
          <FoodNutritionCard foodItem={foodItem} />
        </Card>
      </PageCell>
    </Page>
  );
};

export default FoodDetailScreen;
