import React, { useState, createRef } from 'react';
import {
  StyleSheet,
  Button,
  View,
  Text,
  ScrollView,
  Image,
  Keyboard,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
  TouchableHighlight,
  TextInput,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import ResetPasswordScreen from './ResetPasswordScreen';
import LoginScreen from './LoginScreen';
import CategoriesMain from './CategoriesMain';
import NavigationRouter from './NavigationRouter';
import ApiCallScreen from './ApiCallScreen';
//import { SafeAreaView } from 'react-navigation';

const SignInScreen = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');
  const passwordInputRef = createRef();
  const handleSubmitPress = () => {
    setErrortext('');
    if (!userEmail) {
      alert('Please enter email address.');
      return;
    }
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      userEmail,)){
      alert('Please enter valid email address.')
      return;
    }
    if (
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        userEmail,))
      {
        if (!userPassword) {
          alert('Please enter password');
          return;
        }
        if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/.test(userPassword))
        {
          alert('Password should be between 7 to 15 characters which contain at least one numeric digit and one capital');
          return;
        }
        else
         {
          return (navigation.navigate(CategoriesMain));
        }
      }    
  }
  return (
    <SafeAreaView style={{flex:1}}>
       <StatusBar style={styles.statusBarStyle} />
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(LoginScreen)}>
          <Image
            source={require('../Image/arrow.png')}
            style={styles.backIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.backButtonText}>
            Back
          </Text>
        </TouchableOpacity>
        <View>
          <KeyboardAvoidingView enabled>
            <View style={styles.titleStyle}>
              <Text style={styles.headingTextStyle}>Let's sign you in!</Text>
              <Text style={styles.welcomeTextStyle}>
                Welcome back,{'\n'}
              you have been missed!
            </Text>
            </View>
            <View>
              <View>
                <Text style={styles.titleStyle}>Email address</Text>
                <TextInput
                  style={styles.inputStyle}
                  onChangeText={(UserEmail) =>
                    setUserEmail(UserEmail)
                  }
                />
              </View>
              <Text style={styles.titleStyle}> Password </Text>
              <TextInput
                style={styles.inputStyle}
                onChangeText={(userPassword) =>
                  setUserPassword(userPassword)
                }
                keyboardType="default"
                ref={passwordInputRef}
                onSubmitEditing={Keyboard.dismiss}
                blurOnSubmit={false}
                secureTextEntry={true}
                returnKeyType="next"
              />
            </View>
            <TouchableOpacity style={styles.signInButtonStyle}
              //onPress={() => navigation.navigate(CategoriesMain)}>
              onPress={handleSubmitPress}>
              <Text style={styles.buttonTextStyle}>Sign in</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.forgotButtonStyle}
              onPress={() => navigation.navigate(ResetPasswordScreen)}>
              <Text style={styles.buttonTextStyle}>Forgot Password?</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 10,
  },
  statusBarStyle:{
    backgroundColor:'#E5E5E5'
  },
  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    marginLeft: 10,
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#E5E5E5',
    width: 10,
  },
  backButtonText:{
    color:'#000000',
    fontFamily: 'Lato-Regular',
    fontWeight: 'bold',
    fontSize: 18
  },
  welcomeTextStyle: {
    fontFamily: 'Nunito-Regular',
    fontSize: 30,
    color: '#000000',
  },
  headingTextStyle: {
    color: '#263238',
    fontFamily: 'Nunito-Regular',
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: '30%'
  },
  titleStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: '#263238',
    marginLeft: 15,
    marginRight: 35,
    marginTop:15,
    marginBottom: 15,
  },
  inputStyle: {
    backgroundColor: '#FFFFFF',
    color: '#000000',
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#C7C7C7',
    width: '90%',
    height: 60,
    padding: 10,
    marginLeft: 15,
    marginBottom: 0,
    fontSize: 20,
    fontFamily:'Lato-Regular',
  },
  buttonTextStyle: {
    color: '#000000',
    paddingVertical: 15,
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  signInButtonStyle: {
    backgroundColor: '#F8D57E',
    height: 55,
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: '20%'
  },
  forgotButtonStyle: {
    backgroundColor: '#E5E5E5',
  },
});


