import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Header({ title }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 80,
        paddingTop: 46,
        backgroundColor: 'coral'
    },
    title: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold' 
    }
});