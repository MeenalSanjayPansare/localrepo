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
  SafeAreaView
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import PatientsInfoScreen from './PatientsInfoScreen';
import SignInScreen from './SignInScreen';
import { TextInput } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
//import { SafeAreaView } from 'react-navigation';
const CreateAccountScreen = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [errortext, setErrortext] = useState('');

  const passwordInputRef = createRef();

  const handleSubmitPress = () => {
    setErrortext('');
    if (!userName) {
      alert('Please enter Full Name');
      return;
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,20}/.test(userName)) {
      alert(userName + '\n' + userName.length);
      alert('Please check Full Name');
      return;
    }

    if (!userEmail) {
      alert('Please enter Email');
      return;
    }
    if (!/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      userEmail)) {
      alert('Please enter valid email address')
      return;
    }
    if (!mobileNumber) {
      alert('Please enter Mobile Number');
      return;
    }
    if (!/[0-9]{10}$/.test(mobileNumber)) {
      alert('please enter valid number');
      return;
    }
    if (!userPassword) {
      alert('Please enter Password');
      return;
    }
    if (!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/.test(userPassword)) {
      alert('Password should be between 7 to 15 characters which contain at least one numeric digit,one capital' + '\n' + userPassword);
      return;
    }
    else {
      return (navigation.navigate(PatientsInfoScreen));
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainBody}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            alignContent: 'center',
          }}>
          <View>
            <KeyboardAvoidingView enabled>
              <View>
                <TouchableOpacity
                  style={styles.backButtonStyle}
                  activeOpacity={0.5}
                  onPress={() => navigation.navigate(LoginScreen)}>
                  <Image
                    source={require('../Image/arrow.png')}
                    style={styles.backIconStyle}
                  />
                  <View style={styles.buttonIconSeparatorStyle} />
                  <Text style={styles.backButtonTextStyle}>
                    Back
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.text1Style}>Create Account</Text>
              <View style={styles.setHeaderStyle}>

                <View style={styles.circleStyle1}>
                  <Text style={styles.cirlce1TextStyle}>1</Text>
                </View>
                <Text style={styles.headerText1Style}>
                  Guardian {'\n'}Information
                </Text>
                <View style={styles.lineStyle} />
                <View style={styles.circleStyle2}>
                  <Text style={styles.cirlce1TextStyle}>2</Text>
                </View>
                <Text style={styles.headerText2Style}>
                  Patient {'\n'}Information
                </Text>
              </View>

              <View style={styles.formStyle}>
                <Text style={styles.text2Style}> Full Name </Text>
                <TextInput style={styles.inputStyle}
                  onChangeText={(userName) => setUserName(userName)} />
                <View>
                  <Text style={styles.text2Style}>Email</Text>
                  <TextInput style={styles.inputStyle}
                    onChangeText={(userEmail) => setUserEmail(userEmail)} />
                </View>

                <Text style={styles.text2Style}> Mobile Number </Text>

                <View style={{ flexDirection: 'row' }}>
                  <TextInput style={styles.inputStyle1}
                    onChangeText={(mobileNumeber) => setMobileNumber(mobileNumeber)}
                    keyboardType='numeric'
                    maxLength={10}
                  />
                  <TextInput style={styles.inputStyle2}
                    onChangeText={(mobileNumeber) => setMobileNumber(mobileNumeber)} keyboardType='numeric'
                    maxLength={10} />
                </View>
                <Text style={styles.text2Style}> Password </Text>
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
                <TouchableOpacity style={styles.buttonStyle}
                  //onPress={() => navigation.navigate(PatientsInfoScreen)}>
                  onPress={handleSubmitPress}>
                  <Text style={styles.buttonTextStyle}>Next</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView >
  );
};
export default CreateAccountScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
    alignContent: 'center',
  },
  formStyle: {
    flexDirection: 'column',
    backgroundColor: '#ffff',
    height: '100%',
    width: '100%'
  },
  setHeaderStyle: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 10,
  },
  circleStyle2: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#4F6445',
    backgroundColor: '#E5E5E5',
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 20,
  },
  circleStyle1: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F8D57E',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
  },
  cirlce1TextStyle: {
    alignSelf: 'center',
    marginVertical: '15%',
    fontFamily: 'Lato-Regular',
    fontSize: 20,
    fontWeight: 'bold',
  },
  headerText2Style: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#708090',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
  },
  headerText1Style: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#000000',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
  },
  text1Style: {
    color: '#263238',
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular'
  },
  buttonTextStyle: {
    color: '#000',
    position: 'relative',
    marginVertical: '3%',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular'
  },
  buttonStyle: {
    backgroundColor: '#F8D57E',
    borderColor: '#ffd700',
    height: 50,
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: '15%',
  },
  inputStyle: {
    paddingLeft: 10,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    marginLeft: 20
  },
  inputStyle1: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    width: '20%',
    height: '90%',
    marginLeft: 20,
  },
  inputStyle2: {
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    width: '70%',
    height: '90%',
    padding: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  text1Style: {
    fontFamily: 'Nunito-Regular',
    color: 'black',
    fontSize: 24,
    padding: 10,
    fontWeight: 'bold',
    marginLeft: 20,
    fontFamily: 'Lato-Regular',
  },
  text2Style: {
    fontSize: 17,
    color: '#263238',
    marginRight: 35,
    marginBottom: 15,
    padding: 10,
    marginLeft: 10,
    fontFamily: 'Lato-Regular',
  },
  inputStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#dadae8',
    width: '93%',
    padding: 20,
    marginBottom: 10,
    marginLeft: 20,
  },
  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginLeft: 20
  },
  backButtonTextStyle:{
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'Lato-Regular'
  },
  backIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'stretch',
  },
  buttonIconSeparatorStyle: {
    backgroundColor: '#f8f8ff',
    width: 5,
  },
  lineStyle: {
    backgroundColor: 'grey',
    width: 2,
    height: '70%',
    alignSelf: 'center',
    marginLeft: 40
  },
});

