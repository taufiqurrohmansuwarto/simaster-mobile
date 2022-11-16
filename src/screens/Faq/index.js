import { useNavigation } from '@react-navigation/native'
import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { IconForward } from '../../../assets'
import { colors } from '../../../utils'
import { CardList, Gap, Header, HeaderWithIconBack, Input } from '../../components'

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
  },
  {
    "id": 5,
    "question": "Bagaimana prosedur usulan mutasi masuk Pemprov Jatim, apakah harus dengan money ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 6,
    "question": "Bagaimana prosedur usulan mutasi masuk Pemprov Jatim, apakah harus dengan money ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 7,
    "question": "Bagaimana prosedur usulan mutasi masuk Pemprov Jatim, apakah harus dengan money ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 8,
    "question": "kalau mau usul pensiun di bidang mana ya ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  },
  {
    "id": 9,
    "question": "Bagaimana prosedur usulan mutasi masuk Pemprov Jatim, apakah harus dengan uang ?",
    "answer": "Proin neque nulla, efficitur vitae mattis a, pellentesque eu dui. Donec laoreet vulputate eros, pharetra tempor dui lobortis consectetur. Curabitur quis tristique erat. Cras vitae nulla arcu. Fusce semper eleifend mauris non viverra. Curabitur tempor diam non ultrices condimentum. Suspendisse egestas dolor vel lacus hendrerit laoreet."
  }
]

const Faq = () => {
  const navigation = useNavigation()
  const [filteredData, setFilteredData] = useState([])
  const [masterData, setMasterData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setFilteredData(data)
    setMasterData(data)
  }, [])  

  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter(item => {
        const itemData = item.question ? item.question.toUpperCase() : ''.toUpperCase()
        const textData = text.toUpperCase()
        return itemData.indexOf(textData) > -1
      })
      setFilteredData(newData)
      setSearch(text)
    } else {
      setFilteredData(masterData)
      setSearch(text)
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header>
        <HeaderWithIconBack navigation={navigation} title={'FAQ'} />
      </Header>
      <View style={styles.search}>
        <Input placeholder="cari ..." onChangeText={text => searchFilter(text)} value={search} />
      </View>
      <Gap height={20} />
      <FlatList
        data={filteredData}
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
  search: {
    marginHorizontal: 48,
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