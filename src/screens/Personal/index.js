import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { colors } from '../../../utils';
import { Card, Header, HeaderSmallPic } from '../../components';
import { cv } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const Personal = ({ navigation }) => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  return (
    <View>
      <Header>
        <HeaderSmallPic navigation={navigation} />
      </Header>
      <Card color={colors.AbuAbu}>
        <View style={styles.cardTitle}>
          <Text style={styles.title}>Biodata</Text>
        </View>
        <View style={styles.cardBody}>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Nama</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nama}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>NIP</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nip_baru}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>NIK</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Jenis Kelamin</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Tempat/Tgl lahir</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Agama</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Alamat</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>RT/RW</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Kelurahan</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
          <View style={styles.content}>
            <View style={styles.key}>
              <Text style={styles.keyText}>Kecamatan</Text>
            </View>
            <View style={styles.value}>
              <Text style={styles.valueText}>{data?.nik}</Text>
            </View>
          </View>
        </View>
      </Card>
    </View>
  )
}

export default Personal

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