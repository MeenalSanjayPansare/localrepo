import React, { useState } from 'react';
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View, onPress, initialState, Image } from "react-native";
import 'react-native-gesture-handler';
import SettingsScreen from './SettingsScreen';

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

const Language = ({ navigation }) => {

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
              <Text style={styles.titleTextStyle}>Language</Text>
            </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}/>
      <View>
        <TouchableOpacity style={styles.saveButtonStyle}
          // onPressIn={(selectedId) => selectedId(selectedId)}
          //onPress={handledSubmitPress}>
          onPressIn={() => navigation.navigate(SettingsScreen)}>
          <Text style={styles.saveButtonTextStyle}>Save</Text>
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
    padding: 20,
    fontFamily: 'Nunito-Regular',
    fontWeight: 'bold',
    color: '#263238',
    fontSize: 30,
  },
  saveButtonTextStyle: {
    color: '#232F39',
    paddingVertical: 18,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Nunito-Regular',
  },
  saveButtonStyle: {
    backgroundColor: '#F8D57E',
    height: 60,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 30,
    marginRight: 30,
    marginBottom: 20,
  },
  backButtonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 60,
    marginLeft: 20,
},
backButtonTextStyle:{
  color: '#000000',
  paddingVertical: 17,
  fontSize: 18,
  fontWeight: 'bold',
  fontFamily: 'Lato-Regular',
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
});

export default Language;



