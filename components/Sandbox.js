import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.boxOne}>one</Text>
            <Text style={styles.boxTwo}>two</Text>
            
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
        backgroundColor: '#333'
    },
    boxOne: {
        flex: 2,
        backgroundColor: 'violet',
        padding:10,
    },
    boxTwo: {
        flex: 1,
        backgroundColor: 'gold',
        padding: 20
    },
    boxThree: {
        //flex: 2,
        backgroundColor: 'coral',
        padding: 30
    },
    boxFour: {
        //flex: 1,
        backgroundColor: 'skyblue',
        padding: 40
    }
});