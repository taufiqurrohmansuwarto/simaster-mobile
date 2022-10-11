import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from '../screens/Home';
import Hca from '../screens/Hca';
import Faq from '../screens/Faq';
import Akun from '../screens/Akun';

import { strings } from '../../utils/strings';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const HomeStack = createStackNavigator();
const HomeNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="HomeScreen" component={Home} options={{headerShown: false}} />
    </HomeStack.Navigator>
  )
}

const HcaStack = createStackNavigator();
const HcaNavigation = () => {
  return (
    <HcaStack.Navigator>
      <HcaStack.Screen name="HcaScreen" component={Hca} options={{headerShown: false}} />
    </HcaStack.Navigator>
  )
}

const FaqStack = createStackNavigator();
const FaqNavigation = () => {
  return (
    <FaqStack.Navigator>
      <FaqStack.Screen name="FaqScreen" component={Faq} options={{headerShown: false}} />
    </FaqStack.Navigator>
  )
}

const AkunStack = createStackNavigator();
const AkunNavigation = () => {
  return (
    <AkunStack.Navigator>
      <AkunStack.Screen name="AkunScreen" component={Akun} options={{headerShown: false}} />
    </AkunStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();
const Router = () => {
  return (
    <NavigationContainer>      
      <Tab.Navigator 
        screenOptions={{
          header: () => null,
          tabBarStyle: {position: 'absolute'}
        }}
      >
        <Tab.Screen name={strings.screen.Home} component={HomeNavigation} />
        <Tab.Screen name={strings.screen.Hca} component={HcaNavigation} />
        <Tab.Screen name={strings.screen.Faq} component={FaqNavigation} />
        <Tab.Screen name={strings.screen.Akun} component={AkunNavigation} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router