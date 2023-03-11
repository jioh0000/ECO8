import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import Ionicons from "@expo/vector-icons/Ionicons"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

export default function Lists(){

    // This is how usually store the long data --> Data Set
    const [data, setData] = useState([
        {
            "title": "McDonald's",
            "address": "Seoul, Gangnam",
            "type": "Restaurant"
        },
        {
            "title": "Naver",
            "address": "Gyeongi-do, Pangyo",
            "type": "Company"
        },
        {
            "title": "Lotteria",
            "address": "Seoul, Sinchon",
            "type": "Restaurant"
        },
        {
            "title": "Lotte World",
            "address": "Seoul, Jamsil",
            "type": "Amusement Park"
        }
    ])

    return (
        <View style={styles.container}>
            <Header title = {"LISTS"} />
            <View>
                {
                    data.map((el, ind) => (
                        <View key = {ind} style = {{ 
                            flexDirection: 'row', 
                            paddingHorizontal: 10,
                             paddingVertical: 20,
                           borderBottomWidth: 1,
                            borderBottomColor: '#EEEEEE',
                            marginHorizontal: 10
                        }}>
                            <View style = {{ 
                                width: '20%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Ionicons name={el.type == "Restaurant" ? "restaurant" : el.type == "Company" ? "briefcase" : "planet"} size={hp(6)}/>
                            </View>
                            <View style = {{ width: '80%', justifyContent: 'space-around' }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: hp(2)
                                }}>
                                    {el.title}
                                </Text>
                                <Text>
                                    {el.address}
                                </Text>
                            </View>
                        </View>
                    ))
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
})