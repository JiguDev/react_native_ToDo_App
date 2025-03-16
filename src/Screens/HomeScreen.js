import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const HomeScreen = () => {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore()
      .collection('todos')
      .where('userId', '==', auth().currentUser.uid)
      .onSnapshot(snapshot => {
        setTodos(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
    return () => unsubscribe();
  }, []);

  const addTodo = async () => {
    if (todo.trim()) {
      await firestore().collection('todos').add({
        text: todo,
        completed: false,
        userId: auth().currentUser.uid,
      });
      setTodo('');
    }
  };

  const deleteTodo = async id => {
    await firestore().collection('todos').doc(id).delete();
  };

  return (
    <View>
      <TextInput
        placeholder="Enter a task"
        value={todo}
        onChangeText={setTodo}
      />
      <TouchableOpacity onPress={addTodo}>
        <Text>Add Task</Text>
      </TouchableOpacity>

      <FlatList
        data={todos}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTodo(item.id)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        initialNumToRender={10}
        maxToRenderPerBatch={5}
        windowSize={5}
      />
    </View>
  );
};

export default HomeScreen;
