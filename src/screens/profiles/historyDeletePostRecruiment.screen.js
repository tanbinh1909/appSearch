import React, { Component } from 'react'
import { Text, View , StyleSheet, Button, TouchableOpacity, FlatList, ScrollView, ActivityIndicator} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {GET_LIST_POST_RECRUTMENT} from '../../actions/postRecrument.action';
import {SET_REFRESH} from '../../actions/refresh.action';
import moment from 'moment';
export class HistoryDeletePostRecruimentScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listRecruitment: [
                
            ]
        }
    }
    UNSAFE_componentWillMount = async() => {
        this.props.getPostRecruitment();
    }
    UNSAFE_componentWillReceiveProps = async(nextProps)=> {
        // kiểm tra post có thay đổi hay ko
        if(nextProps.refreshs == true){
           await this.props.getPostRecruitment();
            this.props.setRefresh().refreshs;
        }
    }
    renderListJobs = () => {
        const {postRecruitments} = this.props;
        return (
            <View style={styles.containerListJob} >
                <ScrollView showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}>
                    <FlatList
                        data = {postRecruitments}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={this.renderItemRecruitment}
                    />
                </ScrollView>
            </View>
        )
    }
    renderItemRecruitment = ({item}) => {
        var dateCreate = moment(item.createDate).format("DD/MM/YYYY");
        var status = "";
        if(item.status == "post"){
            status = "Đã đăng";
        }else if(item.status == "notPost") {
            status = "Chưa đăng";
        }
        return (
            <TouchableOpacity style={styles.containerItem} onPress={()=> this.props.navigation.navigate("HistoryDeletePostRecruimentDetailScreen", {postRecruitment: item})}>
                <Text>Tiêu đề: {item.title}</Text>
                <Text>Ngày tạo: {dateCreate}</Text>
                <Text>Trạng thái: {status}</Text>
            </TouchableOpacity>
        )
    }
    render() {
        const {postRecruitments, loading} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.viewBody} >
                    {!loading ? (
                        <ActivityIndicator color="green" size="large" />
                    ) : (postRecruitments.length > 0 ?(this.renderListJobs() ): (
                        <View style={styles.containerSearchJob}>
                            <AntDesign name="addfolder" size={70} color="#009688"/>
                            <Text style={styles.fontText}>Bạn chưa có bài đăng nào!</Text>
                        </View>
                    )) 
                    }
                </View>
            </View>
        )
    }
}
const mapStateToProps = state => {
    return {...state.postRecruitment, ...state.refresh}
}
const mapDispatchToProps = dispatch => {
    return {
        getPostRecruitment : () => dispatch({type: GET_LIST_POST_RECRUTMENT}),
        setRefresh : () => dispatch({type: SET_REFRESH})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HistoryDeletePostRecruimentScreen)
const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        padding:10
    },
    viewBody: {
        flex:1,
        flexDirection:'column',
        padding:5,
        borderRadius:10,
        backgroundColor:'white'
    },
    containerListJob: {
        flex:1,
        flexDirection:'column'
    },
    containerSearchJob: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonSearch: {
        height:35,
        width:100,
        backgroundColor:'#009688',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textSearch: {
        fontSize:14,
        fontWeight:'bold'
    },
    fontText: {
        fontSize:15,
        fontWeight:'bold',
        color:'#4CAF50'
    },
    fontTextSearch: {
        fontSize:13
    },
    containerItem: {
        height:70, 
        width:'100%', 
        marginTop:10, 
        borderWidth:1, 
        borderColor:'#388E3C', 
        padding:5, 
        borderRadius:5,
    },
    
});
