import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, onPress, initialState, Image } from "react-native";
import 'react-native-gesture-handler';
import LoginScreen from './LoginScreen';

const DATA = [
  { id: "123", title: 'English' },
  { id: "124", title: 'मराठी' },
  { id: "125", title: 'हिन्दी', },
  { id: "126", title: 'Español', },
  { id: "127", title: 'Français', },
];

const Item = ({ item, onPress, style, }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, style,]}>
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

const LanguageScreen = ({ navigation }) => {

  const [selectedId, setSelectedId] = useState(null);
  const renderItem = ({ item }) => {
  const backgroundColor = item.id === selectedId ? "#FFEDBF" : "white";

    return (
      <View>
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          style={{ backgroundColor }}
        />
      </View>
    );
  };
  /*
  const handledSubmitPress = () => {
    
    if(!selectedId)
    {
      alert(SelectedId);
    }
    }*/
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.titleTextStyle}>Choose Language</Text>
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}/>
      <View>
        <TouchableOpacity style={styles.buttonStyle}
          // onPressIn={(selectedId) => selectedId(selectedId)}
          //onPress={handledSubmitPress}>
          onPressIn={() => navigation.navigate(LoginScreen)}>
          <Text style={styles.buttonTextStyle}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E5E5E5',
  },
  item: {
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Lato-Regular',
  },
  titleTextStyle: {
    padding: 10,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    color: '#263238',
    fontSize: 30,
  },
  buttonTextStyle: {
    color: '#232F39',
    paddingVertical: 18,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Nunito-Regular'
  },
  buttonStyle: {
    backgroundColor: '#F8D57E',
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
});

export default LanguageScreen;



