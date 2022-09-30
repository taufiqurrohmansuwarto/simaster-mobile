import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, View } from "react-native";
import Berita from "./src/components/Berita";
import Login from "./src/components/Login";

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <Berita />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Login />
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
