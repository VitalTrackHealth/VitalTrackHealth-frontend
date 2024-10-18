import { View } from "react-native";

import { colors, createStyles } from "@/styles";
import TextInput from "@/components/TextInput";

const styles = createStyles({
  container: {},
});

const SearchBar = ({ searchQuery, setSearchQuery, onSubmitEditing }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        icon="search"
        iconSize={24}
        iconColor={colors.lightNeutral.dark}
      />
    </View>
  );
};

export default SearchBar;
