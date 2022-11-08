import React from 'react'
import { StyleSheet, View } from 'react-native'
import { colors } from '../../../utils'

const Card = ({ children, color }) => {
  return (
    <View style={styles.card(color)}>
      <View style={styles.cardContent}>
        {children}
      </View>
    </View>
  )
}

export default Card

const styles = StyleSheet.create({
  card: (color) => {
    return {
      borderRadius: 6,
      elevation: 3,
      backgroundColor: color,
      shadowColor: '#333',
      shadowOffset: {width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginHorizontal: 18,
      marginTop: 20,
      marginBottom: 18
    }
  },
  cardContent: {
    marginVertical: 6
  }
})