import React, {useState} from 'react';
import {
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
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            height: 200,
          }}>
          <TextInput
            style={styles.inputField}
            value={email}
            onChangeText={setemail}
            keyboardType={'email-address'}
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputField: {
    height: 50,
    width: 250,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 20,
  },
});

export default App;
