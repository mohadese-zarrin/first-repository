import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import search from '../../pages/search'

const Stack = createStackNavigator();

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Search" component={search} options={{ headerShown: true }} />
        </Stack.Navigator>

    );
}