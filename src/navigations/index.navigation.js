import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashScreen from '../screens/flash.screen';
import LoginScreen from '../screens/logins/login.screen';
import RegisterRecruitmentScreen from '../screens/logins/registerRecruitment.screen';
import LoadingScreen from '../screens/loading.screen';
import RegisterSearchJobScreen from '../screens/logins/registerSearchJob.screen';
import ConfirmAccountScreen from '../screens/logins/confirmAccount.screen';
import CheckUsernameScreen from '../screens/logins/checkUsername.screen';
import ForgetAccountScreen from '../screens/logins/forgetPasssword.screen';
import TabBarScreen from '../navigations/tabbar.navigation';
import TabBarSearchJobScreen from '../navigations/tabbar.navigation';
import TabBarRecruitmentScreen from '../navigations/tabBar.Recruiment.navigation';
const Stack = createStackNavigator();

const config = {
    animation: 'spring',
    config: {
      stiffness: 1000,
      damping: 500,
      mass: 3,
      overshootClamping: true,
      restDisplacementThreshold: 0.01,
      restSpeedThreshold: 0.01,
    },
};
function StackNavigatorScreen() {
    return (
        <Stack.Navigator initialRouteName="FlashScreen">
        <Stack.Screen 
            name="FlashScreen" 
            component={FlashScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}
                />
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="RegisterSearchJobScreen" 
            component={RegisterSearchJobScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="RegisterRecruitmentScreen" 
            component={RegisterRecruitmentScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="ConfirmAccountScreen" 
            component={ConfirmAccountScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="CheckUsernameScreen" 
            component={CheckUsernameScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="ForgetAccountScreen" 
            component={ForgetAccountScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen
            name="LoadingScreen"
            component={LoadingScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="Tab" 
            component={TabBarSearchJobScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        <Stack.Screen 
            name="TabBarRecruitmentScreen" 
            component={TabBarRecruitmentScreen}
            options={{
                headerShown: false,
                transitionSpec: {
                    open: config,
                    close: config,
                },
            }}/>
        </Stack.Navigator>
    )
}
export default function NavigationScreen() {
    
    return (
        <NavigationContainer>
            <StackNavigatorScreen/>
        </NavigationContainer>
    );
};