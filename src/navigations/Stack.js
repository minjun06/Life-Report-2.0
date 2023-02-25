import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, List, Chat } from '../screens';


const Stack = createStackNavigator();

const StackNav = () => {
    return (
        <Stack.Navigator 
        initialRouteName='Home'
        screenOptions={{ cardStyle: {backgroundColor: '#ffffff' }}}
        >
            <Stack.Screen 
            name="Home" 
            component={Home} 
            options={{ headerShown: false }}
            />
            <Stack.Screen name="List" component={List} />
            <Stack.Screen name="Chat" component={Chat} />
        </Stack.Navigator>
    );
};

export default StackNav;
