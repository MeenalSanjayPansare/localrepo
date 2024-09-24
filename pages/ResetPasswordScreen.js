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

import LanguageScreen from './LanguageScreen';
import SignInScreen from './SignInScreen';
import CreateAccountScreen from './CreateAccountScreen';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';
const ResetPasswordScreen = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState('');

    return (
        <View style={styles.mainBody}>
            <ScrollView
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{
                    flex: 1,
                    justifyContent: 'center',
                    alignContent: 'center',
                }}>
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
                            Sign in
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                        <View>
                            <Text style={styles.boldtext}>Forgot Password? </Text>
                        </View>
                        <View>
                            <Text style={styles.helloTextStyle}>
                                No Worries,{'\n'}
                                you can reset it anytime </Text>
                        </View>
                    <View>
                        <Text style={styles.titleStyle}>Email address</Text>
                        <TextInput style={styles.inputStyle}
                            value={userEmail}
                            onChangeText={(userEmail) => setUserEmail(userEmail)}>
                        </TextInput>
                    </View>
                    <TouchableOpacity style={styles.buttonStyle}
                        onPress={() => navigation.navigate(SignInScreen)}>
                        <Text style={styles.buttonTextStyle}>Reset Password</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default ResetPasswordScreen;

const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
        padding: 20,
    },
    boldtext: {
        flexDirection: 'row',
        color: '#263238',
        fontWeight: 'bold',
        fontFamily:'Nunito-Regular',
        fontSize: 30,
        marginTop: 20,
        marginBottom: '5%',
    },
    helloTextStyle: {
        color: '#263238',
        fontSize: 24,
        alignSelf: 'flex-start',
        fontFamily: 'Nunito-Regular',
        marginBottom: '10%',
    },
    titleStyle: {
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        marginBottom: '5%'
    },
    inputStyle: {
        color: '#000000',
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        borderWidth: 1.5,
        borderRadius: 3,
        borderColor: '#C7C7C7',
        backgroundColor: '#FFFFFF',
        marginBottom: '40%',
        height: '20%',
    },
    backButtonStyle: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    backButtonTextStyle: {
        color: '#000000',
        paddingVertical: 10,
        fontSize: 20,
        fontFamily: 'Lato-Regular',
        fontWeight: 'bold',
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
    buttonTextStyle: {
        color: '#232F39',
        fontSize: 20,
        fontFamily: 'Nunito-Regular',
        fontWeight: 'bold',
        marginTop:'4.5%'
    },
    buttonStyle: {
        backgroundColor: '#F8D57E',
        height: '10%',
        alignItems: 'center',
        borderRadius: 30,
    },
});

