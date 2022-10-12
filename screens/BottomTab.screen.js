import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../src/components/Profile";

import { AntDesign } from "@expo/vector-icons";
import Beranda from "../src/components/Beranda";
import Faq from "../src/components/FAQ";
import VideoHCA from "../src/components/VideoHCA";

const Tabs = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Beranda") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Akun") {
            iconName = focused ? "user" : "user";
          } else if (route.name === "Video HCA") {
            iconName = focused ? "videocamera" : "videocamera";
          } else if (route.name === "F.A.Q") {
            iconName = focused ? "questioncircleo" : "questioncircleo";
          }
          return <AntDesign name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen name="Beranda" safeAreaInset={0} component={Beranda} />
      <Tabs.Screen name="Video HCA" safeAreaInset={0} component={VideoHCA} />
      <Tabs.Screen name="F.A.Q" safeAreaInset={0} component={Faq} />
      <Tabs.Screen name="Akun" safeAreaInset={0} component={Profile} />
    </Tabs.Navigator>
  );
};

export default BottomTabs;
