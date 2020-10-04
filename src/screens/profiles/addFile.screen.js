import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView , TextInput, KeyboardAvoidingView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {getCustomerId} from '../../helpers/storage.helper';
import {GET_APPLY_CV} from '../../actions/recruiment.action';
import Toast from "@remobile/react-native-toast";
export class AddFileScreen extends Component {
    constructor(props){
        super(props)
        this.state = {
            titleCVJobs : "",
            uploadId : ""
        }
    }
    handleAppLyCVJob = async() => {
        const {customers} = this.props;
        const {titleCVJobs, uploadId} = this.state;
        const {idCV} = this.props.route.params;
        const data = {
            "namefileCV": titleCVJobs,
            "uploadCVId": uploadId,
            "idCustomer": customers.id,
            "idPostRecruiment" : idCV
        }
        this.props.applyCV(data);
        Toast.show("Gửi Cv thành công")
        this.props.navigation.goBack();
    }
    render() {
        const {navigation} = this.props;
        const {titleCVJobs, uploadCVId} = this.state; 
        return (
            <View style={{flex:1}}>
                <KeyboardAvoidingView
                    behavior="padding"
                    style={{flex:1,  marginTop:10, justifyContent:'center', alignItems:'center'}}
                    keyboardVerticalOffset={-350}>
                <ScrollView 
                        showsVerticalScrollIndicator={false} 
                        showsHorizontalScrollIndicator={false}>
                    <View style={{flex:4, padding:3, marginTop:10, justifyContent:'center', alignItems:'center'}}>
                            <View style={{height:50, width:250, justifyContent:'center', alignItems:'center', padding:5}}>
                                <TextInput 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    autoFocus={false}
                                    keyboardType="default"
                                    underlineColorAndroid="transparent"
                                    style={{height:40, width:230, borderColor:'red', borderWidth:1, borderRadius:10, padding:10}} 
                                    placeholder="Tiêu đề CV của bạn"
                                    value={titleCVJobs}
                                    onChangeText={(titleCVJobs)=>{
                                        this.setState({titleCVJobs})
                                    }}/>
                            </View>
                            
                            <Text style={{fontWeight:'bold', fontSize:18}}>Tải hồ sơ cá nhân lên</Text>
                            <View style={{marginTop:20}}>
                                <AntDesign name="addfile" size={100} color="#3949AB"/>
                            </View>
                            <View>
                            </View>
                            <View style={{marginTop:10}}>
                                <Text>Loại tệp: pdf, doc, docx</Text>  
                                <Text>Kích thước tệp tối đa: 5MB</Text>  
                            </View>
                            
                            <TouchableOpacity style={{height:35 , width:130, backgroundColor:'#3949AB', justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:50}}>
                                <Text style={{fontWeight:'bold', color:'white'}}>Tải hồ sơ lên</Text>
                            </TouchableOpacity>
                        </View>
                        
                    <View style={{flex:1,flexDirection:'row', justifyContent:'center', alignItems:'center', padding:5}}>
                        <TouchableOpacity style={{height:35 , width:130, backgroundColor:'#ef5350', justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:50, marginRight:2}}
                            onPress={() => this.handleAppLyCVJob()}>
                            <Text>Gửi CV</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{height:35 , width:130, backgroundColor:'#90A4AE', justifyContent:'center', alignItems:'center', borderRadius:20, marginTop:50, marginLeft:2}}
                            onPress={() => navigation.goBack()}>
                            <Text>Hủy</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
                </KeyboardAvoidingView>
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
    return {
        applyCV : (data) => dispatch({type: GET_APPLY_CV, data})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (AddFileScreen)
