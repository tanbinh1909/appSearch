import React, { Component } from 'react'
import { Text, View, StyleSheet , Image,TouchableOpacity, Button, ScrollView, TextInput} from 'react-native';
import Images from '../../constants/images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {SHOW_MODAL, HIDE_MODAL} from '../../actions/modal.action';
import {connect} from 'react-redux';
import ModalPostJobScreen from '../homes/modalPostJob.screen';
import Dialog, {DialogFooter, DialogButton, DialogContent} from 'react-native-popup-dialog';
export class PostJobDetailScreen extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const {modals} = this.props;
        const {postJob} = this.props.route.params;
        return (
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
                    <View style={{alignItems:'center', height:200}}>
                        <Image source={Images.slide_3} style={{height:170, width:'100%'}}/>
                        <Text style={{fontWeight:'bold', fontSize:20}}>Công ty ABC</Text>
                    </View>
                    <View style={{height:150, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:5}}>
                        <Text style={{fontWeight:'bold', fontSize:16}}>{postJob.title}</Text>
                        <Text>{postJob.description}</Text>
                    </View>
                    <View style={{height:50, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:10, flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <FontAwesome5 name="money-check-alt" size={36} color="#3949AB"/>
                            </View>
                            <View style={{flex:4}}>
                                <Text style={{fontWeight:'bold'}}>Mức lương:</Text>
                                <Text>{postJob.salary}</Text>
                            </View>
                    </View>
                    <View style={{height:50, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:10, flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <FontAwesome5 name="newspaper" size={36} color="#3949AB"/>
                            </View>
                            <View style={{flex:4}}>
                                <Text style={{fontWeight:'bold'}}>Yêu cầu bằng cấp:</Text>
                                <Text>{postJob.degree}</Text>
                            </View>
                    </View>
                    <View style={{height:50, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:10, flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <Ionicons name="ios-time" size={36} color="#3949AB"/>
                            </View>
                            <View style={{flex:4}}>
                                <Text style={{fontWeight:'bold'}}>Thời gian làm việc:</Text>
                                <Text>{postJob.dateWord}</Text>
                            </View>
                    </View>
                    <View style={{height:50, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:10, flexDirection:'row'}}>
                            <View style={{flex:1}}>
                                <MaterialCommunityIcons name="google-maps" size={36} color="#4CAF50"/>
                            </View>
                            <View style={{flex:4}}>
                            <Text style={{color:'#4CAF50'}}>{postJob.address}</Text>
                            </View>
                    </View>
                    <View style={{height:80, 
                        borderWidth:1, borderColor:'black', borderRadius:5,
                        padding:5, marginTop:10, flexDirection:'row'}}>
                            <Text style={{fontWeight:'bold', marginRight:5}}>Yêu cầu chuyên môn:</Text>
                            <Text>{postJob.specialize}</Text>
                    </View>
                </ScrollView>
                <View style={{height:40, justifyContent:'center', alignItems:'center', marginTop:5}}>
                    <TouchableOpacity 
                        style={{height:35, backgroundColor:'#283593',
                            borderRadius:8, justifyContent:'center', alignItems:'center', width:'100%'}}
                            onPress={()=> this.props.navigation.navigate("AppLyFileCVScreen", {idCV : postJob.id})}>
                        <Text style={{color:'#FAFAFA'}}>Nộp đơn</Text>
                    </TouchableOpacity>
                </View>
                <ModalPostJobScreen/>
            </View>
            
        )
    }
    openModal = (id) => {
        this.props.showModal(id)
    }
}

const mapStateToProps = (state) => {
    return {...state.modal}
}
const mapDispatchToProps = dispatch => {
    return {
        showModal : (id) => dispatch({type: SHOW_MODAL, idPost : id}),
        hideModal : () => dispatch({type: HIDE_MODAL})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PostJobDetailScreen)

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        padding:10
    }
})