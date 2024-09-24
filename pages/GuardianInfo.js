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
  TouchableHighlight
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import PatientsInfoScreen from './PatientsInfoScreen';
import SignInScreen from './SignInScreen';
import { TextInput } from 'react-native-gesture-handler';
import SettingsScreen from './SettingsScreen';
const GuardianInfo = ({ navigation }) => {
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [text, setText] = useState('');

  const passwordInputRef = createRef();


  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <TouchableOpacity
          style={styles.backButtonStyle}
          activeOpacity={0.5}
          onPress={() => navigation.navigate(SettingsScreen)}>
          <Image
            source={require('../Image/arrow.png')}
            style={styles.backIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.backButtonTextStyle}>
            Settings
          </Text>
        </TouchableOpacity>
        <View>

          <KeyboardAvoidingView enabled>
            <View style={styles.titleStyle}>
              <Text style={styles.titleTextStyle}>Guardian Information</Text>
            </View>
            <View>
              <Text style={styles.headerTextStyle}> Full Name </Text>
              <TextInput style={styles.inputStyle} />
              <View>
                <Text style={styles.headerTextStyle}>Email</Text>
                <TextInput style={styles.inputStyle}
                  value={userEmail}
                  onChangeText={(userEmail) => setUserEmail(userEmail)}>
                </TextInput>
              </View>

              <Text style={styles.headerTextStyle}> Mobile Number </Text>

              <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.mobInputStyle} />
                <TextInput style={styles.mobileInputStyle} />
              </View>
            </View>



            <TouchableOpacity style={styles.saveButtonStyle}
              onPress={() => navigation.navigate(SettingsScreen)}>
              <Text style={styles.saveButtonTextStyle}>Save</Text>
            </TouchableOpacity>
          </KeyboardAvoidingView>
        </View>
      </ScrollView>
    </View>
  );
};
export default GuardianInfo;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    backgroundColor: '#E5E5E5',
    padding: 20,
  },
  titleTextStyle: {
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular',
    color: '#263238',
    fontSize: 28,
    marginBottom: '5%',
    marginTop:'5%',
  },
  mobInputStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    color:'#000000',
    backgroundColor:'#FFFFFF',
    width: '23%',
    height:55,
    padding: 10,
    marginBottom: 20,
  },
  mobileInputStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    color:'#000000',
    backgroundColor:'#FFFFFF',
    width: '75%',
    padding: 10,
    marginLeft: '2%',
    marginBottom: 20,
  },
  headerTextStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: '#263238',
    marginBottom:'5%',
  },
  inputStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    color: '#000000',
    borderColor: '#C7C7C7',
    backgroundColor:'#FFFFFF',
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
  },
  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
  },
  backButtonTextStyle:{
    color: '#000000',
    paddingVertical: 17,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
  backIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#E5E5E5',
    width: 5,
  },
  saveButtonStyle: {
    backgroundColor: '#F8D57E',
    borderRadius: 30,
    marginTop: '60%'
  },
  saveButtonTextStyle: {
    color: '#232F39',
    paddingVertical: 17,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular',
  },
});

