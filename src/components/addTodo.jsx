import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './style';
import { useState } from 'react';

export default function AddTodoList({ onTodoAdd }) {
  const [todoTitle, setTodoTitle] = useState('');

  const textChangeHandler = (text) => {
    setTodoTitle(text);
  };
  const addTodoList = () => {
    let todo = {
      title: todoTitle,
      isCompleted: false,
    };

    console.log('Clicked');
    console.log(todo);
    onTodoAdd(todo);

    // To Clear Input after Add Item
    setTodoTitle('')
  };
  return (
    <View style={styles.addTodo}>
      <Text style={styles.header}>TODO APP By React native</Text>
      <View style={styles.addTodoContainer}>
        <TextInput
          onChangeText={textChangeHandler}
          style={styles.input}
          placeholder='Enter Your list'
          value={todoTitle}
        />
        <TouchableOpacity
          style={styles.btnContainer}
          onPress={addTodoList}
          disabled={!todoTitle}
        >
          <Text style={styles.btnText}>Add List</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
