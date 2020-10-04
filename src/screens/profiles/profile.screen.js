import React, { Component } from 'react';
import { Text, View , StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeUser, getUser, clearAll} from '../../helpers/storage.helper';
import {connect} from 'react-redux';
export class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: ""
        }
    }
    logout = () => {
        Alert.alert(
            "Thông báo",
            "Bạn chắc chắn muốn đăng xuất?",
            [
            {
                text: "Không",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
            },
            { text: "Đồng ý", onPress: () => this.clearAcount() }
            ],
            { cancelable: false }
      );
    }
    clearAcount = async() => {
        clearAll();
        this.props.navigation.replace("LoginScreen");
    }
    renderProfile = () => {
        const {customers} = this.props;
        return (
            <View style={styles.containerProfile}>
                <View style={styles.account}>
                    <TouchableOpacity style={styles.buttonAccount}>
                        <Entypo style={styles.icon} name="user" size={75} color={'black'}/>
                    </TouchableOpacity>
                {
                    customers && customers.fullName != "" ? (
                        <Text style={styles.textAccount}>{customers.fullName.toUpperCase()}</Text>
                    ): (
                        <Text style={styles.textAccount}>Chưa có tên</Text>
                    )
                }
                </View>
                <View style={styles.addFile}>
                    <TouchableOpacity style={styles.buttonAddFile} onPress={() => this.props.navigation.navigate("AccountScreen")}>
                        <Text style={styles.textAddFile}>Thông tin tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    renderListSetting = () => {
        const {navigation} = this.props;
        return (
            <View style={styles.contaierListSetting}>
                <TouchableOpacity style={styles.bodySetting} onPress={() =>navigation.navigate("NatificationScreen")}>
                    <View style={styles.buttonSetting}>
                        <View style={{marginLeft:10}}>
                            <MaterialIcons name="notifications" color={'#212121'} size={25} />
                        </View>
                        <View style={{marginLeft:10, marginBottom:10}}>
                            <Text style={{fontWeight:'bold'}}>Thông báo</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bodySetting} onPress={() => navigation.navigate("DocumentScreen")}>
                    <View style={styles.buttonSetting}>
                        <View style={{marginLeft:10}}>
                            <Entypo name="publish" color={'#212121'} size={25} />
                        </View>
                        <View style={{marginLeft:10, marginBottom:10}}>
                            <Text style={{fontWeight:'bold'}}>Hồ sơ của bạn</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bodySetting} onPress={() => this.logout()}>
                    <View style={styles.buttonSetting}>
                        <View style={{marginLeft:10}}>
                            <MaterialCommunityIcons name="logout-variant" color={'#212121'} size={25} />
                        </View>
                        <View style={{marginLeft:10, marginBottom:10}}>
                            <Text style={{fontWeight:'bold'}}>Đăng xuất</Text>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{flex:1.5}}>
                    {this.renderProfile()}
                </View>
                <View style={{flex:3}}>
                    {this.renderListSetting()}
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        ...state.login
    }
}

const mapDispatchToProps = dispatch => {
    return {...dispatch}
}

export default connect(mapStateToProps, null) (ProfileScreen)

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection:'column'
    },
    icon: {
        padding:8, 
        marginLeft:4, 
    },
    containerProfile: {
        flex:1,
        flexDirection:'column',
    },
    contaierListSetting : {
        flex:1,
        flexDirection:'column',
    },
    account: {
        flex:2, 
        flexDirection:'row', 
        padding:30, 
        alignItems:'center'
    },
    buttonAccount: {
        borderWidth:2, 
        height:100, 
        width:100, 
        borderRadius:50
    },
    addFile : {
        flex:1, 
        alignItems:'center'
    },
    buttonAddFile: {
        height:40, 
        width:180, 
        backgroundColor:'#009688', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    },
    textAccount: {
        marginLeft:20, 
        fontSize:20
    },
    textAddFile: {
        fontSize:16
    },
    bodySetting: {
        flexDirection:'row',
        marginBottom:5, 
        marginTop:10
    },
    buttonSetting: {
        flex:9, 
        flexDirection:'row'
    }
})