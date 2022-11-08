import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { useQuery } from '@tanstack/react-query';
import { cv } from '../../../services';
import { Card, Gap, Header, HeaderWithIconBack } from '../../components';
import { colors } from '../../../utils';
import authContext from '../../context/auth.context';

const organization = data => {
  return data[0]?.name
}

const About = ({ navigation }) => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  const {logout} = useContext(authContext)

  return (
    <SafeAreaView>
      <Header>
        <HeaderWithIconBack navigation={navigation} title={'Akun'} />
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
        <Text style={styles.textTitle}>Tentang Aplikasi</Text>
        <Card color={colors.BiruMuda}>
          <Text style={styles.textContent}>
            Aplikasi SIMASTER Mobile digunakan .....
          </Text>
        </Card>
        <Gap height={10} />
        <TouchableOpacity onPress={logout}>
          <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default About

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '700'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  iconBack: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 33,
    marginBottom: 10
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
  textTitle: {
    fontSize: 12,
    color: colors.BiruMuda,
    fontWeight: '800'
  },
  textContent: {
    color: colors.Putih,
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '500'
  }
})