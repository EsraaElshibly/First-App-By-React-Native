import { StatusBar } from 'expo-status-bar';
import { useState } from "react";
import { View } from 'react-native';
import Input from './input'
import Slider from './slider'
import AddTodoList from './src/components/addTodo'
import TodoList from './src/components/todo'

export default function App () {
    const [todos,setTodos] = useState([
      {
        title: "React Native Lecture",
        isCompleted: false
      },
      {
        title: "React Native Lab",
        isCompleted: false
      },
      {
        title: "Implement Tasks",
        isCompleted: false
      }
    ])

  const todoAddHandler = (todo)=>{
    setTodos([...todos,todo]);
  }

  const MarkItem = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const RemoveItem = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };
      

  return (
    <View style={{height:'100%'}}>

      {/* First Assign */}
      {/* <Input />
       <Slider /> */}

     {/* Second Assign */}

      <StatusBar hidden/>
      <AddTodoList onTodoAdd={todoAddHandler}/>
      <TodoList list={todos} MarkItem={MarkItem} RemoveItem={RemoveItem} />
    </View>
  )
};
