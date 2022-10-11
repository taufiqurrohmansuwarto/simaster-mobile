import { Text, StyleSheet, View } from "react-native";
import { colors } from "../../utils/color";

const Pendidikan = () => {
  return (
    <View style={styles.container}>
        <View style={styles.ShapeBiru}>
        <Text>Data Pendidikan</Text>
        <View>
          <Text>Detail Pendidikan</Text>
        </View>
        </View>
    </View>
  );
};

export default Pendidikan;

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
  

