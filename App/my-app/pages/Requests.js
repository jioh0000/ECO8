import React, { useState } from "react"
import { View, Text, StyleSheet, TouchableOpacity } from "react-native"
import axios from "axios";

export default function Requests(){
    
    const [catData, setCatData] = useState([])

    const getData = () => {
        axios.get('https://cat-fact.herokuapp.com/facts').then(function(response) {
            console.log(response.status)
            var data = response.data
            setCatData(data)
            
        })
    }
    return(
        <View style={styles.container}>
            <Text>
                Requests
            </Text>
            <TouchableOpacity style={{
                padding: 10,
                backgroundColor: '#2F58CD',
                borderRadius: 10,
                marginTopL: 20
            }}
                onPress = {() => {
                    getData();
                }}
            >
                <Text style={{
                    color: 'white',
                    fontWeight: 'bold'
                }}>
                    Get Data
                </Text>
            </TouchableOpacity>
            {
                catData.map((el, ind) => (
                    <Text key = {ind}>
                        {el.text}
                    </Text>
                ))
            }
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