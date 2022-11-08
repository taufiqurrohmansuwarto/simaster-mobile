import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomTabNavigator } from '../components';
import { NavigationContainer } from '@react-navigation/native';
import { Beranda, Personal, Jabatan, Kepegawaian, Pendidikan, Diklat, DiklatDetail, Akun, About, SettingAkun, Faq, FaqDetail } from '../screens';

const Tabs = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tabs.Navigator tabBar={props => <BottomTabNavigator {...props} />}>
      <Tabs.Screen name="Beranda" component={Beranda} options={{headerShown: false}} />
      <Tabs.Screen name="Video HCA" component={Beranda} options={{headerShown: false}} />
      <Tabs.Screen name="F.A.Q" component={Faq} options={{headerShown: false}} />
      <Tabs.Screen name="Akun" component={Akun} options={{headerShown: false}} />
    </Tabs.Navigator>
  )
}

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='BottomTab' component={BottomTab} options={{headerShown: false}} />
        <Stack.Screen name='Personal' component={Personal} options={{headerShown: false}} />
        <Stack.Screen name='Jabatan' component={Jabatan} options={{headerShown: false}} />
        <Stack.Screen name='Kepegawaian' component={Kepegawaian} options={{headerShown: false}} />
        <Stack.Screen name='Pendidikan' component={Pendidikan} options={{headerShown: false}} />
        <Stack.Screen name='Diklat' component={Diklat} options={{headerShown: false}} />
        <Stack.Screen name='DiklatDetail' component={DiklatDetail} options={{headerShown: false}} />
        <Stack.Screen name='About' component={About} options={{headerShown: false}} />
        <Stack.Screen name='SettingAkun' component={SettingAkun} options={{headerShown: false}} />
        <Stack.Screen name='FaqDetail' component={FaqDetail} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router;