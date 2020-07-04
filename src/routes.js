import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'

import { getAccessToken } from './utils/security'
import Login from './Login'
import Product from './Product'
import Pelada from './Pelada'
import Dashboard from './Dashboard'
import Loading from './Loading'

import { AuthContext } from './context'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Auth" component={Login} />
  </AuthStack.Navigator>
)

const Drawer = createDrawerNavigator()
const DrawerScreens = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Product" component={Product} />
    <Drawer.Screen name="Pelada" component={Pelada} />
  </Drawer.Navigator>
)

const Tabs = createBottomTabNavigator()
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Dashboard" component={Dashboard} />
    <Tabs.Screen name="Product" component={DrawerScreens} />
  </Tabs.Navigator>
)


const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken
      ? (<RootStack.Screen name="App" component={TabsScreen} />)
      : (<RootStack.Screen name="Auth" component={AuthStackScreen} />)}
  </RootStack.Navigator>
)

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => ({
    signIn: (token) => {
      setIsLoading(false)
      setUserToken(token)
    },
    signUp: () => {
      setIsLoading(false)
      setUserToken('token-hash')
    },
    signOut: () => {
      setUserToken(null)
    }
  }))

  useEffect(() => {
    getAccessToken().then(
      (token) => {
        if (token) {
          setUserToken(token)
        }
        setIsLoading(false)
      }, () => setIsLoading(false)
    )
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer independent>
        <RootStackScreen userToken={userToken} />
      </NavigationContainer>
    </AuthContext.Provider>
  )
}
