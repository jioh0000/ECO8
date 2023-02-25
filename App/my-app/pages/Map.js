// Create the Map Function component
// Add the Map screen to our navigator
// Implement the react-native-maps in the Map screen
// Add a header to the Map screen
// Show a map that fills the entire screen except the header
// Add the marker at your school


import React from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import MapView, { Marker } from 'react-native-maps';

export default function Map(){

    return(
        <View style={styles.container}>
            <Header title="MAP"/>
            <View style = {styles.innerContainer}>
                <MapView style={styles.map}
                    initialRegion={{
                        latitude: 33.4890,
                        longitude: 126.4983,
                        latitudeDelta: 0.0,
                        longitudeDelta: 0.0
                    }}>
                    <Marker
                        coordinate = {{
                            latitude: 33.4890,
                            longitude: 126.4983
                        }}
                        pinColor = {"purple"}
                        title = {'My School'}
                    />
                </MapView>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    map: {
        width: '100%',
        height: '100%'
    }
})