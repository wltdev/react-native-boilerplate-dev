import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'

import { AuthContext } from '../context'
import { logout } from '../utils/security'

export default function Dashboard() {
  const { signOut } = React.useContext(AuthContext)

  const handlerLogout = async () => {
    await logout()
    signOut()
  }

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Dashboard SCREEN</Text>
      <Button onPress={handlerLogout} title="Logout" />
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ACDEEF',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})
