import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RecruitmentApplyJobScreen from '../screens/jobs/recruitmentApplyJob.screen';
import RecruitmentApplyJobDetailScreen from '../screens/jobs/recruitmentApplyJobDetail.screen';
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
export default function RecruitmentApplyJobScreenStack() {
    return (
        <Stack.Navigator>
                <Stack.Screen 
                    name="RecruitmentApplyJobScreen" 
                    component={RecruitmentApplyJobScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Danh sách CV ứng tuyển',
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
                    name="RecruitmentApplyJobDetailScreen" 
                    component={RecruitmentApplyJobDetailScreen} 
                    options={{
                        headerShown: true,
                        headerTitle:'Chi tiết CV tuyển dụng',
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