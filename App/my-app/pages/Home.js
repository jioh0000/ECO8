// 모든 React-native 페이지에서 공통으로 들어가는 시작 코드 : Skeleton Code
import React, { useState} from "react";
import { View, Text, StyleSheet, Button, ImageBackground } from "react-native";
import Header from "../components/Header";

export default function Home(props){
    const [number, setNumber] = useState(0)

    return (
        <View style={styles.container}>
            <Header title="HOME" number = {number} setNumber = {setNumber}/>
            <ImageBackground
                source={require('../assets/homebackground.jpeg')}
                style = {{
                    width: '100%',
                    heigt: '100%'
                }}
            />
            <View style = {styles.innerContainer}>
                <Text>
                    {number}
                </Text>
                <Button
                    title="Go to Settings"
                    onPress={() => {
                        props.navigation.navigate("Settings")
                    }}
                />
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
    }
})