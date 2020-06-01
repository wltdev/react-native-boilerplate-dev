import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#FF6666',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold'
  }
})

export default function Loading() {
  return (
    <View style={styles.root}>
      <Text style={styles.text}>Loading....</Text>
    </View>
  )
}
