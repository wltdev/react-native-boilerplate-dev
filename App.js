import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'react-native'

import Routes from './src/routes'

const App = () => (
  <NavigationContainer>
    <StatusBar barStyle="light-content" />
    <Routes />
  </NavigationContainer>
)

export default App
