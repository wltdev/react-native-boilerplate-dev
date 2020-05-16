import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from './Home'
import Login from './Login'
import Dashboard from './Dashboard'

const Stack = createStackNavigator()

export default function Routes() {
    return(
        <Stack.Navigator 
            initialRouteName="Login" 
            screenOptions={{ headerStyle:{ backgroundColor: '#7159c1' }, headerTintColor: '#FFFF' }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
        </Stack.Navigator>
    )
}