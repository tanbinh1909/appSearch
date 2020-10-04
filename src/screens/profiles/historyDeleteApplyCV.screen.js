import React, { Component } from 'react'
import { Text, View , StyleSheet, Button, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {getCustomerId} from '../../helpers/storage.helper';
import {GET_LIST_APPLY_CV} from '../../actions/postRecrument.action';
import moment from 'moment';
class HistoryDeleteApplyCVScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listApplyJob: []
        }
    }
    componentDidMount = () => {
        const {customers} = this.props;
        // alert(JSON.stringify(customers))
            this.props.getListApplyCV(customers.id);
        
    }
    renderListJobs = () => {
        return (
            <View style={styles.containerListJob}>
                <FlatList
                    data = {this.props.listApplyCv}
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderItemApplyJob}
                />
            </View>
        )
    }
    renderItemApplyJob = ({item}) => {
        var dateCreate = moment(item.createDate).format("DD/MM/YYYY");
        return(
            <View style={styles.bodyItem}>
                <View style={styles.itemText}>
                    <View style={styles.itemTextTitle}>
                        <Text style={styles.itemTxtTitle}>Tiêu đề:</Text>
                        <Text style={styles.itemTxtTitle}>Ngày nạp:</Text>
                    </View>
                    <View style={styles.itemTextContent}>
                        <Text style={styles.itemTxtContent}>{' '}{item.namefileCV}</Text>
                        <Text style={styles.itemTxtContent}>{' '}{dateCreate}</Text>
                    </View>
                </View>
                <View style={styles.itemBtn}>
                    <TouchableOpacity style={styles.btnWatchCV}>
                        <Text style={styles.itemTextBtn}>Chuyển về</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDeleteCV}>
                        <Text style={styles.itemTextBtn}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const {listApplyCv} = this.props; 
        return (
            <View style={styles.container}>
                <View style={styles.bodys}>
                    <ScrollView>
                        {
                            listApplyCv.length > 0 ? (
                                this.renderListJobs()
                            ): (
                                <View style={styles.containerSearchJob}>
                                    <AntDesign name="addfolder" size={70} color="#009688"/>
                                    <Text style={styles.fontText}>Bài đăng chưa có ai gửi CV!</Text>
                                </View>
                            )
                        }
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {...state.postRecruitment, ...state.login}
}
const mapDispatchToProps = dispatch => {
    return {
        getListApplyCV : (customerId) => dispatch({type: GET_LIST_APPLY_CV, customerId})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (HistoryDeleteApplyCVScreen)
const styles = StyleSheet.create({
    container : {
        flex:1,
        padding:5
    },
    containerListJob: {
        flex:1,
        flexDirection:'column'
        
    },
    bodys: {
        flex:1,
        flexDirection:'column',
        padding:5,
        backgroundColor:'white',
        borderRadius:10
    },
    containerSearchJob: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonSearch: {
        height:40,
        width:300,
        marginTop:10,
        backgroundColor:'#009688',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textSearch: {
        fontSize:16,
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
    bodyItem: {
        height:60,
        width:'100%',
        borderWidth:1,
        borderColor:'#C5CAE9',
        borderRadius:5,
        backgroundColor:'#E8EAF6',
        padding:5,
        flexDirection:'row',
        marginBottom:10
    },
    itemText: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    itemBtn: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    btnWatchCV: {
        height:30,
        width:'40%',
        backgroundColor:'#66BB6A',
        borderRadius:5,
        marginRight:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btnDowloadCV: {
        height:30,
        width:'30%',
        backgroundColor:'#FF7043',
        borderRadius:5,
        marginLeft:3,
        alignItems:'center',
        justifyContent:'center',
    },
    btnDeleteCV: {
        height:30,
        width:'30%',
        backgroundColor:'#ef5350',
        borderRadius:5,
        marginLeft:3,
        alignItems:'center',
        justifyContent:'center',
    },
    itemTxtTitle: {
        color:'#b71c1c',
        fontWeight:'bold'
    },
    itemTxtContent: {
        fontSize:14
    },
    itemTextBtn: {
        fontWeight:'bold',
        fontSize:12
    },
});
