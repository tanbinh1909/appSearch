import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {getUser, getRegisterJob, getRegisterRecruitment} from '../helpers/storage.helper';
import {connect} from 'react-redux';
// screen search job
import HomeScreenStack from '../navigations/home.navigation';
import ChatScreenStack from '../navigations/chat.navigation';
import ProfileScreenStack from '../navigations/profile.navigation';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// screen post recruitment
import RecruitmentApplyJobScreenStack from '../navigations/RecruitmentApplyJob.navigation';
import RecruitmentPostcreenStack from '../navigations/RecruitmentPost.navigation';
import ProfileRecruitmentScreen from '../screens/profiles/proflieRecruitment.screen';
import NatificationScreen from '../screens/profiles/natification.screen';
import AccountScreen from '../screens/profiles/infoAccount.screen';
import HistoryDeleteApplyCVScreen from '../screens/profiles/historyDeleteApplyCV.screen';
import HistoryDeletePostRecruimentScreen from '../screens/profiles/historyDeletePostRecruiment.screen';
import HistoryDeletePostRecruimentDetailScreen from '../screens/profiles/historyDeletePostRecruimentDetail.screen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
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

function ProfileRecruitmentStack() {
    return (
        <Stack.Navigator initialRouteName="ProfileRecruitmentScreen">
            <Stack.Screen 
                name="ProfileRecruitmentScreen" 
                component={ProfileRecruitmentScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Tài khoản',
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
                name="AccountPostRecruimentScreen" 
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
                name="NatificationPostRecruimentScreen" 
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
                    name="HistoryDeleteApplyCVScreen" 
                    component={HistoryDeleteApplyCVScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Lịch sử xóa CV Ứng tuyển',
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
                    name="HistoryDeletePostRecruimentScreen" 
                    component={HistoryDeletePostRecruimentScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Lịch sử xóa bài đăng',
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
                    name="HistoryDeletePostRecruimentDetailScreen" 
                    component={HistoryDeletePostRecruimentDetailScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Chi tiết lịch sử bài đăng',
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
}

export default function TabBarRecruitmentScreen() {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#009688',
                showLabel: true,
                tabStyle: {
                    height:47,
                    
                }
                }}>
            <Tab.Screen 
                name="RecruitmentApplyJobScreenStack" 
                component={RecruitmentApplyJobScreenStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="home" color={color} size={25}/>
                    ) 
                }} />
            <Tab.Screen 
                name="RecruitmentPostcreenStack" 
                component={RecruitmentPostcreenStack}
                options={{
                    tabBarLabel: 'Bài đăng',
                    tabBarIcon: ({color}) => (
                        <Entypo name="shop" color={color} size={25}/>
                    )
                }} />
            <Tab.Screen 
                name="Search" 
                component={ChatScreenStack}
                options={{
                    tabBarLabel: 'Chat',
                    tabBarIcon: ({color}) => (
                        <MaterialIcons name="chat" color={color} size={25}/>
                    )
                        
                }} />
            <Tab.Screen 
                name="ProfileRecruitmentStack" 
                component={ProfileRecruitmentStack}
                options={{
                    tabBarLabel: 'Tài khoản',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" color={color} size={25}/>
                    )
                }} />
        </Tab.Navigator>
    )
};
