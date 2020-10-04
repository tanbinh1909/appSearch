import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProflieScreen from '../screens/profiles/profile.screen';
import NatificationScreen from '../screens/profiles/natification.screen';
import AccountScreen from '../screens/profiles/infoAccount.screen';
import DocumentScreen from '../screens/profiles/document.screen';
import AddFileScreen from '../screens/profiles/addFile.screen';
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
export default function ProfileScreenStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen 
                name="Home" 
                component={ProflieScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Hồ Sơ Của Tôi',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
            <Stack.Screen 
                name="NatificationScreen" 
                component={NatificationScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Thông báo',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
            <Stack.Screen 
                name="DocumentScreen" 
                component={DocumentScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Danh sách CV',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
            <Stack.Screen 
                name="AccountScreen" 
                component={AccountScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Thông tin tài khoản',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
                <Stack.Screen 
                name="AddFileScreen" 
                component={AddFileScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Tải hồ sơ xin việc',
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
        </Stack.Navigator>
    )
};