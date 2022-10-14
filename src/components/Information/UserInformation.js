import { useQuery } from "@tanstack/react-query";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { cv } from "../../../services";
import { colors } from "../../../utils/color";

// join the organization name but it will become issues if employee in dindik
const joinOrganization = (data) => {
  return data?.map((item) => item?.name).join(" - ");
};

const UserInformation = () => {
  const { data, isLoading } = useQuery(["cv"], () => cv());

  return (
    <View>
      <View style={styles.container}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            alignSelf: "center",
            padding: 10,
          }}
        >
          <View style={{ flex: 4, justifyContent: "center" }}>
            <Text style={styles.header}>{data?.nama}</Text>
            <Text style={styles.header}>{data?.nip_baru}</Text>
            <View style={{ marginVertical: 4 }}>
              <Text style={styles.text}>
                {joinOrganization(data?.perangkat_daerah?.detail)}
              </Text>
              <Text style={styles.text}>{data?.jabatan?.jabatan}</Text>
            </View>
          </View>
          <View style={{ flex: 2 }}>
            <Image
              source={{
                uri: "https://d1vbn70lmn1nqe.cloudfront.net/prod/wp-content/uploads/2021/10/28064854/12.-Tips-Merawat-Anak-Kucing-Munchkin.jpg",
              }}
              style={{
                height: 100,
                width: "auto",
              }}
            />
          </View>
        </View>
      </View>
      <ScrollView style={{ height: 300 }}>
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BiruMuda,
    height: 150,
    margin: 10,
    borderRadius: 6,
  },
  header: {
    color: colors.Putih,
    fontWeight: "bold",
    fontSize: 13,
  },
  text: {
    color: colors.Putih,
    fontSize: 9,
  },
});

export default UserInformation;