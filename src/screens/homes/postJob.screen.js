import React, { Component } from 'react';
import { Text, View , ScrollView, FlatList, TouchableOpacity, Image, Button ,StyleSheet} from 'react-native';
import {connect} from 'react-redux';
import {GET_LIST_POST_RECRUTMENT} from '../../actions/postRecrument.action';
export class PostJobScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    UNSAFE_componentWillMount = async() => {
        this.props.loadPostRecruitment();
    }
    renderPostJob = ({item}) => {
        return (
            <TouchableOpacity style={{height:120,
                borderRadius:5, borderWidth:1,
                 borderColor:'#EEEEEE', marginLeft:10,
                  justifyContent:'center', alignItems:'center',
                  flexDirection:'row',}} onPress={() => this.props.navigation.navigate("PostJobDetailScreen", {postJob: item})}>
                    <View style={{flex:1, padding:5}}>
                      <Text>{item.address}</Text>
                      <Text>{item.title}</Text>
                      <Text>{item.nameTypeJob}</Text>
                    </View>
                     <View style={{flex:1}}>
                     <Image
                       style={{height:80, width:130}}
                       source={Images.slide_2}
                     />
                         <Text style={{alignItems:'flex-end', marginLeft:50, color:'red'}}>40 phút trước</Text>
                     </View>
             </TouchableOpacity>
        )
    }
    render() {
        const {postRecruitments} = this.props;
        return (
            <View style={styles.container}>
                {postRecruitments && postRecruitments.length > 0 ? (
                    <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data = {postRecruitments}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={this.renderPostJob}
                    />
                ):(
                    <View style={{alignItems:'center', justifyContent:'center'}}>
                        <Text>Không có dữ liệu</Text>
                    </View>
                )}
               
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {...state.postRecruitment}
}
const mapDisPatchToProps = (dispatch) => {
    return {
        loadPostRecruitment : () => dispatch({
            type: GET_LIST_POST_RECRUTMENT
        })
    }
}

export default connect(mapStateToProps, mapDisPatchToProps) (PostJobScreen)
const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column',
        padding:10
    }
});