import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, Button ,FlatList, TouchableOpacity , Image, ScrollView, KeyboardAvoidingView} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Picker} from '@react-native-community/picker';
import Images from '../../constants/images';
import DropDownPicker from 'react-native-dropdown-picker';
import {connect} from 'react-redux';
import {GET_LIST_TYPE_JOB, GET_LIST_POST_RECRUTMENT_SEARCH} from '../../actions/postRecrument.action';
export class SearchJobScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameTypeJob: "",
            address: "",
            startSalary: "",
            endSalary: "",
            listTypesJobs: [],
            list: [],
            images : Images.slide_2,
        }
    }
    UNSAFE_componentWillMount = async() => {
        await this.props.getTypeJobs();
        this.getListTypeJob();
    }
    getListTypeJob = () => {
        const {typeJobs} = this.props;
        const {listTypesJobs} = this.state;
        for (let index = 0; index < typeJobs.length; index++) {
            const element = typeJobs[index];
            listTypesJobs.push({
                label : element.nameType,
                value : element.nameType
            })
        }
    }
    renderFilters = () => {
        const {typeJobs} = this.props;
        const {nameTypeJob, address, startSalary, endSalary, listTypesJobs} = this.state;
        return (
          <View style={styles.row}>
              <View style={[styles.row_1, {padding:1}]}>
                  <View style={{flex:1, marginTop:10, backgroundColor:'white', borderRadius:10, marginLeft:5, marginRight:5}}>
                   <RNPickerSelect
                          items={listTypesJobs}
                          onValueChange ={value => this.setState({
                            nameTypeJob: value
                          })}
                      /> 
                  </View>
                  <View style={{flex:1, backgroundColor:'white', borderRadius:10,marginTop:10, marginLeft:5, marginRight:5}}>
                 
                    <TextInput  
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        style={{flex:1, paddingHorizontal:10, }}
                        placeholder="Nhập địa chỉ"
                        value={address}
                        onChangeText={address => this.setState({address})}
                            />
                  </View>
              </View>
               <View style={styles.row_2}>
                 <View style={{flex:1, marginTop:10, backgroundColor:'white', borderRadius:10, marginLeft:5, marginRight:5}}>
                   
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        style={{flex:1, paddingHorizontal:10, }}
                        placeholder="Nhập mức lương từ"
                        value={startSalary}
                        onChangeText={startSalary => this.setState({startSalary})}
                        />
                  </View>
                  <View style={{flex:1, backgroundColor:'white', borderRadius:10,marginTop:10, marginLeft:5, marginRight:5}}>
                 
                    <TextInput  
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        style={{flex:1, paddingHorizontal:10, }}
                        placeholder="Nhập mức lương đến"
                        value={endSalary}
                        onChangeText={endSalary => this.setState({endSalary})}
                        />
                  </View>
              </View>
              <View style={[styles.row_2, {marginTop:5, padding:5}]}>
                  <TouchableOpacity style={{flex:1, backgroundColor:'#009688',
                   height:40, justifyContent:'center', alignItems:'center', borderRadius:10}} 
                   onPress={() => this.searchPostRecruitment()}>
                      <Text style={{fontWeight:'bold'}}>Tìm kiếm</Text>
                  </TouchableOpacity>
              </View> 
          </View>
        );
      }

      renderHeaderSearchJob = () =>{
          const {postRecruitmentsSearch} = this.props;
          const {list} = this.state;
        return(
          <View>
            <View style={styles.headerSearch}>
              <View>
                <Text style={styles.text}>
                    Có <Text style={styles.total}>{postRecruitmentsSearch.length}</Text> kết quả:
                </Text>
              </View>
            </View>
          </View>
        );
      }
    render() {
        const {postRecruitmentsSearch} = this.props;
        const {list} = this.state;
        return (
            <View style={styles.container} >
                <KeyboardAvoidingView
                  behavior="padding"
                  keyboardVerticalOffset={-350}>
                {this.renderFilters()}
                {this.renderHeaderSearchJob()}
                    <View style={{flex:1}}>
                    <ScrollView showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}>
                                     <View style={{flex:1}}>
                        {postRecruitmentsSearch.length > 0 ? (
                            <FlatList
                                data = {postRecruitmentsSearch}
                                showsHorizontalScrollIndicator={false}
                                showsVerticalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={this.renderSearch}
                        />
                        ): (
                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                <Text
                                style={{
                                    fontSize: 15,
                                    fontWeight: "bold",
                                    color: "#CCCCCC",
                                    marginTop: 15
                                }}
                                >
                                Không có dữ liệu
                                </Text>
                            </View>
                        )}
                        </View>
                    </ScrollView>
                </View>
                </KeyboardAvoidingView>
            </View>
        )
    }
    searchPostRecruitment = () => {
        const {nameTypeJob, address, startSalary, endSalary} = this.state;
        const data = {
            'nameTypeJob' : nameTypeJob,
            'address' : address,
            'startSalary' : startSalary == "" ? 0 : parseFloat(startSalary),
            'endSalary' : endSalary == "" ? 0 : parseFloat(endSalary)
        }
        this.props.getListSeachPostRecruitment(data);

        // fetch('http://192.168.1.200:8080/searchJob/api/postRecruiment/getListSeachPostRecruiment', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data),
        // }).then((response) => response.json())
        // .then((responseJson) => {
        //     console.log(JSON.stringify(responseJson))
        //     this.setState({
        //         list: responseJson.data
        //     })
        // })
        // .catch((error) => {
        //   console.error(error);
        // });
    }
    renderSearch = ({item}) => {
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
}

const mapStateToProps = state => {
    return {
        ...state.postRecruitment
    }
}
const mapDispatchToProps = dispatch => {
    return {
        getTypeJobs : () => dispatch({type: GET_LIST_TYPE_JOB}),
        getListSeachPostRecruitment : (data) => dispatch({type: GET_LIST_POST_RECRUTMENT_SEARCH, data})
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (SearchJobScreen)

const styles = StyleSheet.create({
    container : {
        flex: 1,
        flexDirection:'column',
    },
    row : {
        height:160,
        width: '100%',
        backgroundColor:'#CFD8DC'
    },
    row_1: {
        flex:1,
        flexDirection:'row',
        
    },
    row_2: {
        flex:1,
        flexDirection:'row',
        
    },
    row_3: {
        flex:1,
        flexDirection:'row',
        
    },
    headerSearch: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: 10
      },
    total: {
    fontSize: 15,
    color: "red",
    fontWeight: "bold"
    },
    text: {
    fontSize: 15,
    color: "black",
    fontWeight: "bold"
    },
    searchBar: {
        width: 225,
        height: 40,
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        borderRadius:10,
        alignItems:'center',
        paddingHorizontal: 15
    }
})