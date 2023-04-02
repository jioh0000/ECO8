import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ImageBackground, ActivityIndicator, ScrollView } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, query, where, getDocs, doc, getDoc } from "firebase/firestore";
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';
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
const db = getFirestore();
​
export default function Favorites() {
    const [favorites, setFavorites] = useState([]);
    const [recentlyVisited, setRecentlyVisited] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showAllFavorites, setShowAllFavorites] = useState(false);
    const [showAllRecentlyVisited, setShowAllRecentlyVisited] = useState(false);
​
    useEffect(() => {
        const getFavorites = async () => {
            setLoading(true);
            const email = await AsyncStorage.getItem('email');
            const q = query(collection(db, "Favorites"), where('email', '==', email));
            const querySnapshot = await getDocs(q);
            var tempArray = [];
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                var data = doc.data();
                var tempDict = {
                    title: data.title,
                    image: require('../assets/jeju.jpeg')
                }
                tempArray.push(tempDict)
            });
            setFavorites(tempArray);
​
            const recentRef = doc(db, "Recently Visited", email);
            const recentSnap = await getDoc(recentRef);
​
            if(recentSnap.exists()) {
                var data = recentSnap.data();
                setRecentlyVisited(data["locations"])
            }
​
            setLoading(false);
        }
        getFavorites();
    }, [])
​
    return (
        <View style={styles.container}>
            <ScrollView
                style={{
                    marginTop: hp(10)
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={styles.title}
                    >
                        Favorites
                    </Text>
                    <Text
                        style={{
                            marginRight: hp(2),
                            fontSize: hp(1.8),
                            color: '#2F58CD'
                        }}
                        onPress={() => {
                            setShowAllFavorites(!showAllFavorites)
                        }}
                    >
                        {
                            showAllFavorites ?
                            'Show Less'
                            :
                            'Show All'
                        }
                    </Text>
                </View>
                {
                    loading ?
                        <ActivityIndicator 
                            style={{
                                marginTop: hp(5)
                            }}
                        />
                        :
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap'
                            }}
                        >
                            {
                                showAllFavorites ?
                                favorites.map((el, ind) => (
                                    <View
                                        key={ind}
                                        style={{
                                            marginVertical: hp(2),
                                            marginLeft: wp(3.33)
                                        }}
                                    >
                                        <ImageBackground
                                            source={el.image}
                                            style={{
                                                height: hp(15),
                                                width: wp(45),
                                            }}
                                            imageStyle={{
                                                borderRadius: hp(2)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    flex: 1,
                                                    borderRadius: hp(2),
                                                    padding: hp(1)
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: hp(2)
                                                    }}
                                                >
                                                    {
                                                        el.title
                                                    }
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                ))
                                :
                                favorites.slice(0,2).map((el, ind) => (
                                    <View
                                        key={ind}
                                        style={{
                                            marginVertical: hp(2),
                                            marginLeft: wp(3.33)
                                        }}
                                    >
                                        <ImageBackground
                                            source={el.image}
                                            style={{
                                                height: hp(15),
                                                width: wp(45),
                                            }}
                                            imageStyle={{
                                                borderRadius: hp(2)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    flex: 1,
                                                    borderRadius: hp(2),
                                                    padding: hp(1)
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: hp(2)
                                                    }}
                                                >
                                                    {
                                                        el.title
                                                    }
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                ))
                            }
                        </View>
                }
                <View
                    style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={styles.title}
                    >
                        Recently Visited
                    </Text>
                    <Text
                        style={{
                            marginRight: hp(2),
                            fontSize: hp(1.8),
                            color: '#2F58CD'
                        }}
                        onPress={() => {
                            setShowAllRecentlyVisited(!showAllRecentlyVisited)
                        }}
                    >
                        {
                            showAllRecentlyVisited ?
                            'Show Less'
                            :
                            'Show All'
                        }
                    </Text>
                </View>
                {
                    loading ?
                        <ActivityIndicator 
                            style={{
                                marginTop: hp(5)
                            }}
                        />
                        :
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: 'flex-start',
                                flexWrap: 'wrap'
                            }}
                        >
                            {
                                showAllRecentlyVisited ?
                                recentlyVisited.map((el, ind) => (
                                    <View
                                        key={ind}
                                        style={{
                                            marginVertical: hp(2),
                                            marginLeft: wp(3.33)
                                        }}
                                    >
                                        <ImageBackground
                                            source={el.image}
                                            style={{
                                                height: hp(15),
                                                width: wp(45),
                                            }}
                                            imageStyle={{
                                                borderRadius: hp(2)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    flex: 1,
                                                    borderRadius: hp(2),
                                                    padding: hp(1)
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: hp(2)
                                                    }}
                                                >
                                                    {
                                                        el
                                                    }
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                ))
                                :
                                recentlyVisited.slice(0,2).map((el, ind) => (
                                    <View
                                        key={ind}
                                        style={{
                                            marginVertical: hp(2),
                                            marginLeft: wp(3.33)
                                        }}
                                    >
                                        <ImageBackground
                                            source={el.image}
                                            style={{
                                                height: hp(15),
                                                width: wp(45),
                                            }}
                                            imageStyle={{
                                                borderRadius: hp(2)
                                            }}
                                        >
                                            <View
                                                style={{
                                                    backgroundColor: 'rgba(0,0,0,0.3)',
                                                    flex: 1,
                                                    borderRadius: hp(2),
                                                    padding: hp(1)
                                                }}
                                            >
                                                <Text
                                                    style={{
                                                        color: 'white',
                                                        fontWeight: 'bold',
                                                        fontSize: hp(2)
                                                    }}
                                                >
                                                    {
                                                        el
                                                    }
                                                </Text>
                                            </View>
                                        </ImageBackground>
                                    </View>
                                ))
                            }
                        </View>
                }
            </ScrollView>
        </View>
    )
}
​
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        marginLeft: hp(2),
        fontSize: hp(2.5),
        fontWeight: 'bold'
    }
})