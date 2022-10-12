import { useContext } from "react";
import { View, Text, Button } from "react-native";
import authContext from "../context/auth.context";

const Profile = () => {
  const { logout } = useContext(authContext);
  return (
    <View>
      <Button onPress={logout} title="Keluar" />
    </View>
  );
};

export default Profile;
