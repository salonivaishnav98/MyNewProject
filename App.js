import React, { useState } from 'react';
import { View, Text, TextInput, Button,ImageBackground, StyleSheet, StatusBar } from 'react-native';

const backgroundImage = require('./assets/images/bg.png');

const AppBar = ({ title }) => {
  return (
    <View style={styles.appbar}>
    <StatusBar backgroundColor="rgb(248, 206, 88)" barStyle="light-content" />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const App = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(true);

  const handleRegister = () => {

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    alert('Registration successful!');
    setIsRegistering(false);
  };

  const handleLogin = () => {
    setIsRegistering(false);
  };

  return (
    <View style={styles.container}>


      {isRegistering ? (
      <View style={styles.container}>

            <AppBar title="Register with skenu" />
        <View style={styles.formContainer}>

          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="white"
            value={username}
            onChangeText={text => setUsername(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="white"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="white"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="white"
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
            secureTextEntry
          />
          <Button
          style={styles.registerButton}
          marginTop='20'
          title="Register" onPress={handleRegister}
          />
          <Text style={styles.switchText}>Already have an account? <Text style={styles.link} onPress={handleLogin}>Login</Text></Text>
        </View>
        </View>
      ) :
      (
      <ImageBackground source={backgroundImage} style={styles.background}>
        <View style={styles.formContainer2}>
         <View style={styles.containerLogin}>
          <Text style={styles.title}>Sign in to your account</Text>
                   <TextInput
                     style={styles.input1}
                     placeholder="Email"

                     placeholderTextColor="black"
                     value={username}
                     onChangeText={text => setUsername(text)}
                   />
                   <TextInput
                     style={styles.input1}
                     placeholder="Password"
                     placeholderTextColor="black"
                     value={password}
                     onChangeText={text => setPassword(text)}
                     secureTextEntry
                   />
                   <Button style = {styles.loginButton}title="LOG IN" onPress={handleRegister} />
                   <Text style={styles.switchText1}><Text style={styles.link1} onPress={() => setIsRegistering(true)}>FOGET PASSWORD</Text></Text>
         </View>
        </View>
        </ImageBackground>
      )}
      <View style={styles.credentialsContainer}>
        {username !== '' && <Text style={styles.credentials}>Username: {username}</Text>}
        {email !== '' && <Text style={styles.credentials}>Email: {email}</Text>}
        {password !== '' && <Text style={styles.credentials}>Password: {password}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgb(1, 29, 69)"
  },
  formContainer: {
    padding: 30,
  },
  formContainer2:{
    padding:30,
    height:'100%',
    width:'100%'

  },
  containerLogin:{
  backgroundColor:"white",
  padding: 30,
  alignItems:"center",
  justifyContent: 'center',

  },
  credentialsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  credentials:{
  color:'white'
  },

  registerButton:{

    backgroundColor:'black'

  },

  loginButton: {

   },

  appbar: {
    backgroundColor: "rgb(248, 206, 88)", // Change the background color as needed
    height: 60, // Adjust the height as needed
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', // Make the app bar full-width
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  input: {
    height: 60,
    width: '100%',
    borderColor: 'transparent',
    backgroundColor: 'rgb(0,21,51)',
    marginBottom: 40,
    color:'white',
    paddingHorizontal: 10,
  },
    input1: {
      height: 60,
      width: '100%',
      borderColor:'rgb(248, 206, 88)',
      backgroundColor: 'rgb(248, 206, 88)',
      marginBottom: 10,
      marginTop:40,
      color:'black',
      paddingHorizontal: 10,
    },
  switchText: {
    marginTop: 30,
    textAlign: 'center',
    color: 'white',
  },
  link: {
    color: 'white',
    width:'bold'
  },
    switchText1: {
      marginTop: 30,
      textAlign: 'center',
      color: 'black',
    },
    link1: {
      color: 'black',
      width:'bold'
    },
});

export default App;
