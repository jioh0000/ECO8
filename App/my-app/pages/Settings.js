// 모든 React-native 페이지에서 공통으로 들어가는 시작 코드 : Skeleton Code
import React from "react";
import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import Header from "../components/Header"

export default function Settings(props){

    return (
        <View style={styles.container}>
            <Header title="SETTINGS"/>
            <View style = {styles.innerContainer}>
                <Text>
                    Settings page
                </Text>
                <Button
                    title="Go to BottomSheet"
                    onPress={() => {
                        props.navigation.navigate("BottomSheetPage")
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