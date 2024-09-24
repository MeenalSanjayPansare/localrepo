/*import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
    TextInputComponent,
    TextInput

} from 'react-native';
import axios from 'axios';
import { exp } from 'react-native/Libraries/Animated/src/Easing';
const ApiCallScreen = () => {
    /*
    const getDataUsingGet = () => {
        fetch('http://jsonplaceholder.typicode.com/posts/1', { method: 'GET', })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    };
    const getDataUsingPost = () => {
        var dataToSend = { title: 'English', body: 'World', userId: 100 };
        var formBody = [];
        for (var key in dataToSend) {
            var encodedKey = encodeURIComponent(key);
            var encodedValue = encodeURIComponent(dataToSend[key]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        formBody = formBody.join('&');
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: formBody,
            headers: {
                'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((responseJson) => {
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(responseJson));
                console.log(responseJson);
            })
            .catch((error) => {
                alert(JSON.stringify(error));
                console.error(error);
            });
    };
    const getDataUsingSimpleGetCall = () => {
        axios
        .get('http://jsonplaceholder.typicode.com/posts/1')
        .then(function (response){
            alert(JSON.stringify(response.data));
        })
        .catch(function(error){
            alert(error.message);
        })
        .finally(function(){
            alert('finally Called');
        });
    };

  const getDataUsingAsyncAwaitGetCall = async () => {
    try {
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/posts/1',
      );
      alert(JSON.stringify(response.data));
    } catch (error) {
      // handle error
      alert(error.message);
    }
  };

  const postDataUsingSimplePostCall = () => {
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        title: 'foo',
        body: 'bar',
        userId: 1,
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
  };

  const multipleRequestsInSingleCall = () => {
    axios
      .all([
        axios
          .get('https://jsonplaceholder.typicode.com/posts/1')
          .then(function (response) {
            // handle success
            alert('Post 1 : ' + JSON.stringify(response.data));
          }),
        axios
          .get('https://jsonplaceholder.typicode.com/posts/2')
          .then(function (response) {
            // handle success
            alert('Post 2 : ' + JSON.stringify(response.data));
          }),
      ])
      .then(
        axios.spread(function (acct, perms) {
          // Both requests are now complete
          alert('Both requests are now complete');
        }),
      );
  };
  const axiosPostMethodSample = () => {
      axios.post('https://jsonplaceholder.typicode.com/users/', {user})
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
  state = {
    name: '',
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const user = {
      name: this.state.name
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }
    return (
        
            <View style={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'center'}}>
        Example of Axios Networking in React Native
      </Text>
      {/*Running GET Request}
      <TextInput
      placeholder='Name'>

      </TextInput>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={handleSubmit}>
        <Text>Simple Get Call</Text>
      </TouchableOpacity>

     

      <Text style={{textAlign: 'center', marginTop: 18}}>
        www.aboutreact.com
      </Text>
    </View>
    )
};
const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        backgroundColor: '#E5E5E5',
        padding: 20,
    },
    container: {
        justifyContent: 'center',
        flex: 1,
        padding: 16,
      },
      textStyle: {
        fontSize: 18,
        color: 'white',
      },
      buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#f4511e',
        padding: 10,
        marginVertical: 10,
      },
    buttonTextStyle: {
        color: '#000000',
        paddingVertical: 15,
        fontSize: 20,
        fontFamily: 'Nunito-Regular',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    signInButtonStyle: {
        backgroundColor: '#F8D57E',
        height: 55,
        borderRadius: 30,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        marginTop: '20%'
    },
    forgotButtonStyle: {
        backgroundColor: '#E5E5E5',
    },
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10,
        width: '100%',
        marginTop: 16,
      },
});
export default ApiCallScreen;*/