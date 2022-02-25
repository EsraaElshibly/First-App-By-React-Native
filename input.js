import { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import {styles} from './style'

export default function Input() {
    const [name, setName] = useState('')
  
    const handleShowName = (name) => {
      setName(name)
    }
  
    const handleClearName = () => {
      setName('')
    }
    return (
      <View>
        <Text style={styles.text}>Hello Dear {name} !</Text>
        <TextInput style={styles.inp} placeholder='Enter Your Name' value={name} onChangeText={handleShowName} />
        <Button title='Click me' onPress={handleClearName}/>
        </View>
    );
  }