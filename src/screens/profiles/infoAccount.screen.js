import React, { Component } from 'react'
import { Text, View, TouchableOpacity, Image } from 'react-native'
import {connect} from 'react-redux';
import {Styles} from '../../css/container.style';
import {StylesInforAccount} from '../../css/profile/infoAccount.style';
export class AccountScreen extends Component {
    render() {
        const {customers} = this.props;
        let gender = "";
        if(customers.gender === "0"){
            gender = "Nam"
        }else if(customers.gender === "1"){
            gender = "Nữ"
        }
        
        return (
            <View style={Styles.container}>
                <View style={Styles.viewContainer}>
                    <View style={StylesInforAccount.bodyView}>
                        <View style={StylesInforAccount.bodyText}>
                            <View style={StylesInforAccount.bodyTextTitle}>
                                <Text style={StylesInforAccount.textTitle}>Họ và tên:</Text>
                            </View>
                            <View style={StylesInforAccount.bodyTextContext}>
                                <Text style={StylesInforAccount.textContext}>{customers.fullName}</Text>
                            </View>
                        </View>
                        <View style={StylesInforAccount.bodyText}>
                            <View style={StylesInforAccount.bodyTextTitle}>
                                <Text style={StylesInforAccount.textTitle}>Số điện thoại:</Text>
                            </View>
                            <View style={StylesInforAccount.bodyTextContext}>
                                <Text style={StylesInforAccount.textContext}>{customers.phone}</Text>
                            </View>
                        </View>
                        <View style={StylesInforAccount.bodyText}>
                            <View style={StylesInforAccount.bodyTextTitle}>
                                <Text style={StylesInforAccount.textTitle}>Giới tính:</Text>
                            </View>
                            <View style={StylesInforAccount.bodyTextContext}>
                                <Text style={StylesInforAccount.textContext}>{gender}</Text>
                            </View>
                        </View>
                        <View style={StylesInforAccount.bodyText}>
                            <View style={StylesInforAccount.bodyTextTitle}>
                                <Text style={StylesInforAccount.textTitle}>Địa chỉ:</Text>
                            </View>
                            <View style={StylesInforAccount.bodyTextContext}>
                                <Text style={StylesInforAccount.textContext}>{customers.address}</Text>
                            </View>
                        </View>
                        {
                            customers.roles[0].name === "ROLE_POSTRRECRUIMENT" ? (
                                <View>
                                    <View style={StylesInforAccount.bodyText}>
                                        <View style={StylesInforAccount.bodyTextTitle}>
                                            <Text style={StylesInforAccount.textTitle}>Tên công ty:</Text>
                                        </View>
                                        <View style={StylesInforAccount.bodyTextContext}>
                                            <Text style={StylesInforAccount.textContext}>{customers.companyName}</Text>
                                        </View>
                                    </View>
                                    <View style={StylesInforAccount.bodyViewLogo}>
                                        <View style={StylesInforAccount.bodyTitleLogo}>
                                            <Text style={StylesInforAccount.textTitle}>Ảnh đại diện hoặc logo về công ty</Text>
                                        </View>
                                        <View style={StylesInforAccount.bodyContextLogo}>
                                            <View style={StylesInforAccount.bodyLogo}>
                                                
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                
                            ):(
                                <View style={StylesInforAccount.bodyText}></View>
                            )
                        }
                    </View>
                    <View style={StylesInforAccount.footerView}>
                        <TouchableOpacity style={StylesInforAccount.bodyBtnUpdate}>
                            <Text style={StylesInforAccount.textUpdate}>Cập nhật thông tin</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={StylesInforAccount.bodyBtnChangePassword}>
                            <Text style={StylesInforAccount.textChangePassword}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return{...state.login}
}
const mapDispatchToProps = dispatch => {
    return{...dispatch}
}
export default connect(mapStateToProps, null) (AccountScreen)
