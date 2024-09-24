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
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';
import SignInScreen from './SignInScreen';
import CreateAccountScreen from './CreateAccountScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
import SettingsScreen from './SettingsScreen';
const Password = ({ navigation }) => {

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

                <View style={styles.titleStyle}>
                    <Text style={styles.titleTextStyle}>Password</Text>
                    <View>
                        <Text style={styles.headerTextStyle}>Email</Text>
                        <TextInput style={styles.inputStyle}>
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.headerTextStyle}>Old Password</Text>
                        <TextInput style={styles.inputStyle}>
                        </TextInput>
                    </View>
                    <View>
                        <Text style={styles.headerTextStyle}>New Password</Text>
                        <TextInput style={styles.inputStyle}>
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.saveButtonStyle}
                        onPress={() => navigation.navigate(SettingsScreen)}>
                        <Text style={styles.saveButtonTextStyle}>Save</Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </View>
    );
};
export default Password;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    titleTextStyle: {
        fontWeight: 'bold',
        fontFamily: 'Nunito-Regular',
        color: '#263238',
        fontSize: 28,
        marginBottom: '5%',
        marginTop: '5%',
    },
    headerTextStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        color: '#263238',
        marginBottom: '5%',
    },
   titleStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        marginLeft: 30,
        marginRight: 35,
        marginBottom: 15,
    },
    inputStyle: {
        fontFamily: 'Lato-Regular',
        fontSize: 20,
        borderWidth: 1,
        borderRadius: 3,
        color: '#000000',
        borderColor: '#C7C7C7',
        backgroundColor: '#FFFFFF',
        height: 55,
        padding: 10,
        marginBottom: 20,
    },
    backButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginLeft: 20,
    },
    backIconStyle: {
        height: 20,
        width: 20,
        resizeMode: 'stretch',
    },
    backButtonTextStyle: {
        color: '#000000',
        paddingVertical: 17,
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'Lato-Regular',
    },
    buttonIconSeparatorStyle: {
        backgroundColor: '#f8f8ff',
        width: 5,
    },
    saveButtonStyle: {
        backgroundColor: '#F8D57E',
        borderRadius: 30,
        marginTop: '60%',
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

