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
import SettingsScreen from './SettingsScreen';
import HomeActivity from './HomeActivity';
import LoginScreen from './LoginScreen';
import SignInScreen from './SignInScreen';

const CategoriesMain = ({ navigation }) => {

    const [items, setItems] = React.useState([
        { name: 'MEAL🥯', code: 'pink' },
        { name: '🍷DRINK🍷', code: '#2ecc71' },
        { name: '🥭🥭FRUIT🥭🥭', code: '#3498db' },
        { name: 'AMBIENCE✨', code: '#9b59b6' },
        { name: 'CARE TAKER ⚛️ ', code: 'red' },
        { name: '📞CONNECT☎', code: 'orange' },

    ]);
    return (

        <View style={styles.mainBody}>
            <View>
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
                
            </View>
            <Text style={styles.titleTextStyle}>Hello, <Text style={styles.nameTextStyle}>Shiva</Text></Text>

            <FlatGrid
                itemDimention={150}
                data={items}
                styles={styles.gridView}
                spacing={30}
                renderItem={({ item }) => (
                    <View style={[styles.itemContainer, { backgroundColor: 'pink' }]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.code}</Text>
                        <Button style={styles.buttonStyle}
                            title={`Select`}
                            onPress={() => navigation.navigate(HomeActivity)}>
                        </Button>

                    </View>
                )} />
                <TouchableOpacity
                    style={styles.backButtonStyle}
                    activeOpacity={0.5}
                    onPress={() => navigation.navigate(SignInScreen)}>
                    <Image
                        source={require('../Image/arrow.png')}
                        style={styles.buttonImageIconStyle}
                    />
                    <View style={styles.buttonIconSeparatorStyle} />
                    <Text style={styles.buttonTextStyle}>
                        Back
                    </Text>
                </TouchableOpacity>
        </View>
        

    );
};

export default CategoriesMain;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#E5E5E5',
    },
    mainBody: {
        marginLeft: 5,
        marginTop: '10%',
    },
    titleTextStyle: {
        fontFamily: 'Nunito-Regular',
        color: '#263238',
        fontSize: 25,
        marginLeft: 15,
    },
    nameTextStyle: {
        fontWeight: 'bold',
    },
    gridView: {
        marginTop: 1,
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
    backButtonStyle: {
        color: "black",
        marginBottom: 4,
        marginLeft: 10,
        fontWeight: 'bold',
        fontSize: 20,
    },
    buttonImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
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