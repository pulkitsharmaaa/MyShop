import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

import {RootStackParamList} from '../App';
type Props = NativeStackScreenProps<RootStackParamList, 'Signup'>;

const SignupPage = ({navigation}:Props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [selectedRadio, setSelectedRadio] = useState(0);

  const handleSignup = () => {
    if (!username || !email || !password || selectedRadio === 0) {
      setErrorMessage('Please fill in all fields');
    } else if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
    } else {
      console.log('Signup:', username, email, password);
      Alert.alert('Signup Successful.');
      navigation.navigate('Login');
    }
  };

  const isValidEmail = (value: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  };

  return (
    <ImageBackground
      source={require('../images/Gradient-Background-Wallpaper-015.jpg')}
      style={styles.backgroundImage}>
      <View style={styles.container}>
        <Image
          source={require('../images/add-user.png')}
          style={styles.iconstyle}
        />
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          style={styles.input}
        />
        <View style={styles.main}>
          <Text style={styles.radioText}>Gender : </Text>
          <TouchableOpacity onPress={() => setSelectedRadio(1)}>
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selectedRadio === 1 ? (
                  <View style={styles.radioBg}></View>
                ) : null}
              </View>
              <Text style={styles.radioText}>Male</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setSelectedRadio(2)}>
            <View style={styles.radioWrapper}>
              <View style={styles.radio}>
                {selectedRadio === 2 ? (
                  <View style={styles.radioBg}></View>
                ) : null}
              </View>
              <Text style={styles.radioText}>Female</Text>
            </View>
          </TouchableOpacity>
        </View>

        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
        <TouchableOpacity
          style={styles.loginButtonStyle}
          onPress={handleSignup}>
          <Text style={{color: 'white'}}>Signup</Text>
        </TouchableOpacity>
        <View style={styles.logincontainer}>
          <Text style={styles.buttonTextStyle}>
            Already have a account?{' '}
            <TouchableOpacity
              style={{}}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.clickhere}> click here </Text>
            </TouchableOpacity>{' '}
            to Login.
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconstyle: {
    height: 55,
    width: 55,
    marginBottom: 10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  input: {
    borderRadius: 15,
    borderColor: 'white',
    borderWidth: 1.5,
    height: 40,
    width: 280,
    marginBottom: 10,
    textAlign: 'center',
  },
  countryview: {
    flexDirection: 'row',
    marginLeft: -55,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
  },
  loginButtonStyle: {
    height: 35,
    width: 150,
    backgroundColor: '#0080FF',
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logincontainer: {
    marginTop: 10,
  },
  buttonTextStyle: {
    color: 'black',
  },
  main: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    border: 2,
    // borderWidth:1.5,
    borderColor: 'white',
    height: 45,
    width: 280,
    borderRadius: 15,
    marginBottom: 6,
  },
  radioText: {
    fontSize: 15,
    color: 'black',
  },
  radio: {
    borderColor: 'black',
    borderWidth: 2,
    height: 18,
    width: 18,
    borderRadius: 9,
    margin: 7,
  },
  radioBg: {
    backgroundColor: 'blue',
    height: 12,
    width: 12,
    borderRadius: 12,
    margin: 1,
  },
  radioWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  clickhere: {
    color: 'darkblue',
    fontSize: 15,
    alignItems: 'center',
  },
});

export default SignupPage;
