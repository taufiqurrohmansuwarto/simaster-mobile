import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Login from "./src/components/Login";

export default function App() {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      est
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text>tes</Text>
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
