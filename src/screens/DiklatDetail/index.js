import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../utils';
import { Card, Header, HeaderSmallPic } from '../../components';
import moment from 'moment/moment';
// import 'moment/locale/id'

const DiklatDetail = ({ navigation, route }) => {
  const { item } = route.params.item
  return (
    <View>
      <Header>
        <HeaderSmallPic navigation={navigation} />
      </Header>
      <Card>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>Detail Riwayat Diklat</Text>
        </View>
        <View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Jenis Diklat</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.diklat.name}</Text>
            </View>
          </View>
          <View style={styles.content}>            
            <View style={styles.key}>
              <Text style={styles.keyText}>Nama Diklat</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.nama_diklat}</Text>
            </View>
          </View>
          <View style={styles.content}>            
            <View style={styles.key}>
              <Text style={styles.keyText}>No. Sertifikat</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.no_sertifikat}</Text>
            </View>
          </View>
          <View style={styles.content}>            
            <View style={styles.key}>
              <Text style={styles.keyText}>Tgl Sertifikat</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{moment(item.tgl_sertifikat).format('LL')}</Text>
            </View>
          </View>
          <View style={styles.content}>            
            <View style={styles.key}>
              <Text style={styles.keyText}>Peran</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.peran.peran}</Text>
            </View>
          </View>
          <View style={styles.content}>            
            <View style={styles.key}>
              <Text style={styles.keyText}>JP</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.jml}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Status</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{item.aktif == 'Y' ? 'Aktif' : 'Non Aktif'}</Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default DiklatDetail

const styles = StyleSheet.create({
  cardTitle: {
    marginBottom: 15
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.BiruMuda,
    textAlign: 'center'
  },
  content: {
    flexDirection: 'row',
    marginVertical: 6
  },
  key: {
    flex: 1
  },
  keyText: {
    fontSize: 10
  },
  value: {
    flex: 2,
  },
  valueText: {
    fontSize: 10
  }
})