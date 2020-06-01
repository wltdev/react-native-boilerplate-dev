import React, { useState, useEffect, useMemo } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// import { getAccessToken } from './utils/security'
import Login from './Login'
// import Product from './Product'
import Product from './Product'
import Dashboard from './Dashboard'
import Loading from './Loading'

import { AuthContext } from './context'

const AuthStack = createStackNavigator()
const AuthStackScreen = () => (
  <AuthStack.Navigator headerMode="none">
    <AuthStack.Screen name="Auth" component={Login} />
  </AuthStack.Navigator>
)

const Tabs = createBottomTabNavigator()
const TabsScreen = () => (
  <Tabs.Navigator>
    <Tabs.Screen name="Dashboard" component={Dashboard} />
    <Tabs.Screen name="Product" component={Product} />
  </Tabs.Navigator>
)


const RootStack = createStackNavigator()
const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={TabsScreen} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} />
    )}
  </RootStack.Navigator>
)

export default function Routes() {
  const [isLoading, setIsLoading] = useState(true)
  const [userToken, setUserToken] = useState(null)

  const authContext = useMemo(() => ({
    signIn: () => {
      setIsLoading(false)
      setUserToken('token-hash')
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
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
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
