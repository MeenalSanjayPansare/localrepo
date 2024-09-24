import React, { useState, useEffect } from 'react';
import { FlatGrid } from 'react-native-super-grid';


import {
  Button,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,

} from 'react-native';
import SubCategoriesMain from './SubCategoriesMain';

import LoginScreen from './LoginScreen';
import SettingsScreen from './SettingsScreen';
import Categories from './Categories';
import CategoriesMain from './CategoriesMain';

const HomeActivity = ({ navigation }) => {

  const [items, setItems] = React.useState([
    { name: 'MEAL', code: 'purple' },
    { name: 'DRINK', code: 'black' },
    { name: 'FRUITS', code: '#3498bb' },
    { name: 'AMBIENCE', code: 'yellow' },
    { name: 'CARE TAKER', code: 'red' },
    { name: 'CONNECT', code: 'white' },

  ]);
  return (


    <View style={styles.hellotextstyle}>
      <TouchableOpacity
                    style={styles.backButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate(SettingsScreen)}>
                    <Image
                        source={require('../Image/mymedcom_logo.png')}
                        style={styles.logoStyle}
                    />
                    <View style={styles.logoIconSeparatorStyle} />
                    <Image style={styles.imgStyle1}
                        source={require('../Image/settingsicon.png')} />
                </TouchableOpacity>
      <Text style={styles.WtextStyle}>Select your task <Text style={styles.boldText}></Text></Text>
  
      <FlatGrid
        itemDimention={150}
        data={items}
        styles={styles.gridView}
        spacing={40}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer, { backgroundColor: item.code }]}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemCode}>{item.code}</Text>
            <Button style={styles.buttonStyle}
              title={`Select`}
              onPress={() => navigation.navigate(LoginScreen)}>
            </Button>

          </View>
        )} />
    </View>


  );
};

export default HomeActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: '#307ecc',
    backgroundColor: '#f8f8ff',
  },
  boldText: {
    fontWeight: 'bold',
  },
  WtextStyle: {
    padding: 19,
    fontFamily: 'TimesNewRomanPS-ItalicMT',
    color: 'black',
    fontSize: 30,
  },
  hellotextstyle: {
    marginLeft: 5,
    marginTop: 10,
  },
  
  gridView: {
    marginTop: 10,
    flex: 1,
  },
  itemContainer: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 7,
    padding: 10,
    height: 180,
    width: 165,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '700',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 15,
    color: '#fff',
  },
 
 
  setImgStyle1: {
    alignSelf:'flex-end',
    padding: 10,
    margin: 10,
    height:25,
    width: 25,
    resizeMode: 'stretch'
  },

  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    fontSize: 10,
    fontWeight: 'bold'
},
buttonIconSeparatorStyle: {
    width: 5,
    height: 40,
},
buttonTextStyle: {
    color: '#708090',
    paddingVertical: 15,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
},
imgStyle1: {
    padding: 10,
    margin: 10,
    height: 25,
    width: 25,
    resizeMode: 'stretch'
},
logoStyle:{
    padding: 10,
    margin: 10,
    height: '70%',
    width: '40%',
    resizeMode: 'stretch'
},
logoIconSeparatorStyle: {
    width: '40%',
    height: 40,
},
});
/* Dynamically Change React Navigation Value – Update navigationOptions
// https://aboutreact.com/dynamically-change-navigationoptions-value/

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';


const HomeActivity = ({navigation, route}) => {

  return (
    <SafeAreaView style={{ flex:1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Text style={styles.header}>
          Create Account
          {'\n'}
          1.Guardian Information {'\t'} 2.Patient Information
        </Text>
        <Text>Full Name</Text>
        <View style={styles.SectionStyle}>
        <TextInput style = {styles.input}/>
          </View>
          <Text>Email</Text>
        <View style={styles.SectionStyle}>
        <TextInput style = {styles.input}/>
        </View>
        <Text>Mobile Number</Text>
        <View style={styles.SectionStyle}>
        <TextInput style = {styles.input}/>
        </View>
        <Text>Password</Text>
        <View style={styles.SectionStyle}>
        <TextInput style = {styles.input}/>
        </View>
        </View>

      {/*
        <TouchableOpacity
          onPress={changeHeaderYellow}
          activeOpacity={0.7}
          style={styles.buttonStyle}>
          <Text style={styles.textStyle}>APPLY YELLOW COLOR</Text>
        </TouchableOpacity>
        </View>
      }


    </SafeAreaView>
  );

};

export default HomeActivity;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    marginTop: 300,
    fontSize: 25,
    marginVertical: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#808080',
    borderRadius: 2,
    marginTop: 12,
  },
  input: {
    alignContent: 'flex-start',
    borderWidth: 2,
    borderColor: 'black',
  },
  textStyle: {
    color: '#fff',
    textAlign: 'center',
  },
});*/