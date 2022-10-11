import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomTabs from "./BottomTab.screen";

const BerandaStack = createNativeStackNavigator();

// create bottom tab navigator

const BerandaScreen = () => {
  return (
    <BerandaStack.Navigator>
      <BerandaStack.Screen name="Home" component={BottomTabs} />
    </BerandaStack.Navigator>
  );
};

export default BerandaScreen;
