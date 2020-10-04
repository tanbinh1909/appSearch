import React, { Component } from 'react';
import {View} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import JobsScreen from '../screens/jobs/jobs.screen';
import SearchJobScreen from '../screens/homes/searchJob.screen';
import {getUser, getRegisterJob, getRegisterRecruitment} from '../helpers/storage.helper';
import {connect} from 'react-redux';
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
function JobsScreenStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Jobs" 
                component={JobsScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Việc Của Tôi',
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
                name="SearchTabJobScreen" 
                component={SearchJobScreen} 
                options={{
                    headerShown: true,
                    headerTitle:'Tìm kiếm',
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


export class JobsScreenStackNavigation extends Component {
    render (){
            return <JobsScreenStack/>
    }
}
const mapStateToProps =(state) =>{
    return{}
}
const mapDispatchToProps =(dispatch)=> {
    return {
    }

}
export default connect(mapStateToProps, mapDispatchToProps) (JobsScreenStackNavigation)