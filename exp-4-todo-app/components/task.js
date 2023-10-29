import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const task = () => {
    return (
        <View style={styles.box}>
            <Text>Task1</Text>
        </View>
    )
}

export default task;

const styles = StyleSheet.create({
    box: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
});