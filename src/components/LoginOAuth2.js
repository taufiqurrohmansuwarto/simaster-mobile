import { Button } from "react-native";
import { authorize } from "react-native-app-auth";

const LoginOAuth2 = () => {
  const handleLogin = async () => {
    const config = {
      issuer:
        "https://siasn.bkd.jatimprov.go.id/oidc-master/.well-known/openid-configuration",
      clientId: "master-oauth",
      redirectUrl: "com.bkd.simaster-mobile:/oauthredirect",
      scopes: ["openid", "profile", "email", "pegawai:0", "organization:1"],
    };
    try {
      const result = await authorize(config);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onPress={handleLogin} title="Login" />;
};

export default LoginOAuth2;
