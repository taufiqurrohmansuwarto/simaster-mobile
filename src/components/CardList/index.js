import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const CardList = ({ children, navigation, item }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DiklatDetail', {item})}
    >
      <View style={styles.card}>
          {children}
      </View>
    </TouchableOpacity>
  )
}

export default CardList

const styles = StyleSheet.create({
  card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: colors.AbuAbu,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginHorizontal: 18,
    marginVertical: 5,
    height: 80
  },
})