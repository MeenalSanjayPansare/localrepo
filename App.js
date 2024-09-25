/*Learnings @Meenal*/
//edited for demo
import 'react-native-gesture-handler';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './pages/SplashScreen';
import NavigationRouter from './pages/NavigationRouter';
import HomeActivity from './pages/HomeActivity';

import LanguageScreen from './pages/LanguageScreen';
import Language from './pages/Language';

import LoginScreen from './pages/LoginScreen';

import CategoriesMain from './pages/CategoriesMain';
import Categories from './pages/Categories';

import SubCategoriesMain from './pages/SubCategoriesMain';

import SignInScreen from './pages/SignInScreen'

import CreateAccountScreen from './pages/CreateAccountScreen';
import GuardianInfo from './pages/GuardianInfo';

import ResetPasswordScreen from './pages/ResetPasswordScreen';
import Password from './pages/Password';

import PatientsInfoScreen from './pages/PatientsInfoScreen';
import PatientsInfo from './pages/PatientInfo';

import SettingsScreen from './pages/SettingsScreen';
import ApiCallScreen from './pages/ApiCallScreen';
const Stack = createStackNavigator();
const Auth = () => {
  return (
    <Stack.Navigator initialRouteName="LanguageScreen">
      <Stack.Screen
        name="LanguageScreen"
        component={LanguageScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="HomeActivity"
        component={HomeActivity}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="CategoriesMain"
        component={CategoriesMain}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="SubCategories"
        component={SubCategoriesMain}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="PatientsInfoScreen"
        component={PatientsInfoScreen}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{ headerShown: false }}
        header={{ visible: false }}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PatientsInfo"
        component={PatientsInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="GuardianInfo"
        component={GuardianInfo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Language"
        component={Language}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={Password}
        options={{ headerShown: false }}
      />
      
    </Stack.Navigator>
  )
}
/*
const Auth1 = () => {
  return(
  <Stack.Navigator initialRouteName="LoginScreen">
  
  </Stack.Navigator>
  )
}*/ 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NavigationRouter"
          component={NavigationRouter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;