import React from "react"
import { View, Text, StyleSheet, TextInput, Button } from "react-native"

export default function SignUp() {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize:20,
                fontWeight: "bold",
            }}>
                Adding Two Numbers
            </Text>
            <TextInput style={{
                backgroundColor: "#EEEEEE",
                width: "20%"
            }}
            />
            <TextInput style={{
                backgroundColor: "#EEEEEE"
            }}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})