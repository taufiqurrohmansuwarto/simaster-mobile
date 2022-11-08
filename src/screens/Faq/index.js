import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IconForward } from '../../../assets'
import { colors } from '../../../utils'
import { CardList, Gap, Header, HeaderWithIconBack } from '../../components'

const data = [
  {
    "id": 1,
    "question": "Bagaimana cara merubah password SI-Master ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum ornare dignissim. Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 2,
    "question": "Bagaimana prosedur usulan Kenaikan Pangkat ?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vestibulum ornare dignissim. Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum."
  },
  {
    "id": 3,
    "question": "Bagaimana prosedur usulan Ijin Belajar ?",
    "answer": "Etiam vestibulum ornare dignissim. Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 4,
    "question": "Bagaimana prosedur usulan mutasi masuk Pemprov Jatim, apakah harus dengan money ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  }
]

const Faq = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView>
      <Header>
        <HeaderWithIconBack navigation={navigation} title={'FAQ'} />
      </Header>
      <Gap height={20} />
      <View>
        <FlatList 
          data={data}
          renderItem={item => {
            return (
              <CardList screen={'FaqDetail'} navigation={navigation} item={item}>
                <View style={styles.cardContent}>
                  <View style={styles.question}>
                    <Text style={styles.text}>{item.item.question}</Text>
                  </View>
                  <View style={styles.icon}>
                    <IconForward />
                  </View>
                </View>
              </CardList>
            )
          }}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}

export default Faq

const styles = StyleSheet.create({
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  question: {
    flex: 3,
    paddingHorizontal: 5
  },
  icon: {
    flex: 0.2
  },
  text: {
    fontSize: 11,
    color: colors.BiruMuda,
    lineHeight: 16
  }
})