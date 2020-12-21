import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from '@container/Login';
import HomeScreen from '@container/Home';
import Wishlist from '@container/Wishlist';
import EventDetailScreen from '@container/EventDetail';

const Stack = createStackNavigator();

class Routes extends React.Component {
    render() {
        return (
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="EventDetail" component={EventDetailScreen} />
                <Stack.Screen name="Wishlist" component={Wishlist} />
            </Stack.Navigator>
        );
    }
}

export default Routes;