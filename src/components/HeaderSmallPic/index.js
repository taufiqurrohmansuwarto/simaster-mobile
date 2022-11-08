import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useQuery } from "@tanstack/react-query";
import { cv } from "../../../services";
import { IconBack } from '../../../assets';

const HeaderSmallPic = ({ navigation }) => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  return (
    <View style={styles.container}>
      <View style={styles.iconBack}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconBack width={20} height={20} />
        </TouchableOpacity>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.nama}>{data?.nama}</Text>
        <Text style={styles.jabatan}>{data?.jabatan.jabatan}</Text>
      </View>
      <View style={styles.userPic}>
        {/* <Image source={{uri:data.foto}} style={styles.pic} /> */}
      </View>
    </View>
  )
}

export default HeaderSmallPic

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
  userInfo: {
    flex: 2
  },
  nama: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'right'
  },
  jabatan: {
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'right'
  },
  userPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    width: 60,
    height: 60,
  },
})