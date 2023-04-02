import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ActivityIndicator } from "react-native"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Input } from "@rneui/themed";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
​
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
​
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
​


export default function SignUp(props) {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [confirmPasswordError, setConfirmPasswordError] = useState("");
    const [loading, setLoading] = useState(false);
​
    const register = () => {
        if(email == "")
        {
            setEmailError("Please enter an email.")
            return;
        }
        else if(name == "")
        {
            setNameError("Please enter your name.")
            return;
        }
        else if(password == "")
        {
            setPasswordError("Please enter a password.")
            return;
        }
        else if(confirmPassword == "")
        {
            setConfirmPasswordError("Please confirm your password.")
            return;
        }
        else if(password != confirmPassword)
        {
            setConfirmPasswordError("Password does not match.")
            return;
        }
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log("The user account is created.")
            setLoading(false);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setLoading(false);
        })
    }
​
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView
            >
                <Text
                    style={{
                        fontSize: 40,
                        fontWeight: 'bold',
                        marginLeft: 20,
                        marginTop: hp(20)
                    }}
                >
                    SignUp
                </Text>
                <Input 
                    style={{
                        backgroundColor: "#EEEEEE",
                        padding: 15,
                        fontSize: 15,
                        marginTop: 50,
                        borderRadius: 15
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0
                    }}
                    containerStyle={{
                        paddingHorizontal: hp(3)
                    }}
                    autoCapitalize={'none'}
                    placeholder="Email"
                    onChangeText={setEmail}
                    onChange={() => {
                        setEmailError("");
                    }}
                    errorMessage={emailError}
                />
                <Input 
                    style={{
                        backgroundColor: "#EEEEEE",
                        padding: 15,
                        fontSize: 15,
                        borderRadius: 15
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0
                    }}
                    containerStyle={{
                        paddingHorizontal: hp(3)
                    }}
                    placeholder="Name"
                    onChangeText={setName}
                    onChange={() => {
                        setNameError("");
                    }}
                    errorMessage={nameError}
                />
                <Input 
                    style={{
                        backgroundColor: "#EEEEEE",
                        padding: 15,
                        fontSize: 15,
                        borderRadius: 15
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0
                    }}
                    containerStyle={{
                        paddingHorizontal: hp(3)
                    }}
                    onChange={() => {
                        setPasswordError("");
                    }}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    placeholder="Password"
                    onChangeText={setPassword}
                    errorMessage={passwordError}
                />
                <Input 
                    style={{
                        backgroundColor: "#EEEEEE",
                        padding: 15,
                        fontSize: 15,
                        borderRadius: 15
                    }}
                    inputContainerStyle={{
                        borderBottomWidth: 0
                    }}
                    containerStyle={{
                        paddingHorizontal: hp(3)
                    }}
                    onChange={() => {
                        setConfirmPasswordError("");
                    }}
                    secureTextEntry={true}
                    autoCapitalize={'none'}
                    placeholder="Confirm Password"
                    onChangeText={setConfirmPassword}
                    errorMessage={confirmPasswordError}
                />
                <TouchableOpacity
                    style={{
                        backgroundColor: '#537FE7',
                        marginLeft: 20,
                        marginRight: 20,
                        marginTop: 20,
                        padding: 15,
                        borderRadius: 15
                    }}
                    onPress={() => {
                        register();
                    }}
                >
                    {
                        loading ?
                        <ActivityIndicator color={'white'} />
                        :
                        <Text
                            style={{
                                fontSize: 15,
                                textAlign: 'center',
                                fontWeight: 'bold',
                                color: 'white'
                            }}
                        >
                            Sign Up
                        </Text>
                    }
                </TouchableOpacity>
                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 5
                    }}
                >
                    Already have an account? 
                    <Text 
                        style={{fontWeight: 'bold'}}
                        onPress={() => {
                            props.navigation.navigate("Login")
                        }}
                    > Login</Text>
                </Text>
            </KeyboardAwareScrollView>
        </View>
    )
}
​
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white'
    }
})