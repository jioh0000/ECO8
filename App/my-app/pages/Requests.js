import React from "react"
import { View, Text, StyleSheet  } from "react-native"

export default function Requests(){
    return(
        <View style={styles.container}>
            <Text>
                Requests
            </Text>
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