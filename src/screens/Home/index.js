import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import React, { useContext, useEffect, useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from "react-native";
import authContext from "../../context/auth.context";

const Home = () => {
  const { logout } = useContext(authContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const token = await SecureStore.getItemAsync("jwt");

      setUser(jwt_decode(token));
    };

    getUser();

  }, []);

  return (
    <View style={styles.container}>
      {user && (
        <View>
          <Image />
          <View style={styles.card}>
            <Image
              style={styles.image}
              source={{
                uri: user?.picture,
              }}
            />
            <Text>Nama : {user?.nickname}</Text>
            <Text>NIP : {user?.employee_number}</Text>
          </View>
          <Button title="Logout" onPress={async () => await logout()} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    marginVertical: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 20,
  },
});

export default Home