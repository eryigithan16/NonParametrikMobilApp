import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Detail from "./screens/Detail"
import Home from "./screens/Home";
import KiKare from "./screens/KiKare";
import Kolmogorov from "./screens/Kolmogorov";
import Lilliefors from './screens/Lilliefors';

const Stack = createStackNavigator();

const AppNavigationContainer = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"Home"}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Ki-Kare" component={KiKare} />
                <Stack.Screen name="Kolmogorov" component={Kolmogorov} />
                <Stack.Screen name="Lilliefors" component={Lilliefors} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};
export default AppNavigationContainer;
