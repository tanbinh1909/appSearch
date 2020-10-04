import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {getUser, getRegisterJob, getRegisterRecruitment} from '../helpers/storage.helper';
import {connect} from 'react-redux';
// screen search job
import HomeScreenStack from '../navigations/home.navigation';
import ChatScreenStack from '../navigations/chat.navigation';
import JobsScreenStackNavigation from '../navigations/jobs.navigation';
import ProfileScreenStack from '../navigations/profile.navigation';

import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// screen post recruitment
import RecruitmentApplyJobScreenStack from '../navigations/RecruitmentApplyJob.navigation';
import RecruitmentApplyJobScreen from '../screens/jobs/recruitmentApplyJob.screen';
import RecruitmentScreen from '../screens/jobs/recruitment.screen';
const Tab = createBottomTabNavigator();


export default  function TabBarSearchJobScreen() {
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
                name="Home" 
                component={HomeScreenStack}
                options={{
                    tabBarLabel: 'Trang chủ',
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="home" color={color} size={25}/>
                    ) 
                }} />
            <Tab.Screen 
                name="Product" 
                component={JobsScreenStackNavigation}
                options={{
                    tabBarLabel: 'Công việc',
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
                name="Profile" 
                component={ProfileScreenStack}
                options={{
                    tabBarLabel: 'Hồ sơ',
                    tabBarIcon: ({color}) => (
                        <FontAwesome name="user" color={color} size={25}/>
                    )
                }} />
        </Tab.Navigator>
    )
};





// export class TabBarScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             userEmail: "",
//             userJobEmail: "",
//             userRecruitmentEmail: "",
//             userPassword: "",
//             userJobPassword: "",
//             userRecruitmentPassword: ""
//         }
//     }
//     UNSAFE_componentWillMount = async() => {
//         const user = await getUser();
//         const userJob = await getRegisterJob();
//         const userRecruitment = await getRegisterRecruitment();
//         this.setState({
//             userEmail: user.email,
//             userPassword: user.password,
//             userJobEmail: userJob.email,
//             userJobPassword: userJob.password,
//             userRecruitmentEmail: userRecruitment.email,
//             userRecruitmentPassword: userRecruitment.password
//         })
//       }
//       render (){
//         const {userEmail, userPassword, userJobEmail, userJobPassword, userRecruitmentEmail, userRecruitmentPassword} = this.state;
//         if(userEmail == userJobEmail && userPassword== userJobPassword){
//             return <TabBarSearchJobScreen/>
//         }else if(userEmail == userRecruitmentEmail && userPassword == userRecruitmentPassword) {
//             return <TabBarRecruitmentScreen/>
//         }
//     }
// }
// const mapStateToProps =(state) =>{
//     return{}
// }
// const mapDispatchToProps =(dispatch)=> {
//     return {
//     }

// }
// export default connect(mapStateToProps, mapDispatchToProps) (TabBarScreen)