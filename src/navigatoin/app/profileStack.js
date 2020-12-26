import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import profile from '../../pages/profile'

const Stack = createStackNavigator();

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Profile" component={profile} options={{ headerShown: true }} />
        </Stack.Navigator>

    );
}