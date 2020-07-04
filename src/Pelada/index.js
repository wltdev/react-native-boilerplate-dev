import React from 'react'
import {
  View, Text, StyleSheet
} from 'react-native'

export default function Pelada() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Cadastro de Pelada</Text>
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
