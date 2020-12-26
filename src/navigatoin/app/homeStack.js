import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import home from '../../pages/home'

const Stack = createStackNavigator();

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Home" component={home} options={{ headerShown: true }} />
        </Stack.Navigator>

    );
}