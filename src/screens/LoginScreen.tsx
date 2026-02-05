import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';
import CustomInput from '../components/CustomInput';
import PrimaryButton from '../components/PrimaryButton';
import { IMAGES } from '../components/Images';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;
const WIDTH = Dimensions.get('window').width;
const emailRegex = /^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,6}$/;
const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>('');
  const [passwordError, setPasswordError] = useState<string>('');

  const isFormValid =
    email.length > 0 && password.length > 0 && !emailError && !passwordError;

  const validateEmail = (value: string) => {
    setEmail(value);

    if (!value) {
      setEmailError('Email is required.');
    } else if (!emailRegex.test(value)) {
      setEmailError('Invalid email address.');
    } else {
      setEmailError('');
    }
  };

  const validatePassword = (value: string) => {
    setPassword(value);

    if (!value) {
      setPasswordError('Password is required.');
    } else if (!passwordRegex.test(value)) {
      setPasswordError(
        'Must include uppercase, number & symbol (min 6 chars).',
      );
    } else {
      setPasswordError('');
    }
  };

  const handleLogin = () => {
    if (!isFormValid) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigation.replace('Dashboard');
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      style={styles.MainLogin}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={{}}>
        <Text style={styles.titleTextStyle}>Welcome Back 👋</Text>
        <Text style={styles.subtitleText}>Login to manage your finances</Text>

        <CustomInput
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={validateEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
          maxLength={256}
        />

        <CustomInput
          label="Password"
          placeholder="Enter password"
          value={password}
          onChangeText={validatePassword}
          error={passwordError}
          isPassWord={true}
          maxLength={32}
        />

        <PrimaryButton
          title="Login"
          disabled={!isFormValid}
          loading={loading}
          onPress={handleLogin}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  MainLogin: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleTextStyle: {
    fontSize: 28,
    fontWeight: '700',
  },
  subtitleText: {
    fontSize: 14,
    color: '#666',
    marginTop: '2%',
    marginBottom: '6%',
  },
});