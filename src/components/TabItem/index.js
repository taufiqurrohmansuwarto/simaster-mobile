import { StyleSheet, Text, TouchableOpacity, Image, View } from 'react-native'
import React from 'react'

const TabItem = ({label, onPress, isFocused}) => {
  const Icon = () => {
    if (label == "Beranda") return <Image style={styles.icon} source={require('../../../assets/home.png')} />
    if (label == "Video HCA") return <Image style={styles.icon} source={require('../../../assets/HCA.png')} />
    if (label == "F.A.Q") return <Image style={styles.icon} source={require('../../../assets/FAQ.png')} />
    if (label == "Akun") return <Image style={styles.icon} source={require('../../../assets/Akun.png')} />
  }

  return (
    <TouchableOpacity
      onPress={onPress}
    >
      <View style={styles.container}>
        <Icon />
        <Text style={{ color: isFocused ? '#ABD9FF' : '#FFFFFF' }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default TabItem

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 25,
    height: 25,
    marginBottom: 3,
  },
})