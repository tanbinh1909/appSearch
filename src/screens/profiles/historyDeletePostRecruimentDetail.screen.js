import React, { Component } from 'react'
import { Text, View , TouchableOpacity, StyleSheet , KeyboardAvoidingView, TextInput, ScrollView} from 'react-native'
import Textarea from 'react-native-textarea';
import {GET_DELETE_POST_RECRUITMENT} from '../../actions/postRecrument.action';
import {GET_REFRESH} from '../../actions/refresh.action';
import {connect} from 'react-redux';
import Toast from '@remobile/react-native-toast';
export class HistoryDeletePostRecruimentDetailScreen extends Component {

    deletePostRecruitment =() =>{
        this.props.delelePostRecruitment(this.props.route.params.postRecruitment.id);
        this.props.getRefresh().refreshs;
        Toast.show("Xóa thành công");
        this.props.navigation.goBack();
        
    }
    render() {
       const {postRecruitment} = this.props.route.params;
       var status = "";
       if(postRecruitment.status == "post"){
           status = "Đã đăng";
       }else if(postRecruitment.status == "notPost"){
           status = "Chưa đăng";
       }
        return (
            <View style={styles.container}>
                <View style={styles.containerView}>
                    <View style={styles.viewBody}>
                        <View style={styles.viewTitle}>
                            <Text style={styles.titleText}>Tiêu đề:</Text>
                            <Text style={styles.titleText}>Lương:</Text>
                            <Text style={styles.titleText}>Bằng cấp:</Text>
                            <Text style={styles.titleText}>Thời gian làm việc:</Text>
                            <Text style={styles.titleText}>Ngày hết hạn:</Text>
                            <Text style={styles.titleText}>Chuyên môn:</Text>
                            <Text style={styles.titleText}>Trạng thái:</Text>
                            
                        </View>
                        <View style={styles.viewBContext}>
                            <Text style={styles.contentText}>{postRecruitment.title}</Text>
                            <Text style={styles.contentText}>{postRecruitment.salary}</Text>
                            <Text style={styles.contentText}>{postRecruitment.degree}</Text>
                            <Text style={styles.contentText}>{postRecruitment.dateWord}</Text>
                            <Text style={styles.contentText}>{postRecruitment.deadline}</Text>
                            <Text style={styles.contentText}>{postRecruitment.specialize}</Text>
                            <Text style={styles.contentText}>{status}</Text>
                            
                        </View>
                    </View>
                    <View style={styles.viewDiscription}>
                        <View style={styles.viewDiscriptionTitle}>
                            <Text style={styles.discriptionText}>Thông tin chi tiết</Text>
                        </View>
                        <View style={styles.viewDiscriptionContent}>
                            <Text style={styles.contentText}>{postRecruitment.description}</Text>
                        </View>
                    </View>
                    <View style={styles.buttomContainer}>
                        <TouchableOpacity style={styles.buttomTextUpdate} onPress={() => {}}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Rover</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttomTextDelete} onPress={() => this.deletePostRecruitment()}>
                            <Text style={{color:'white', fontWeight:'bold'}}>Xóa bài viết</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps =(state) => {
    return {...state.postRecruitment}
}
const mapDispatchToProps = dispatch => {
    return {
        delelePostRecruitment : (id) => dispatch({type: GET_DELETE_POST_RECRUITMENT, id}),
        getRefresh : () => dispatch({type: GET_REFRESH})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HistoryDeletePostRecruimentDetailScreen);

const styles = StyleSheet.create({
    container: {
        flex:1, 
        flexDirection:'column', 
        padding:10,
    },
    containerView: {
        flex:1, 
        flexDirection:'column', 
        padding:5,
        backgroundColor:'white',
        borderRadius:10
    },
    viewBody: {
        height:'35%', 
        flexDirection:'row',
        marginTop:20
    },
    viewDiscription: {
        height:'50%',
        backgroundColor:'green',
        padding:5,
        borderRadius:10,
        backgroundColor:'#E0E0E0'
    },
    buttomContainer: {
        height:'15%',
        width:'100%', 
        flexDirection:'row',
        padding:5, 
        justifyContent:'center'
    },
    bodyText: {
        flexDirection:'row'
    },
    titleText: {
        fontWeight:'bold',
        color:'#303F9F',
        marginRight:5,
        fontSize:16,
    },
    contentText: {
        fontSize:16
    },
    imputContainer: {
        width: "100%",
        height: 40,
        marginVertical: 10,
    },
    subInputContainer: {
        marginTop:5,
        zIndex: 1,
    },
    
    buttomTextUpdate : {
        height:35, 
        width:100, 
        marginRight:5, 
        backgroundColor:'#388E3C', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    },
    buttomTextDelete : {
        height:35, 
        width:100,
        marginRight:5, 
        backgroundColor:'#b71c1c', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    },
    content : {
        flexDirection:'row',
        alignItems:'center',
        marginBottom:5
    },
    viewTitle: {
        flex:1,

    },
    viewBContext: {
        flex:1
    },
    viewDiscriptionTitle: {
        height:'10%',
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    viewDiscriptionContent: {
        height:'90%',
        width:'100%'
    },
    discriptionText: {
        fontSize:16,
        color:'#1A237E',
        fontWeight:'bold'
    }
})
