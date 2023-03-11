import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./Home"
import Requests from "./Requests";
import Ionicons from "@expo/vector-icons/Ionicons"

const Tab = createBottomTabNavigator()

export default function MainStackScreen() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Home"
                component={Home}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="home-outline" color={color} size={size}/>
                    )
                  }}
            />
            <Tab.Screen
                name="Requests"
                component={Requests}
                options = {{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="arrow-redo-outline" color={color} size={size}/>
                    )
                  }}
            />
        </Tab.Navigator>
    )
}
