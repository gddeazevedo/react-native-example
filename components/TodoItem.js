import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


export default function TodoItem({ item, removeTodo }) {
    return (
        <TouchableOpacity onPress={() => removeTodo(item.key)}>
            <View style={styles.item}>
                <MaterialIcons name="delete" size={18} color="#333" />
                <Text style={styles.text}>{item.text}</Text>
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 10
    },
    text: {
        marginLeft: 10
    }
});