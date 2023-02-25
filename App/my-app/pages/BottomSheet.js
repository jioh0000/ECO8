import React, { useRef } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomSheet from "reanimated-bottom-sheet"
import Header from "../components/Header"

export default function BottomSheetPage(){
    const sheetRef = useRef(null)

    const sheetContent = () => {
        return (
            <View style={{
                backgroundColor: 'white',
                height: 500
            }}>
                <View style={{
                    height: 7,
                    width: 78,
                    backgroundColor: 'rgba(0,0,0,0.69)',
                    borderRadius: 50,
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginTop: 5
                }}>
                </View>
                <Text>
                    Bottom Sheet
                </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <Header title="BOTTOMSHEET" sheetRef = {sheetRef}/>
            <View style = {styles.innerContainer}>
                <TouchableOpacity style={{
                    backgroundColor: '#3E54AC',
                    padding: 20
                }}
                onPress = {() => {
                    sheetRef.current.snapTo(2)
                }}
                >
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        Open Botton Sheet
                    </Text>
                </TouchableOpacity>
                <BottomSheet
                    ref = {sheetRef}
                    snapPoints = {[0, 300, 500]}
                    initialSnap = {0}
                    enabledGestureInteraction = {true}
                    renderContent = {sheetContent}
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