import React from 'react'
import { View, Text, Button } from 'react-native'

import { logout } from '../utils/security'

export default function Home({ navigation }) {
    return (
        <View>
            <Text>HOME SCREEN</Text>
            <Button title="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
        </View>
    )
}