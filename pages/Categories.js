import React, { useState, useEffect} from 'react';
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
import HomeActivity from './HomeActivity';
import LoginScreen from './LoginScreen';
import SignInScreen from './SignInScreen';

const Categories = ({ navigation }) => {
   
    const [ items, setItems ] = React.useState ([
        { name: 'MEAL', code: '#1abc9c' },
        { name: 'DRINK', code: '#2ecc71' },
        { name: 'FRUITS', code: '#3498db' },
        { name: 'AMBIENCE', code: '#9b59b6' },
        { name: 'CARE TAKER', code: 'red' },
        { name: 'CONNECT', code: 'white' },
    
    ]);
    return (
        
        <View style={styles.hellotextstyle}>
            <View>
        <Button style={styles.buttonStyle}
                title={`Back`}
                onPress={() => navigation.navigate(LoginScreen)}>
            </Button> 
            <Button style={styles.buttonStyle}
                title={`Back`}
                onPress={() => navigation.navigate(SignInScreen)}>
            </Button> 
        </View>
        <Text style={styles.WtextStyle}>Hello, <Text style={styles.boldText}>Shiva</Text></Text>
        
        <FlatGrid 
        itemDimention={150}
        data={items}
        styles={styles.gridView}
        spacing={40}
        renderItem = {({item}) => (
            <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                <Text style={styles.itemName}>{item.name}</Text>    
                <Text style={styles.itemCode}>{item.code}</Text>
                <Button style={styles.buttonStyle}
                title={`Picture`}
                onPress={() => navigation.navigate(HomeActivity)}>
            </Button> 
            
            </View>
        )}/>
        </View>
        
        
    );
};

export default Categories;

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
    activityIndicator: {
        alignItems: 'center',
        height: 50,
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
});