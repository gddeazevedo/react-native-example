import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';


export default function TodoItem({ item, removeTodo }) {
    return (
        <TouchableOpacity onPress={() => removeTodo(item.key)}>
            <Text style={styles.item}>{item.text}</Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10
    }
});