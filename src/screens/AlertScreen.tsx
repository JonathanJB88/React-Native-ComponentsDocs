import React from 'react';
import { View, Button, Alert } from 'react-native';
import prompt from 'react-native-prompt-android';
import { HeaderTitle } from '../components/HeaderTitle';
import { styles } from '../theme/appTheme';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Title',
      'This is the message',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel'),
          style: 'destructive',
        },
        {
          text: 'OK',
          onPress: () => console.log('OK'),
        },
      ],
      // { cancelable: true, onDismiss: () => console.log('onDismiss') }, //Not so recommended
    );
  };

  const showPrompt = () => {
    // Alert.prompt(
    //   'Title',
    //   'This is the message',
    //   (value: string) => console.log('Text: ', value),
    //   'plain-text',
    //   'Default text',
    //   // 'number-pad',  // --> Set keyboards
    // );
    prompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />

      <Button title="Show Alert" onPress={showAlert} />
      <View style={{ height: 10 }} />

      <Button title="Show Prompt" onPress={showPrompt} />
    </View>
  );
};
