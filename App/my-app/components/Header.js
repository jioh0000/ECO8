import React from "react";
import { View, Text } from "react-native";

export default function Header(props){
    const {title, sheetRef, number, setNumber} = props;

    return (
        <View style = {{
            height: 90,
            backgroundColor: 'white',
            width: '100%',
            shadowColor: '#000',
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            padding: 10,
            justifyContent: 'flex-end',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontWeight: 'bold',
                fontSize: 20
            }}
            onPress = {() => {
                if(sheetRef){
                    sheetRef.current.snapTo(2)
                }
                if(setNumber){
                    setNumber(number+1)
                }
            }}>
                {title}
            </Text>
        </View>
    )
    
}