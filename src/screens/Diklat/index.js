import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import React from 'react';
import { CardList, Header, HeaderSmallPic } from '../../components';
import { cv } from "../../../services";
import { useQuery } from "@tanstack/react-query";
import { colors } from '../../../utils';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';
import 'moment/locale/id'

const Diklat = () => {
  const navigation = useNavigation()
  const { data, isLoading } = useQuery(["cv"], () => cv());
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <HeaderSmallPic navigation={navigation} />
      </Header>
      <View style={styles.cardTitle}>
        <Text style={styles.title}>Riwayat Diklat</Text>
      </View>
      {
        isLoading ? (<Text>Loading...</Text>) :
        (
          <FlatList 
            data={data?.diklat}
            renderItem={item => {
              return (
                <CardList navigation={navigation} item={item}>
                  <View>
                    <Text style={styles.titleDiklat}>{item.item.nama_diklat}</Text>
                  </View>
                  <View style={styles.footer}>
                    <Text style={styles.contentDiklat}>{item.item.no_sertifikat}</Text>
                    <Text style={styles.contentDiklat}>{moment(item.item.tgl_sertifikat).format('L')}</Text>
                  </View>
                </CardList>
              )
            }}
            keyExtractor={item => item.diklat_id.toString()}
            showsVerticalScrollIndicator={false}
          />
        )
      }
    </SafeAreaView>
  )
}

export default Diklat

const styles = StyleSheet.create({
  cardTitle: {
    marginVertical: 10
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.BiruMuda,
    textAlign: 'center'
  },
  titleDiklat: {
    fontSize: 10,
    fontWeight: '600'
  },
  contentDiklat: {
    fontSize: 8,
    color: '#7F8487'
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  }
})