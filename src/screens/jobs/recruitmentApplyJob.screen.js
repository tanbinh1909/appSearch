import React, { Component } from 'react'
import { Text, View , StyleSheet, Button, TouchableOpacity, FlatList, ScrollView} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
import {getCustomerId} from '../../helpers/storage.helper';
import {GET_LIST_APPLY_CV} from '../../actions/postRecrument.action';
import moment from 'moment';
import {recruitmentApplyJobStyle} from '../../css/job/recruitmentApplyJob.style';
import {Styles} from '../../css/container.style';
export class RecruitmentApplyJobScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listApplyJob: []
        }
    }
    componentDidMount = () => {
            this.props.getListApplyCV(this.props.customers.id);
        
    }
    renderListJobs = () => {
        return (
            <View style={recruitmentApplyJobStyle.containerListJob}>
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
            <View style={recruitmentApplyJobStyle.bodyItem}>
                <View style={recruitmentApplyJobStyle.itemText}>
                    <View style={recruitmentApplyJobStyle.itemTextTitle}>
                        <Text style={recruitmentApplyJobStyle.itemTxtTitle}>Tiêu đề:</Text>
                        <Text style={recruitmentApplyJobStyle.itemTxtTitle}>Ngày nạp:</Text>
                    </View>
                    <View style={recruitmentApplyJobStyle.itemTextContent}>
                        <Text style={recruitmentApplyJobStyle.itemTxtContent}>{' '}{item.namefileCV}</Text>
                        <Text style={recruitmentApplyJobStyle.itemTxtContent}>{' '}{dateCreate}</Text>
                    </View>
                </View>
                <View style={recruitmentApplyJobStyle.itemBtn}>
                    <TouchableOpacity style={recruitmentApplyJobStyle.btnWatchCV}>
                        <Text style={recruitmentApplyJobStyle.itemTextBtn}>Xem CV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={recruitmentApplyJobStyle.btnDowloadCV}>
                        <Text style={recruitmentApplyJobStyle.itemTextBtn}>Tải CV</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={recruitmentApplyJobStyle.btnDeleteCV}>
                        <Text style={recruitmentApplyJobStyle.itemTextBtn}>Xóa</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    render() {
        const {listApplyCv} = this.props; 
        return (
            <View style={Styles.container}>
                <View style={Styles.viewContainer}>
                    <ScrollView>
                        {
                            listApplyCv.length > 0 ? (
                                this.renderListJobs()
                            ): (
                                <View style={recruitmentApplyJobStyle.containerSearchJob}>
                                    <AntDesign name="addfolder" size={70} color="#009688"/>
                                    <Text style={recruitmentApplyJobStyle.fontText}>Bài đăng chưa có ai gửi CV!</Text>
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
export default connect(mapStateToProps, mapDispatchToProps) (RecruitmentApplyJobScreen)
