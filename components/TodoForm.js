import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';


export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('');

    const handleChangeText = value => setText(value);

    const handlePress = () => addTodo(text);

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder="new todo..." 
                onChangeText={handleChangeText}  />
            <Button title="Add Todo" onPress={handlePress} color="coral" />
        </View>
    );
}


const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    }
});