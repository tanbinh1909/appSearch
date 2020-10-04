import React, { Component } from 'react';
import {TouchableOpacity, Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import RecruitmentScreen from '../screens/jobs/recruitment.screen';
import AddPostRecruitmentScreen from '../screens/jobs/addPostRecruitment.screen';
import RecruitmentPostDetailScreen from '../screens/jobs/recruitmentPostDetail.screen';
import UpdatePostRecruitmentScreen from '../screens/jobs/updatePostRecruitment';

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
export default function RecruitmentPostcreenStack() {
    return (
        <Stack.Navigator>
                <Stack.Screen 
                    name="RecruitmentScreen" 
                    component={RecruitmentScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Danh sách bài đăng',
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
                    name="AddPostRecruitmentScreen" 
                    component={AddPostRecruitmentScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Tạo bài đăng',
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
                    name="UpdatePostRecruitmentScreen" 
                    component={UpdatePostRecruitmentScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Cập bài đăng',
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
                    name="RecruitmentPostDetailScreen" 
                    component={RecruitmentPostDetailScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Bài đăng chi tiết',
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