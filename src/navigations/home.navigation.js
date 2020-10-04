import * as React from 'react';
import { createStackNavigator, TransitionSpecs, HeaderStyleInterpolators, TransitionPresets  } from '@react-navigation/stack';
import HomeScreen from '../screens/homes/home.screen';
import SearchScreen from '../screens/homes/search.screen';
import SearchJobScreen from '../screens/homes/searchJob.screen';
import SearchCompanyScreen from '../screens/homes/searchCompany.screen';
import PostJobScreen from '../screens/homes/postJob.screen';
import PostJobDetailScreen from '../screens/homes/postJobDetail.screen';
import ModalPostJobScreen from '../screens/homes/modalPostJob.screen';
import AddFileScreen from '../screens/profiles/addFile.screen';
import {createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
const Stack = createStackNavigator();

const MyTransition = {
    gestureDirection: 'horizontal',
    transitionSpec: {
      open: TransitionSpecs.TransitionIOSSpec,
      close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  }
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
function SearchTab() {
    return (
        <Tab.Navigator tabBarOptions = {{
            style: {
                backgroundColor:'#42A5F5'
            },
            inactiveTintColor: {
                
            }
        }}>
            <Tab.Screen name="Tìm công việc" component={SearchJobScreen} />
            <Tab.Screen name="Tìm công ty" component={SearchCompanyScreen} />
        </Tab.Navigator>
    )
}

export default function HomeScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
                options={{
                    headerShown: false,
                    transitionSpec: {
                        open: config,
                        close: config,
                    },
                }}/>
            <Stack.Screen 
                name="SearchJobScreen" 
                component={SearchJobScreen} 
                options={{
                    headerShown: true,
                    headerTitle: "Tìm kiếm",
                    headerStyle: {
                        height:40,
                        
                    },
                    headerTitleAlign:'center',
                    headerTitleStyle: {
                        fontSize: 18
                    },
                    ...TransitionPresets.RevealFromBottomAndroid  
                }}
                mode="modal"/>
                <Stack.Screen 
                    name="PostJobScreen" 
                    component={PostJobScreen} 
                    options={{
                        headerShown: true,
                        headerTitle: "Tất cả bài viết",
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
                    name="PostJobDetailScreen" 
                    component={PostJobDetailScreen} 
                    options={{
                        headerShown: true,
                        headerTitle: "Thông tin chi tiết",
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
                    name="AppLyFileCVScreen" 
                    component={AddFileScreen} 
                    options={{
                        headerShown: true,
                        headerTitle: "Thông tin hồ sơ",
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
                {/* <Stack.Screen 
                    name="ModalPostJobScreen" 
                    component={ModalPostJobScreen} 
                    options={{
                        headerShown: false,
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
                }}/> */}
        </Stack.Navigator>
    )
};