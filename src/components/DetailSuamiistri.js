import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../utils/color";

const DetailSuamiistri = () => {
  return (
    <View style={styles.container}>
        <View style={styles.ShapeBiru}>
        <Text>Detail Riwayat Suami / Istri</Text>
        <View>
          <Text>Detail Riwayat Suami:</Text>
        </View>
        </View>
    </View>
  );
};

export default DetailSuamiistri;

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
  

