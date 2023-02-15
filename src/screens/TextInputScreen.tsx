import React, { useContext } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
} from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';
import { useForm } from '../hooks/useForm';
import { styles } from '../theme/appTheme';
import { CustomSwitch } from '../components/CustomSwitch';
import { ThemeContext } from '../context/theme/ThemeContext';

export const TextInputScreen = () => {
  const { onChange, form, isSubscribed } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const {
    theme: { colors, dividerColor },
  } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={styles.globalMargin}>
          <HeaderTitle title="Text Inputs" />

          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Name..."
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={value => onChange(value, 'name')}
            placeholderTextColor={dividerColor}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Email..."
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={value => onChange(value, 'email')}
            keyboardType="email-address"
            placeholderTextColor={dividerColor}
          />
          <TextInput
            style={{
              ...stylesScreen.inputStyle,
              borderColor: colors.text,
              color: colors.text,
            }}
            placeholder="Phone..."
            onChangeText={value => onChange(value, 'phone')}
            keyboardType="phone-pad"
            keyboardAppearance="dark"
            placeholderTextColor={dividerColor}
          />
          <View style={stylesScreen.switchRow}>
            <Text style={{ ...stylesScreen.switchText, color: colors.text }}>
              Subscribed
            </Text>
            <CustomSwitch
              isOn={isSubscribed}
              onChange={value => onChange(value, 'isSubscribed')}
            />
          </View>
          <HeaderTitle title={JSON.stringify(form, null, 3)} />
        </View>
        {/* <View style={{ height: 100 }} /> */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const stylesScreen = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  switchText: {
    fontSize: 25,
  },
});
