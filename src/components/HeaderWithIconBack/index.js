import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { IconBack } from '../../../assets'

const HeaderWithIconBack = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.title}>
        <Text style={styles.text}>Akun</Text>
      </View>
    </View>
  )
}

export default HeaderWithIconBack

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconBack: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1
  },
  title: {
    flex: 2
  },
  text: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700'
  },
})