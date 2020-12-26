import React from 'react'
import 'react-native-gesture-handler'
import { createStackNavigator } from '@react-navigation/stack'
import offers from '../../pages/offers'

const Stack = createStackNavigator();

export default function Navigation() {
    return (

        <Stack.Navigator>
            <Stack.Screen name="Offers" component={offers} options={{ headerShown: true }} />
        </Stack.Navigator>

    );
}