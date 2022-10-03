import { Button, Text, View } from "react-native";

import * as AuthSession from "expo-auth-session";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();
const useProxy = false;
const redirectUri = AuthSession.makeRedirectUri({
  useProxy,
  scheme: "com.bkd.simastermobile",
});

const Login = () => {
  const discovery = {
    authorizationEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/auth",
    tokenEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/token",
    revocationEndpoint: "https://siasn.bkd.jatimprov.go.id/oidc-master/revoke",
  }; // Create and load an auth request

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId: "master-oauth",
      redirectUri,
      scopes: ["openid", "profile", "email", "pegawai:0", "organization:1"],
      prompt: "login",
    },
    discovery
  );

  return (
    <View>
      <Button
        title="Login!"
        disabled={!request}
        onPress={() => promptAsync({ useProxy })}
      />
      {result && <Text>{JSON.stringify(result, null, 2)}</Text>}
    </View>
  );
};

export default Login;
