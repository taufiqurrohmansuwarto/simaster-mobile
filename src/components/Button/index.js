import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'

const Button = ({onPress, title}) => {
  return (
    <Pressable onPress={onPress} style={styles.button({color: 'biru'})}>
      <Text style={styles.text({color: 'biru'})}>{title}</Text>
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  button: (style) => {
    if (style.color == 'biru') {
      return {
        backgroundColor: colors.BiruMuda,
        borderRadius: 3,
        width: 93,
        height: 20,
      }
    } else {
      return {
        backgroundColor: colors.Hijau,
        borderRadius: 6,
        width: 138,
        height: 33,
      }
    }
  },
  text: (style) => {
    if (style.color == 'biru') {
      return {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 18
      }
    } else {
      return {
        color: '#ffffff',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '600',
        lineHeight: 28
      }
    }
  }
})