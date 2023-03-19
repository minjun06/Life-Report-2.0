import React from 'react';
//import { StatusBar } from 'expo-status-bar';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, EnterName, List, Chat, VideoPage, Questions, ResultPage, Intro, Conclusion } from '../screens';

const Stack = createStackNavigator();

const StackNav = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ cardStyle: { backgroundColor: '#ffffff' }, headerShown: false }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        //options={{ headerShown: false }}
      />
      <Stack.Screen name="EnterName" component={EnterName} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="VideoPage" component={VideoPage} />
      <Stack.Screen name="Questions" component={Questions} />
      <Stack.Screen name="ResultPage" component={ResultPage} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Conclusion" component={Conclusion} />
    </Stack.Navigator>
  );
};

export default StackNav;
