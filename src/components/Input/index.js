import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { colors } from '../../../utils'
import Gap from '../Gap'

const Input = ({ label, ...rest }) => {
  return (
    <KeyboardAvoidingView>
      <Text style={styles.label}>{label}</Text>
      <Gap height={5} />
      <TextInput style={styles.input} {...rest} />
    </KeyboardAvoidingView>
  )
}

export default Input

const styles = StyleSheet.create({
  label: {
    fontSize: 11,
    color: colors.BiruMuda,
  },
  input: {
    height: 35,
    borderWidth: 1,
    borderColor: colors.BiruMuda,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 5
  },
})