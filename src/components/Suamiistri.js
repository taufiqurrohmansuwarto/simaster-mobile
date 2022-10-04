import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../utils/color";

const Suamiistri = () => {
  return (
    <View style={styles.container}>
        <View style={styles.ShapeBiru}>
        <Text>Suami / Istri</Text>
        <View>
          <Text>Tanggal Suami:</Text>
        </View>
        </View>
    </View>
  );
};

export default Suamiistri;

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
  

