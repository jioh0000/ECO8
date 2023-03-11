import React from "react"
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native"

export default function Longin(props) {
    return (
        <View style={styles.container}>
            <Text style={{
                fontSize: 30,
                fontWeight: 'bold',
                marginLeft: 20
            }}>
                Login
            </Text>
            <TextInput style={{
                marginLeft: 20,
                backgroundColor: "#EEEEEE",
                padding: 15,
                marginRight: 20,
                fontSize: 20,
                marginTop: 50,
                borderRadius: 15
            }}
            placeholder="Username"
            />
            <TextInput style={{
                marginLeft: 20,
                backgroundColor: "#EEEEEE",
                padding: 15,
                marginRight: 20,
                fontSize: 20,
                marginTop: 10,
                borderRadius: 15
            }}
            placeholder="Password"
            />
            <TouchableOpacity
                style={{
                    backgroundColor: '#2B3A55',
                    marginLeft: 20,
                    marginRight: 20,
                    marginTop: 20,
                    padding: 15,
                    borderRadius: 15
                }}
                onPress = {() => {
                    props.navigation.navigate("MainStackScreen")
                }}
            >
                <Text style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    color: 'white'
                }}>
                    Login
                </Text>
            </TouchableOpacity>
            <Text style={{
                textAlign: 'center',
                marginTop: 5
            }}>
                Don't have an account?
                <Text style={{
                    fontWeight: 'bold'
                }}
                onPress = {() => {
                    props.navigation.navigate("SignUp")
                }}> 
                    Sign Up
                </Text>
                
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})