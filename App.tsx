/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, Text, useColorScheme} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

export type Result = 'success' | 'error' | 'loading';

function jsonToFormData(json: any) {
  const formData = new FormData();
  formData.append(
    'json',
    new Blob([JSON.stringify(json)], {type: 'application/json'} as BlobOptions),
  );
  return formData;
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [result, setResult] = useState<Result>('success');

  useEffect(() => {
    const json = {
      foo: 'bar',
      baz: 123,
    };

    const formData = jsonToFormData(json);

    fetch('http://10.0.2.2:8080', {
      method: 'POST',
      body: formData,
    })
      .then(() => setResult('success'))
      .catch(() => setResult('error'));
  }, []);

  return (
    <SafeAreaView style={backgroundStyle}>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Text>{result}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
