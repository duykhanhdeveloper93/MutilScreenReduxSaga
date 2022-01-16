import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Screen1 from '../subScreen/part1/Screen1';
import Screen21 from '../subScreen/part2/Screen21';
import Screen22 from '../subScreen/part2/Screen22';

import Screen4 from '../subScreen/part4/Screen4';
import Screen51 from '../subScreen/part5/Screen51';
import Screen52 from '../subScreen/part5/Screen52';
import Screen23 from '../subScreen/part2/Screen23';
import Screen3 from '../subScreen/part3/Screen3';


import Screen2 from '../subScreen/part2/Screen2';


const Stack = createNativeStackNavigator();


const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='screen1'
                    component={Screen1}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen2'
                    component={Screen2}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen3'
                    component={Screen3}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen4'
                    component={Screen4}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen51'
                    component={Screen51}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen52'
                    component={Screen52}
                    options={{ headerShown: false }} >
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main