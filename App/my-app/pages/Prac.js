import React from "react"
import { View, Text, StyleSheet, Button, TextInput } from "react-native"

export default function Prac(){
    return(
        <View style={{ flex: 1 }}>
            <View style={styles.top}>
                <View style={{ marginRight: 70 }}>
                    <Text style={{
                        fontSize: 10,
                        color: '#C6C6C6'
                    }}>
                        Your current location
                    </Text>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>
                        Norway
                    </Text>
                </View>
                <View style={{ marginLeft: 70 }}>
                    <Text>
                        image
                    </Text>
                </View>
            </View>

            
        </View>
    )
}

const styles = StyleSheet.create({
    top: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
})