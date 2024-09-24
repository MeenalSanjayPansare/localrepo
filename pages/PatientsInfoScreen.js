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
  SafeAreaView,
} from 'react-native';

import SignInScreen from './SignInScreen';
import { TextInput } from 'react-native-gesture-handler';
import CategoriesMain from './CategoriesMain';
import CreateAccountScreen from './CreateAccountScreen';
const PatientsInfoScreen = ({ navigation }) => {
  const [patientName, setPatientName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [dateOfBirth, setDateDateOfBirth] = useState('');

  const passwordInputRef = createRef();
  const handleSubmitPress = () => {
  if (!patientName) {
    alert("Please enter patient's name");
    return;
  }
  if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,20}/.test(patientName)) {
    alert(patientName + '\n' + patientName.length);
    alert('Please check Full Name');
    return;
  }
  if(!dateOfBirth)
  {
    alert("Please enter Patient's date of birth");
    return;
  }
  if(/^\d{2}[.-/]\d{2}[.-/]\d{4}$/.test(dateOfBirth))
  {
    alert(dateOfBirth)
    alert('Please check date format');
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
  else{
    return navigation.navigate(CategoriesMain);
  }
  
}
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.mainBody}>
        <View>
          <TouchableOpacity
            style={styles.backButtonStyle}
            activeOpacity={0.5}
            onPress={() => navigation.navigate(CreateAccountScreen)}>
            <Image
              source={require('../Image/arrow.png')}
              style={styles.backIconStyle}
            />
            <View style={styles.buttonIconSeparatorStyle} />
            <Text style={styles.backbuttonTextStyle}>
              Guardian Information
                  </Text>
          </TouchableOpacity>
          <Text style={styles.text1Style}>Create Account</Text>
        </View>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{
            justifyContent: 'center',
          }}>
          <KeyboardAvoidingView enabled>
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
              <View>
                <Text style={styles.inputHStyle}> Patient Name </Text>
                <TextInput style={styles.inputStyle} 
                onChangeText={(patientName) => setPatientName(patientName)}/>
                <View>

                </View>
                <Text style={styles.inputHStyle}> Date of Birth </Text>
                
                <TextInput style={styles.inputStyle} 
                onChangeText={(dateOfBirth)=> setDateDateOfBirth(dateOfBirth)}
                keyboardType='numeric'/>
                <Text style={styles.inputHStyle}> Care taker's Mobile Number (optional) </Text>

                <View style={{ flexDirection: 'row' }}>
                <TextInput style={styles.inputStyle1}
                    onChangeText={(mobileNumeber) => setMobileNumber(mobileNumeber)}
                    keyboardType='numeric'
                    maxLength={10}
                  />
                  <TextInput style={styles.inputStyle2}
                  onChangeText={(mobileNumeber) => setMobileNumber(mobileNumeber)}
                  keyboardType='numeric'
                  maxLength={10} />
                </View>

              </View>

              <Text style={styles.termStyle}>
                By Creating account, you confirm that you've read and agreed to our terms of services and privacy policy
              </Text>

              <TouchableOpacity style={styles.buttonStyle}
              //onPress={() => navigation.navigate(CategoriesMain)}>
                onPress={handleSubmitPress}>
                <Text style={styles.buttonTextStyle}>Create Account</Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>

        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default PatientsInfoScreen;

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
    width: '100%',
    padding:10,
  },
  setHeaderStyle: {
    padding: 1,
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 10,
    marginTop: '10%',
  },
  circleStyle1: {
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
  circleStyle2: {
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
  headerText1Style: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#708090',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
  },
  headerText2Style: {
    alignSelf: 'center',
    fontSize: 17,
    color: '#000000',
    marginLeft: 15,
    fontFamily: 'Lato-Regular',
  },
  text1Style: {
    color: 'black',
    fontSize: 24,
    padding: 20,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular'
  },
  backbuttonTextStyle: {
    color: '#000',
    fontSize: 15,
    fontFamily: 'Lato-Regular'
  },
  buttonTextStyle: {
    color: '#000',
    paddingVertical: 15,
    fontSize: 15,
    fontFamily: 'Nunito-Regular',
    fontWeight:'bold',
  },
  buttonStyle: {
    backgroundColor: '#ffd700',
    color: '#000000',
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
    marginTop: 20,
  },
  inputHStyle: {
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 5,
    fontFamily: 'Lato-Regular',
    fontSize: 17,
  },
  inputStyle1: {
    color: 'red',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    width: '20%',
    height: '90%',
    padding: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  inputStyle2: {
    paddingLeft: 15,
    paddingRight: 10,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    width: '70%',
    height: '90%',
    padding: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  termStyle: {
    fontFamily: 'Lato-Regular',
    fontSize: 15,
    color: '#263238',
    marginLeft: 20
  },
  headerTextStyle: {
    alignSelf: 'flex-start',
  },
  inputStyle: {
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 3,
    borderColor: '#C7C7C7',
    width: '93%',
    height: '12%',
    padding: 10,
    marginLeft: 10,
    marginBottom: 20,
  },
  backButtonStyle: {
    marginTop: 30,
    marginLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
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

