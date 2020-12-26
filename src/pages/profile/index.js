import React from 'react'
import {View,Text,Button ,StyleSheet,TouchableOpacity} from 'react-native'
export default function Profile(props){
    return(
        <View>
            <Text>Profile index</Text>
            <Button
                title="Go to Details"
                onPress={() => props.navigation.navigate('Home')}
            />
        </View>
    )
}