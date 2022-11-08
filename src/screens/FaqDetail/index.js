import React from 'react'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { colors } from '../../../utils'
import { Card, CardList, Header, HeaderWithIconBack } from '../../components'

const FaqDetail = ({ navigation, route }) => {
  const { item } = route.params.item

  return (
    <SafeAreaView>
      <Header>
        <HeaderWithIconBack navigation={navigation} title={'FAQ'} />
      </Header>
      <Card color={colors.AbuAbu}>
          <Text style={styles.text}>{item.question}</Text>
      </Card>
      <CardList>
        <Text style={styles.text}>{item.answer}</Text>
      </CardList>
    </SafeAreaView>
  )
}

export default FaqDetail

const styles = StyleSheet.create({
  text: {
    fontSize: 11,
    color: colors.BiruMuda,
    lineHeight: 16
  }
})