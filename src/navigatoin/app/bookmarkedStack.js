import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import bookmarked from '../../pages/bookmarked'

const Stack = createStackNavigator();

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Bookmarked" component={bookmarked} options={{ headerShown: true }} />
        </Stack.Navigator>

    );
}