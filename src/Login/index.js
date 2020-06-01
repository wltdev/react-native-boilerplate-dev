import React, { useEffect, useState } from 'react'
import {
  Text,
  Dimensions,
  View,
  Image,
  Button,
  Alert,
  ImageBackground,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { CommonActions } from '@react-navigation/native'

import bgImage from '../../assets/img/background.png'
import logo from '../../assets/img/logo.png'
import api from '../utils/api'
import { login, getAccessToken } from '../utils/security'
import { AuthContext } from '../context'

export default function Login({ navigation }) {
  const afterLogin = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 1,
        routes: [{ name: 'Home' }],
      }),
    )
  }

  getAccessToken().then((token) => {
    if (token) {
      afterLogin()
    }
  })

  const { control, handleSubmit, errors } = useForm()
  const [hiddenPass, setHiddenPass] = useState(true)

  const onSubmit = async (values) => {
    try {
      const { data } = await api.post('login', values)
      if (data.token) {
        await login(data.token)
        afterLogin()
      } else {
        Alert.alert('Deu ruuim aqui')
      }
    } catch (e) {
      // eslint-disable-next-line no-console
      console.log(e)
      Alert.alert('Deu erro mano')
    }
  }

  const hiddenPassHandler = () => {
    setHiddenPass(!hiddenPass)
  }

  const { signIn } = React.useContext(AuthContext)

  return (
    <ImageBackground source={bgImage} style={styles.backgroundContainer}>
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.logoText}>React Native Boilerplate</Text>
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name="user"
          size={20}
          color="rgba(255, 255, 255, 0.7)"
          style={styles.inputIcon}
        />
        <Controller
          as={TextInput}
          style={styles.input}
          control={control}
          name="email"
          onChange={(args) => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue="user@one.com"
        />
        {errors.email && <Text>is required.</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Icon
          name="key"
          size={20}
          color="rgba(255, 255, 255, 0.7)"
          style={styles.inputIcon}
        />
        <Controller
          as={TextInput}
          style={styles.input}
          control={control}
          name="password"
          onChange={(args) => args[0].nativeEvent.text}
          rules={{ required: true }}
          defaultValue="123456"
          secureTextEntry={hiddenPass}
        />
        <TouchableOpacity style={styles.btnEye} onPress={hiddenPassHandler}>
          <Icon
            name={hiddenPass ? 'eye' : 'eye-slash'}
            size={20}
            color="rgba(255, 255, 255, 0.7)"
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.btnLogin}
        // onPress={handleSubmit(onSubmit)}
        onPress={() => signIn()}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

const { height: HEIGHT, width: WIDTH } = Dimensions.get('window')

const styles = StyleSheet.create({
  backgroundContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
  },
  logoText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    color: 'rgba(255, 255, 255, 0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 10,
    left: 37,
  },
  btnEye: {
    position: 'absolute',
    top: 10,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 16,
    textAlign: 'center',
  },
})
