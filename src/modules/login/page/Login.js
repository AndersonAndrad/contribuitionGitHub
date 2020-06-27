import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

// styles
import style from './Login.styles';

export default function Login() {
  const [userName, setUserName] = useState('');

  return (
    <View style={style.container}>
      <View style={style.titleContainer}>
        <Text style={style.titleText}>
          This app is just for you to keep watching your contributions on
          GitHub, I had this idea to help me in my studies like 30 days of
          programming for example, I hope it helps you.
        </Text>
      </View>
      <View style={style.inputContainer}>
        <Text style={style.titleLinkText}>Link for your GutHub</Text>
        <Text style={style.linkText}>https://github.com/{userName}</Text>
        <TextInput
          style={style.inputText}
          onChangeText={(text) => setUserName(text)}
        />
      </View>
      <View style={style.buttonContainer}>
        <TouchableOpacity style={style.button}>
          <Text style={style.textButton}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
