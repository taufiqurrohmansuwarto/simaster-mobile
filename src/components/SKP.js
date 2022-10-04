import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../utils/color";

const SKP = () => {
  return (
    <View style={styles.container}>
        <View style={styles.ShapeBiru}>
        <Text>Data SKP</Text>
        <View>
          <Text>Tanggal SKP:</Text>
        </View>
        </View>
    </View>
  );
};

export default SKP;

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
  

