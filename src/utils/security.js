/* eslint-disable no-underscore-dangle */
/* eslint-disable no-return-await */
/* eslint-disable implicit-arrow-linebreak */
import AsyncStorage from '@react-native-community/async-storage'
import userRealm from '../database/UserModel'

const ACCESS_TOKEN = '@socialApi'

export const login = async (data) => {
  const { token, user } = data

  const userData = userRealm.objectForPrimaryKey('user', user._id)

  if (!userData) {
    userRealm.write(() => {
      userRealm.create('user', {
        _id: user._id,
        name: user.name,
        email: user.email,
        position: 'lateral'
      })
    })
  }

  return await AsyncStorage.setItem(ACCESS_TOKEN, token)
}

export const logout = async () =>
  await AsyncStorage.removeItem(ACCESS_TOKEN)

export const getAccessToken = async () =>
  await AsyncStorage.getItem(ACCESS_TOKEN)

export const isLoggedIn = async () => {
  const token = await getAccessToken()

  return token !== undefined && token !== null
}
