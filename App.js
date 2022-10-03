import { NavigationContainer } from "@react-navigation/native";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as SecureStore from "expo-secure-store";
import jwt_decode from "jwt-decode";
import { useEffect, useMemo, useReducer } from "react";
import { Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Berita from "./src/components/Berita";
import Login from "./src/components/Login";
import Pernikahan from "./src/components/Pernikahan";
import AuthContext from "./src/context/auth.context";

export default function App() {
  const queryClient = new QueryClient();

  const initialLoginState = {
    isLoading: true,
    user: null,
    token: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "INITIAL":
        return {
          ...prevState,
          user: action.user,
          token: action.token,
          isLoading: false,
        };

      case "LOGIN":
        return {
          ...prevState,
          user: action.user,
          token: action.token,
          isLoading: false,
        };

      case "LOGOUT":
        return {
          ...prevState,
          user: null,
          token: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(() => ({
    login: async (token, jwt) => {
      await SecureStore.setItemAsync("token", token);
      await SecureStore.setItemAsync("jwt", jwt);
      const user = jwt_decode(jwt);
      dispatch({ type: "LOGIN", user, token });
    },
    logout: async () => {
      await queryClient.clear();
      await SecureStore.deleteItemAsync("token");
      await SecureStore.deleteItemAsync("jwt");
      dispatch({ type: "LOGOUT" });
    },
    initial: async () => {
      dispatch({ type: "INITIAL" });
    },
  }));

  useEffect(() => {
    const bootstrapAsync = async () => {
      await getToken();
    };
    bootstrapAsync();
  }, []);

  const getToken = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");
      const jwt = await SecureStore.getItemAsync("jwt");
      if (token && jwt) {
        const user = jwt_decode(jwt);
        dispatch({ type: "LOGIN", user, token });
      } else {
        dispatch({ type: "INITIAL" });
      }
    } catch (error) {
      await SecureStore.deleteItemAsync("token");
      await SecureStore.deleteItemAsync("jwt");
      dispatch({ type: "LOGOUT" });
    }
  };

  return (
    <NavigationContainer>
      <View>
        <Pernikahan />
    </View>
    </NavigationContainer>
    
    // <AuthContext.Provider value={authContext}>
    //   <NavigationContainer>
    //     <SafeAreaProvider style={{ flex: 1 }}>
    //       <QueryClientProvider client={queryClient}>
    //         {loginState.isLoading ? (
    //           <View>
    //             <Text>Loading...</Text>
    //           </View>
    //         ) : loginState.user ? (
    //           <Berita />
    //         ) : (
    //           <Login />
    //         )}
    //       </QueryClientProvider>
    //     </SafeAreaProvider>
    //   </NavigationContainer>
    // </AuthContext.Provider>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },

);