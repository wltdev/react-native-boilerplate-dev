import React from 'react'
import {
  View, Text, StyleSheet, Button
} from 'react-native'

export default function Product({ navigation }) {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Product SCREEN</Text>
      <Button onPress={() => navigation.navigate('Pelada')} title="Logout" />
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
