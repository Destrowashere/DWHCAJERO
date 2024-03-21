import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
 
export const RoundedButton = ({ text, onPress}) => {
    return (
    <TouchableOpacity
    style={styles.RoundedButton}
    onPress={() => onPress()}
    >
    <Text style={styles.textButton} >{ text}</Text>
    </TouchableOpacity>
    )
    }


    const styles = StyleSheet.create({
        RoundedButton: {
        width: '80%',
        height: 50,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        },
        textButton: {
        color: 'white',
        fontWeight:'bold',
        fontSize: 20,
        }
        });
