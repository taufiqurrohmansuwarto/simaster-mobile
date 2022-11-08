import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FlatListSlider } from 'react-native-flatlist-slider';
import { banner } from '../../../services';
import { useQuery } from '@tanstack/react-query';

const imageList = (images) => {
  const url = 'https://bkd.jatimprov.go.id/file_pemprov/bannerweb/';
  return images.map(img => ({...img, image:`${url}${img.gambar_sampul}`}))
}

const Slider = () => {
  const { data:images, isLoading:loadingImage } = useQuery(["banner"], () => banner());

  return (
    <View>
      {
        loadingImage ? <Text>loading...</Text> :
        <FlatListSlider 
          data={imageList(images)}
          /* data={[
            {
              "image": "https://kominfo.jatimprov.go.id/uploads/images/WhatsApp Image 2022-10-31 at 22.52.19.jpeg"
            }
          ]} */
          height={150}
          timer={5000}
          indicatorActiveWidth={15}
          animation
        />
      }
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({})