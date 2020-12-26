import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import profileStack from './profileStack'
import homeStack from './homeStack'
import offersStack from './offersStack'
import bookmarkedStack from './bookmarkedStack'
import searchStack from './searchStack'
const Tab = createBottomTabNavigator()
export default function tabBar() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Profile' component={profileStack} />
            <Tab.Screen name='Bookmarked' component={bookmarkedStack} />
            <Tab.Screen name='Home' component={homeStack} />
            <Tab.Screen name='Search' component={searchStack} />
            <Tab.Screen name='Offers' component={offersStack} />
        </Tab.Navigator>
    )
}
// screenOptions={({ route }) => ({
//     tabBarIcon: ({ focused, color, size }) => {
//       let iconName;

//       if (route.name === 'Home') {
//         iconName = focused
//           ? 'ios-information-circle'
//           : 'ios-information-circle-outline';
//       } else if (route.name === 'Settings') {
//         iconName = focused ? 'ios-list-box' : 'ios-list';
//       }

//       // You can return any component that you like here!
//       return <Ionicons name={iconName} size={size} color={color} />;
//     },
//   })}