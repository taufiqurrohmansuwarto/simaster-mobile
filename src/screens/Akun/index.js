import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { Gap, Header, HeaderWithIconBack } from '../../components'
import { cv } from '../../../services';
import { useQuery } from '@tanstack/react-query';
import authContext from "../../context/auth.context";
import { colors } from '../../../utils';
import { Instagram, Tiktok, Twitter, Youtube } from '../../../assets';
import { useNavigation } from '@react-navigation/native';

const organization = data => {
  return data[0]?.name
}

const Akun = () => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  const { logout } = useContext(authContext);
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Header>
        <HeaderWithIconBack navigation={navigation} />
      </Header>
      <View style={styles.userContainer}>
        <View style={styles.userPic}>
          <Image source={{uri:data.foto}} style={styles.pic} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.nama}>{data?.nama}</Text>
          <Text style={styles.jabatan}>{data?.jabatan.jabatan}</Text>
          <Text style={styles.opd}>{organization(data?.perangkat_daerah?.detail)}</Text>
        </View>
      </View>
      <View style={styles.otherContainer}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingAkun')}>
          <Text style={styles.text}>Setting Akun</Text>
        </TouchableOpacity>
        <Gap height={10} />
        <Text style={styles.text}>Media Sosial</Text>
        <Gap height={10} />
        <View style={styles.iconMedsos}>
          <Instagram />
          <Gap width={15} />
          <Twitter />
          <Gap width={15} />
          <Youtube />
          <Gap width={15} />
          <Tiktok />
        </View>
        <Gap height={10} />
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.text}>Tentang Aplikasi</Text>
        </TouchableOpacity>
        <Gap height={10} />
        <TouchableOpacity onPress={logout}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Akun

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700'
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 33
  },
  userPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  userInfo: {
    flex: 2
  },
  nama: {
    fontSize: 10,
    color: colors.BiruMuda,
    textTransform: 'capitalize',
    fontWeight: '700',
    lineHeight: 16
  },
  jabatan: {
    fontSize: 10,
    color: colors.BiruMuda,
    lineHeight: 16,
    fontWeight: '500'
  },
  opd: {
    fontSize: 10,
    color: colors.BiruMuda,
    textTransform: 'capitalize',
    lineHeight: 16,
    fontWeight: '500'
  },
  pic: {
    width: 60,
    height: 60,
  },
  otherContainer: {
    marginHorizontal: 18
  },
  text: {
    fontSize: 10,
    color: colors.BiruMuda,
    fontWeight: '500'
  },
  iconMedsos: {
    flexDirection: 'row',
  }
})