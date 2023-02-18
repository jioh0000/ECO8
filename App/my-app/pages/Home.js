// 모든 React-native 페이지에서 공통으로 들어가는 시작 코드 : Skeleton Code
import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Home(props){

    return (
        <View style={styles.container}>
            <Text>
                Home page
            </Text>
            <Button
                title="Go to Settings"
                onPress={() => {
                    props.navigation.navigate("Settings")
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