import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import {DotIndicator} from 'react-native-indicators'

export class LoadingScreen extends Component {
    UNSAFE_componentWillMount = () => {
        const {role} = this.props.route.params;
        setTimeout(() => {
            if(role == "ROLE_RECRUIMENT"){
                this.props.navigation.replace("Tab");
            }else {
                this.props.navigation.replace("TabBarRecruitmentScreen");
            }
        }, 3000)
    }
	//pok
    render() {
        return (
            <ImageBackground source={{uri:'../../assets/background.jpg'}}
                 style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <DotIndicator color="#c62828" size={13}/>
            </ImageBackground>
        )
    }
}

export default LoadingScreen
