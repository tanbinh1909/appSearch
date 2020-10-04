import React, { Component } from 'react'
import { Text, View, AsyncStorage, StyleSheet, ImageBackground, Button, StatusBar } from 'react-native'
import {DotIndicator} from 'react-native-indicators'
import {getUser, getRegisterJob, getRegisterRecruitment, saveToken, removeToken} from '../helpers/storage.helper';
import CustomerApi from '../apis/customer.api';
import {connect} from 'react-redux';
import {GET_LOGIN} from '../actions/account.action';
export class FlashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userEmail: "",
            userJobEmail: "",
            userRecruitmentEmail: "",
            userPassword: "",
            userJobPassword: "",
            userRecruitmentPassword: ""
        }
    }
    UNSAFE_componentWillMount = async() => {
        const dataCustomer = await getRegisterJob();
        if (dataCustomer != null) {
            const data = {
                "username": dataCustomer.username,
                "password": dataCustomer.password
            }
            CustomerApi.login(data).then(response => {
                if (response.success) {
                    if (response.message  === "Success") {
                      const {token, role, customerId} = response.data;
                      removeToken();
                      saveToken(token);
                     this.props.getInforCustomer(customerId);
                      if(role == "ROLE_RECRUIMENT"){
                        this.props.navigation.replace("Tab");
                        }else {
                            this.props.navigation.replace("TabBarRecruitmentScreen");
                        }
                    }else {
                        this.props.navigation.replace("LoginScreen");    
                    }
                } else {
                    this.props.navigation.replace("LoginScreen");
                }
              }).catch(error => {
                this.props.navigation.replace("LoginScreen");
              });
        } else {
            this.props.navigation.replace("LoginScreen"); 
        }
        
    }
    render() {
        return ( 
        <ImageBackground source={require('../../assets/background.jpg')} style = { styles.container } >
            <StatusBar barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.fontText}>Tìm kiếm việc làm</Text>
            </View>
        </ImageBackground>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getInforCustomer: (id) => dispatch({type: GET_LOGIN, id})
    }
}

export default connect(null, mapDispatchToProps) (FlashScreen);
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009688'
    },
    header: {
        flex:1, 
        marginTop:230, 
        alignItems:'center'
    },
    footer: {
        flex:1,
    },
    fontText : {
        fontSize:30,
        fontWeight:'bold',
        color:'#009688'
    }
})