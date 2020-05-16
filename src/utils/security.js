import AsyncStorage from '@react-native-community/async-storage'

const ACCESS_TOKEN = '@socialApi'

export const login = async ( accessToken ) => 
    await AsyncStorage.setItem(ACCESS_TOKEN, accessToken)

export const logout = async () => 
   await AsyncStorage.removeItem(ACCESS_TOKEN)

export const getAccessToken = async () => 
    await AsyncStorage.getItem(ACCESS_TOKEN)

export const isLoggedIn = async () => {
  const token = await getAccessToken()

  return token !== undefined && token !== null
}