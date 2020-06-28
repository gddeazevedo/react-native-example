import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert } from 'react-native';
import Header from './components/Header.js';
import TodoItem from './components/TodoItem.js';
import TodoForm from './components/TodoForm.js';


export default function App() {
  const [todos, setTodos] = useState([
    { text: 'bla', key: 1 },
    { text: 'study more', key: 2 },
    { text: 'meditate', key: 3 }
  ]);

  const renderItem = ({ item }) => <TodoItem item={item} removeTodo={removeTodo} />;

  const removeTodo = key => {
    let newTodos = todos.filter(todo => todo.key !== key);
    setTodos(newTodos);
  };

  const addTodo = text => {
    text = text.trim();

    if (text.length) {
      let key = todos.length ? todos.slice().pop().key + 1 : 1;
      let todo = { text, key };
      setTodos([...todos, todo]);
    } else {
      Alert.alert('Oops!', 'You cannot add an empty todo!', [
        { text: 'Understood' }
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <Header title="My Todos" />
      <View style={styles.content}>
        <TodoForm addTodo={addTodo} />
        <View style={styles.list}>
          {
            todos.length ? (
              <FlatList
                data={todos}
                renderItem={renderItem} />
            ) : (
                <Text style={styles.text}>No Todos left :)</Text>
              )
          }
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40
  },
  list: {
    marginTop: 20
  },
  text: {
    textAlign: 'center'
  }
});
