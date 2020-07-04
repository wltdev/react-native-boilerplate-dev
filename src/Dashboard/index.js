import React, { useEffect, useState } from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

// import { AuthContext } from '../context'
// import { logout } from '../utils/security'
import userRealm from '../database/UserModel'

export default function Dashboard({ navigation }) {
  // const { signOut } = React.useContext(AuthContext)

  // const handlerLogout = async () => {
  //   await logout()
  //   signOut()
  // }

  // const [userAdmin]

  // useEffect(() => {

  // }, [])

  return (
    <View style={styles.root}>
      <Text style={styles.text}>Home</Text>
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
