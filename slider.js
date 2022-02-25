import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, View, Button, ImageStore } from 'react-native';
import {styles} from './style'

export default function Slider() {

    const [index, setIndex] = useState(0)

    let images = [
        'https://images.unsplash.com/photo-1645103008066-7cabc7512f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

        'https://images.unsplash.com/photo-1645102279389-71926ddb9a12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

        'https://images.unsplash.com/photo-1645053218952-14624f9d6e11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',

    ]

    const handleNextImage = () => {
        console.log(index);
        
        if (index < images.length-1) 
        {
            setIndex(index + 1)
        }
        console.log('pressed in next');
    }

    const handlePrevImage = () => {

        if (index > 0) 
        {
            setIndex(index-1)
            console.log('pressed in Previous');
            console.log(index);
        }
    }
  
  return (
    <View>
      <Image style={styles.pic} source={{uri: images[index] }} />
      <Button title='Previous' onPress={handlePrevImage}/>
      <Button title='Next' onPress={handleNextImage}/>
    </View>
  );
}


