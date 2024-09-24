import React, { useState, useEffect} from 'react';
import { FlatGrid } from 'react-native-super-grid';

 
import {
    ActivityIndicator,
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeActivity from './HomeActivity';


const SubCategoriesMain = ({ navigation }) => {
    
    const [ items, setItems ] = React.useState ([
        { name: 'MEAL1', code: '#1abc9c' },
        { name: 'MEAL1', code: '#2ecc71' },
        { name: 'MEAL1', code: '#3498db' },
        { name: 'MEAL1', code: '#9b59b6' },
        { name: 'MEAL1 TAKER', code: 'red' },
        { name: 'MEAL1', code: 'white' },
    
    ]);
    return (
        <View style={styles.hellotextstyle}>
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
                <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}
              onPress={() => navigation.navigate(HomeActivity)}>
              <Text style={styles.buttonTextStyle}>Picture</Text>
            </TouchableOpacity>
            </View>
        )}/>
        </View>
        
        
    );
};

export default SubCategoriesMain;

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