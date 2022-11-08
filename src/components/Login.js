import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";
import { useContext, useEffect } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import base64 from "react-native-base64";
import authContext from "../context/auth.context";

WebBrowser.maybeCompleteAuthSession();
const useProxy = true;
const CLIENT_ID = "master-oauth";
const CLIENT_SECRET = "master";

const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
});

const Login = () => {
  // fucking login
  const { login } = useContext(authContext);

  const discovery = {
    authorizationEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/auth",
    tokenEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/token",
    userInfoEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/me",
  }; // Create and load an auth request

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: CLIENT_ID,
      redirectUri,
      scopes: ["openid", "profile", "email", "pegawai:0", "organization:1 read:cv"],
      prompt: "login",
    },
    discovery
  );

  // ini harusnya ga boleh disini khusus untuk debug*
  useEffect(() => {
    if (result?.type === "success") {
      const body = {
        grant_type: "authorization_code",
        code: result.params.code,
        redirect_uri: redirectUri,
        code_verifier: request.codeVerifier,
        client_id: CLIENT_ID,
      };

      // DONT USE THIS AS PRODUCTION CODE
      const authHeader = base64.encode(`${CLIENT_ID}:${CLIENT_SECRET}`);

      fetch(discovery.tokenEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${authHeader}`,
        },
        body: Object.keys(body)

          .map((key) => `${key}=${encodeURIComponent(body[key])}`)
          .join("&"),
      })
        .then((response) => response.json())
        .then((response) => {
          login(response?.access_token, response?.id_token);
        });
    }
  }, [result]);

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../assets/LogoSIMaster.png")}
      />
      <Button
        title="Masuk dengan akun SIMASTER"
        disabled={!request}
        onPress={() => promptAsync({ useProxy })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginVertical: 20,
  },
});

export default Login;
