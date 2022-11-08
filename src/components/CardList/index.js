import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const CardList = ({ children, navigation, item, height, screen }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen, {item})}
    >
      <View style={styles.card(height)}>
          {children}
      </View>
    </TouchableOpacity>
  )
}

export default CardList

const styles = StyleSheet.create({
  card: (height) => {
    return {
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
      height: height
    }
  }
})