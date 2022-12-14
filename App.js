import React, {useState} from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  return (
    <SafeAreaView>
      {/* <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} /> */}
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flex: 1,
            height: 400,
          }}>
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={setemail}
            keyboardType={'email-address'}
            textContentType={'username'}
            autoComplete={'email'}
            autoCapitalize={'none'}
          />
          <TextInput
            style={styles.inputField}
            value={password}
            onChangeText={setpassword}
            textContentType={'password'}
            autoComplete={'password'}
            autoCapitalize={'none'}
          />
          <Button
            onPress={() => console.log('t')}
            title="Login"
            accessibilityLabel="Learn more about this purple button"
            styles={styles.button}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    width: 250,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'black',
    color: 'red',
  },
});

export default App;
