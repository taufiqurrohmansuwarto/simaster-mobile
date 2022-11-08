import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { colors } from '../../../utils'
  
const IconBeranda = ({text, icon, navigation}) => {
  return (
    <View style={styles.iconWrapper}>
      <TouchableOpacity onPress={
          () => {
            switch(text) {
              case 'Personal':
                return navigation.navigate('Personal');
              case 'Jabatan':
                return navigation.navigate('Jabatan');
              case 'Kepegawaian':
                return navigation.navigate('Kepegawaian');
              case 'Pendidikan':
                return navigation.navigate('Pendidikan');
              case 'Diklat':
                return navigation.navigate('Diklat')
              case 'Lainnya':
                return navigation.navigate('Lainnya');
            }
          }
        }
      >
        { icon }
        <Text style={styles.iconText}>{text}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default IconBeranda

const styles = StyleSheet.create({
  iconWrapper: {
    marginTop: 15,
    marginHorizontal: 10
  },
  iconText: {
    fontSize: 10,
    color: colors.BiruMuda,
    textAlign: 'center',
    fontWeight: '600'
  }
})