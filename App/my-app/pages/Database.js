import React, {useState} from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from "react-native";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSqX27chazWngauvncclnrub-WhScEmbE",
  authDomain: "jejuapp-1ae46.firebaseapp.com",
  projectId: "jejuapp-1ae46",
  storageBucket: "jejuapp-1ae46.appspot.com",
  messagingSenderId: "963611345040",
  appId: "1:963611345040:web:0624b1f97dd5e2ee3a1815",
  measurementId: "G-NYD1LVSLQW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const

export default function Database(){

    const [textData, setTextData] = useState("")

    return (
        <View style={styles.container}>
            <TextInput 
                style={{
                backgroundColor: '#E8E2E2',
                width: wp(80),
                padding: hp(2),
                borderRadius: hp(2),
                fontSize: hp(2)
                }}
                onChangeText = {setTextData}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: '#3E54AC',
                    padding: hp(2),
                    marginTop: hp(2),
                    borderRadius: 1000
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: 'bold'
                    }}>
                        Add to Data Base
                    </Text>
            </TouchableOpacity>
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