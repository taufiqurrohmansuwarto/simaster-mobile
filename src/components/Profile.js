import { useContext } from "react";
import { View, Text, Button } from "react-native";
import authContext from "../context/auth.context";

const Profile = () => {
  const { logout } = useContext(authContext);
  return (
    <View>
      <Text>hello world</Text>
      <Button onPress={logout} title="Logout" />
    </View>
  );
};

export default Profile;
