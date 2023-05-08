import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const SetPasswordScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSetPassword = () => {
    // Your set password logic here
  };

  const handleBackToLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>
      <Text style={styles.setPasswordText}>Set Password</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Confirm Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setConfirmPassword(text)}
          value={confirmPassword}
        />
      </View>
      <TouchableOpacity style={styles.setPasswordBtn} onPress={handleSetPassword}>
        <Text style={styles.setPasswordTextBtn}>Set Password</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleBackToLoginPress}>
        <Text style={styles.loginText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#fb3958',
    marginBottom: 40,
  },
  setPasswordText: {
    fontSize: 20,
    color: '#003f5c',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#f2f2f2',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  setPasswordBtn: {
    width: '80%',
    backgroundColor: '#fb3958',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  setPasswordTextBtn: {
    color: 'white',
  },
  loginText: {
    color: '#003f5c',
    marginTop: 10,
  },
});

export default SetPasswordScreen;
