import React, { Component } from 'react';
import { Text, View , TouchableOpacity, Alert} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {removeUser, getUser, clearAll} from '../../helpers/storage.helper';
import {connect} from 'react-redux';
import {Styles} from '../../css/container.style';
import {profileRecruitment} from '../../css/profile/profileRecruiment.style';
export class ProfileRecruitmentScreen extends Component {
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
            <View style={profileRecruitment.containerProfile}>
                <View style={profileRecruitment.account}>
                    <TouchableOpacity style={profileRecruitment.buttonAccount}>
                        <Entypo style={profileRecruitment.icon} name="user" size={75} color={'black'}/>
                    </TouchableOpacity>
                    {
                    customers && customers.fullName != "" ? (
                        <Text style={profileRecruitment.textAccount}>{customers.fullName.toUpperCase()}</Text>
                    ): (
                        <Text style={profileRecruitment.textAccount}>Chưa có tên</Text>
                    )
                     }
                </View>
                <View style={profileRecruitment.addFile}>
                    <TouchableOpacity style={profileRecruitment.buttonAddFile} onPress={() => this.props.navigation.navigate("AccountPostRecruimentScreen")}>
                        <Text style={profileRecruitment.textAddFile}>Thông tin tài khoản</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    renderListSetting = () => {
        const {navigation} = this.props;
        return (
            <View style={profileRecruitment.contaierListSetting}>
                <TouchableOpacity style={profileRecruitment.bodySetting} onPress={() =>navigation.navigate("HistoryDeleteApplyCVScreen")}>
                    <View style={profileRecruitment.buttonSetting}>
                        <View style={profileRecruitment.bodyVewIcon}>
                            <MaterialIcons name="history" color={'#212121'} size={25} />
                        </View>
                        <View style={profileRecruitment.bodyViewText}>
                            <Text style={profileRecruitment.fontText}>Lịch sử xóa CV Ứng tuyển</Text>
                        </View>
                    </View>
                    <View style={profileRecruitment.icon}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={profileRecruitment.bodySetting} onPress={() =>navigation.navigate("HistoryDeletePostRecruimentScreen")}>
                    <View style={profileRecruitment.buttonSetting}>
                        <View style={profileRecruitment.bodyVewIcon}>
                            <MaterialIcons name="history" color={'#212121'} size={25} />
                        </View>
                        <View style={profileRecruitment.bodyViewText}>
                            <Text style={profileRecruitment.fontText}>Lịch sử xóa bài đăng</Text>
                        </View>
                    </View>
                    <View style={profileRecruitment.icon}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={profileRecruitment.bodySetting} onPress={() =>navigation.navigate("NatificationPostRecruimentScreen")}>
                    <View style={profileRecruitment.buttonSetting}>
                        <View style={profileRecruitment.bodyVewIcon}>
                            <MaterialIcons name="notifications" color={'#212121'} size={25} />
                        </View>
                        <View style={profileRecruitment.bodyViewText}>
                            <Text style={profileRecruitment.fontText}>Thông báo</Text>
                        </View>
                    </View>
                    <View style={profileRecruitment.icon}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={profileRecruitment.bodySetting} onPress={() => this.logout()}>
                    <View style={profileRecruitment.buttonSetting}>
                        <View style={profileRecruitment.bodyVewIcon}>
                            <MaterialCommunityIcons name="logout-variant" color={'#212121'} size={25} />
                        </View>
                        <View style={profileRecruitment.bodyViewText}>
                            <Text style={profileRecruitment.fontText}>Đăng xuất</Text>
                        </View>
                    </View>
                    <View style={profileRecruitment.icon}>
                        <MaterialIcons name="keyboard-arrow-right" color={'#212121'} size={25} />
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    render() {
        return (
            <View style={Styles.container}>
                <View style={Styles.viewContainer}>
                    <View style={profileRecruitment.bodyViewInfoAccount}>
                        {this.renderProfile()}
                    </View>
                    <View style={profileRecruitment.bodyViewSetting}>
                        {this.renderListSetting()}
                    </View>
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

export default connect(mapStateToProps, null) (ProfileRecruitmentScreen)
