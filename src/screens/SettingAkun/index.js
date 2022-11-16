import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard } from 'react-native'
import React, { useContext, useState } from 'react'
import { cv } from '../../../services';
import { useQuery } from '@tanstack/react-query';
import authContext from '../../context/auth.context';
import { Button, Gap, Header, HeaderWithIconBack, Input } from '../../components';
import { colors } from '../../../utils';
import { Instagram, Tiktok, Twitter, Youtube } from '../../../assets';

const organization = data => {
  return data[0]?.name
}

const SettingAkun = ({ navigation }) => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  const {logout} = useContext(authContext)
  const [form, setForm] = useState([{'password': ''}])

  const onInputChange = (value) => {
    setForm({
      'password': value
    })
  }

  return (
    <KeyboardAvoidingView behavior="position">
      <SafeAreaView>
        <Header>
          <HeaderWithIconBack navigation={navigation} title={'Akun'} />
        </Header>
        <View style={styles.userContainer}>
          <View style={styles.userPic}>
            <Image source={{uri:data?.foto}} style={styles.pic} />
          </View>
          <View style={styles.userInfo}>
            <Text style={styles.nama}>{data?.nama}</Text>
            <Text style={styles.jabatan}>{data?.jabatan.jabatan}</Text>
            <Text style={styles.opd}>{organization(data?.perangkat_daerah?.detail)}</Text>
          </View>
        </View>
        <View style={styles.otherContainer}>
          <Text style={styles.textTitle}>Setting Akun</Text>
          <Gap height={10} />
          <Input label={'Password'} value={form.password} onChange={value => onInputChange(value)} secureTextEntry={true} />
          <Gap height={15} />
          <Button title={'Update'} onPress={null} />
          <Gap height={20} />
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
    </KeyboardAvoidingView>
  )
}

export default SettingAkun

const styles = StyleSheet.create({
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
  iconMedsos: {
    flexDirection: 'row',
  },
})