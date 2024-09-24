
import React, { useState, createRef, Component } from 'react';
import {
  Image,
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ScrollView,

} from 'react-native';
import LoginScreen from './LoginScreen';
import Categories from './Categories';
import Language from './Language';
import Password from './Password';
import PatientsInfo from './PatientInfo';
import GuardianInfo from './GuardianInfo';
import CategoriesMain from './CategoriesMain';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.mainBody}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View style={styles.headerStyle}>
          <Text style={styles.headingTextStyle}>Settings</Text>
          <View style={styles.headerSeparatorStyle} />
          <Image style={styles.crossImgStyle}
            source={require('../Image/img1.png')}>
          </Image>
        </View>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.buttonStyle2}
          onPress={() => navigation.navigate(PatientsInfo)}>
          <Image style={styles.nextArrowImgStyle}
            source={require('../Image/img2.png')}>
          </Image>
          <View style={styles.patientSeparatorStyle} />
          <Text style={styles.buttonTextStyle1}>Patient information</Text>
        </TouchableOpacity>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.buttonStyle2}
          onPress={() => navigation.navigate(GuardianInfo)}>
          <Image style={styles.nextArrowImgStyle}
            source={require('../Image/img2.png')}>
          </Image>
          <View style={styles.guardianSeparatorStyle} />
          <Text style={styles.buttonTextStyle1}>Guardian information</Text>
        </TouchableOpacity>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.buttonStyle2}
          onPress={() => navigation.navigate(Categories)}>
          <Image style={styles.nextArrowImgStyle}
            source={require('../Image/img2.png')}>
          </Image>
          <View style={styles.categoriesSeparatorStyle} />
          <Text style={styles.buttonTextStyle1}>Categories</Text>
        </TouchableOpacity>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.buttonStyle2}
          onPress={() => navigation.navigate(Language)}>
          <Image style={styles.nextArrowImgStyle}
            source={require('../Image/img2.png')}>
          </Image>
          <View style={styles.SeparatorStyle} />
          <Text style={styles.buttonTextStyle1}>Language</Text>
        </TouchableOpacity>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.buttonStyle2}
          onPress={() => navigation.navigate(Password)}>
          <Image style={styles.nextArrowImgStyle}
            source={require('../Image/img2.png')}>
          </Image>
          <View style={styles.SeparatorStyle} />
          <Text style={styles.buttonTextStyle1}>Password</Text>
        </TouchableOpacity>
        <View style={styles.columnSeperatorStyle} />
        <TouchableOpacity style={styles.logoutButtonStyle}
          onPress={() => navigation.navigate(LoginScreen)}>
          <Text style={styles.logoutButtonTextStyle}>Logout</Text>
        </TouchableOpacity>


      </ScrollView>
    </View>
  );
};

export default SettingsScreen;


const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#E5E5E5',
  },
  headingTextStyle: {
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    color: '#263238',
    fontSize: 30,
    marginBottom: '10%',
    marginLeft: '5%',
  },
  headerStyle: {
    flexDirection: 'row',
  },
  crossImgStyle: {
    height: 50,
    width: 50,
  },
  headerSeparatorStyle: {
    width: '50%',
  },
  columnSeperatorStyle: {
    backgroundColor: '#EBEBEB',
    width: '100%',
    height: 2
  },
  buttonStyle2: {
    flexDirection: 'row-reverse',
    backgroundColor: '#E5E5E5',
    height: 50,
    marginBottom: 2,
    width: '100%',
    paddingHorizontal: 10
  },
  buttonTextStyle1: {
    paddingVertical: '3%',
    fontSize: 20,
    fontFamily: 'Lato-Regular',
    color: '#263238',
  },
  nextArrowImgStyle: {
    height: 50,
    width: 50,
  },
  patientSeparatorStyle: {
    width: '39%',
  },
  guardianSeparatorStyle: {
    width: '35%',
  },
  categoriesSeparatorStyle: {
    width: '58%',
  },
  SeparatorStyle: {
    width: '61%',
  },
  logoutButtonTextStyle: {
    color: '#455A64',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Nunito-Regular',
    marginTop: '4%',
  },
  logoutButtonStyle: {
    backgroundColor: '#DBDBDB',
    height: '7%',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: '75%',
    marginLeft: 20,
    marginRight: 20,
  },
});