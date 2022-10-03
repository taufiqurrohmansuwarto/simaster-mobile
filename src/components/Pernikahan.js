import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../utils/color";

const Pernikahan = () => {
  return (
    <View style={styles.container}>
        <View style={styles.ShapeBiru}>
        <Text>Pernikahan</Text>
        </View>
    </View>
  );
};

export default Pernikahan;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.Putih,
      alignItems: "center",
      justifyContent: "center",
    },
    ShapeBiru: {
        backgroundColor: colors.AbuAbu,
        height: 500,
        width: 300,
    }
  });
  

