import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { cv } from "../../../services";
import { useQuery } from "@tanstack/react-query";

const Pendidikan = () => {
  const { data, isLoading } = useQuery(["cv"], () => cv());
  return (
    <View  style={{flex:1}}>
      <Text>Pendidikannnn</Text>
      <ScrollView>
        <Text>{JSON.stringify(data)}</Text>
      </ScrollView>
    </View>
  )
}

export default Pendidikan

const styles = StyleSheet.create({})