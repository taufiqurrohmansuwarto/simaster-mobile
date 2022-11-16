import { useNavigation } from '@react-navigation/native';
import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { Image, StyleSheet, Text, View } from 'react-native';
import { Diklat, Jabatan, Kepegawaian, MenuLain, Pendidikan, Personal } from '../../../assets';
import { cv } from "../../../services";
import { Button, Gap, Header, IconBeranda } from '../../components';
import Slider from "../../components/Slider";
import authContext from "../../context/auth.context";

const joinOrganization = (data) => {
  return data?.map((item) => item?.name).join(" - ");
};

const organization = data => {
  return data?.[0]?.name
}

const Beranda = () => {
  const navigation = useNavigation()
  const { logout } = useContext(authContext);
  const { data, isLoading } = useQuery(["cv"], () => cv());

  return (
    <View>
      <Header>
        <View style={styles.container}>
          <View style={styles.userInfo}>
            <Text style={styles.nama}>{data?.nama}</Text>
            <Text style={styles.nip}>{data?.nip_baru}</Text>
            <Text style={styles.opd}>{organization(data?.perangkat_daerah?.detail)}</Text>
            {/* <Text style={styles.opd}>{joinOrganization(data?.perangkat_daerah?.detail)}</Text> */}
          </View>
          <View style={styles.userPic}>
            <Image source={{uri:data?.foto}} style={styles.pic} />
          </View>
        </View>
      </Header>
      
      <Gap height={15} />
      <Slider />
      <Button title="logout" onPress={logout} />
      <View style={styles.iconContainer}>
        <IconBeranda text="Personal" icon={<Personal width={60} height={60} />} navigation={navigation} />
        <IconBeranda text="Jabatan" icon={<Jabatan width={60} height={60} />} navigation={navigation} />
        <IconBeranda text="Kepegawaian" icon={<Kepegawaian width={60} height={60} />} navigation={navigation} />
        <IconBeranda text="Pendidikan" icon={<Pendidikan width={60} height={60} />} navigation={navigation} />
        <IconBeranda text="Diklat" icon={<Diklat width={60} height={60} />} navigation={navigation} />
        <IconBeranda text="Lainnya" icon={<MenuLain width={60} height={60} />} navigation={navigation} />
      </View>  
    </View>
  )
}

export default Beranda

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  userInfo: {
    flex: 2
  },
  nama: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'right'
  },
  nip: {
    fontSize: 10,
    color: '#ffffff',
    textAlign: 'right'
  },
  opd: {
    fontSize: 9,
    color: '#ffffff',
    textAlign: 'right'
  },
  userPic: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  pic: {
    width: 50,
    height: 50,
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent:'space-between', 
    flexWrap: 'wrap', 
    paddingHorizontal: 40
  },
  button: {
    paddingLeft: 18,
    paddingTop: 20,
    paddingBottom: 26
  }
})