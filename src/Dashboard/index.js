import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'
import { AuthContext } from '../context'

export default function Dashboard() {
  const { signOut } = React.useContext(AuthContext)

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Dashboard SCREEN</Text>
      <Button onPress={() => signOut()} title="Logout" />
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
