import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Splash from '../subScreen/SplashScreen/Splash';
import Login from '../subScreen/loginScreen/Login';
import SignIn from '../subScreen/signInScreen/SignIn';
import Verify from '../subScreen/verifyScreen/Verify';
import Introduce from '../subScreen/introduceScreen/Introduce';



const Stack = createNativeStackNavigator();


const Main = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='screen1'
                    component={Introduce}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen2'
                    component={Introduce}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen3'
                    component={Login}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen4'
                    component={SignIn}
                    options={{ headerShown: false }} >
                </Stack.Screen>
                <Stack.Screen name='screen51'
                    component={Verify}
                    options={{ headerShown: false }} >
                </Stack.Screen>

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Main