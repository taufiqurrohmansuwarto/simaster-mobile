import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils';

const Header = ({ children }) => {
  return (
    <View style={styles.card}>
      <View>
        {children}
      </View>      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
  card: {
    borderRadius: 9,
    elevation: 3,
    backgroundColor: colors.BiruMuda,
    shadowColor: '#333',
    shadowOffset: {width: 1, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    paddingHorizontal: 40,
    paddingVertical: 15,
    marginHorizontal: 18,
    marginTop: 40,
    marginBottom: 10
  }
})