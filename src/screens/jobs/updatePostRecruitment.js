import React, { Component } from 'react'
import { Text,
       View , 
    TextInput, 
    TouchableOpacity, 
    StyleSheet, 
    KeyboardAvoidingView,
    ScrollView
} from 'react-native'
import Toast from "@remobile/react-native-toast";
import Textarea from 'react-native-textarea';
import {connect} from 'react-redux';
import {GET_UPDATE_POST_RECRUTMENT} from '../../actions/postRecrument.action';
import {GET_REFRESH} from '../../actions/refresh.action';
import validator  from 'validator';
import {Picker} from '@react-native-community/picker';
import DatePicker from 'react-native-datepicker';
import moment from 'moment';
export class UpdatePostRecruitmentScreen extends Component {
    constructor(props){
      super(props);
      this.state = {
        id: "",
        title : "",
        salary: "",
        degree: "",
        dateWord: "",
        deadline: new Date(),
        specialize: "",
        status: "post",
        description: "",
        user: ""
      }
    }
    changeStatus = (status) => {
      this.setState({ status: status })
   }
   UNSAFE_componentWillMount = async() => {
       const {postRecruitment} = this.props.route.params;
       this.setState({
        id : postRecruitment.id,
        title : postRecruitment.title, 
        salary : postRecruitment.salary.toString(), 
        degree : postRecruitment.degree, 
        dateWord : postRecruitment.dateWord, 
        deadline : postRecruitment.deadline, 
        specialize : postRecruitment.specialize,
        status : postRecruitment.status, 
        description : postRecruitment.description
       })
   }
    render() {
      const {title, salary, degree, dateWord, deadline, specialize, status, description} = this.state;
        return (
            <View style={{flex:1,  padding:10}}>
              <KeyboardAvoidingView
                  behavior="padding"
                  style={styles.container}
                  keyboardVerticalOffset={-350}>
               <ScrollView showsVerticalScrollIndicator={false} 
                showsHorizontalScrollIndicator={false}>
                
             
                  <View style={styles.imputContainer}>
                  <Text>Tiêu đề bài đăng: </Text>
                    <View style={styles.subInputContainer}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#f44336"
                        value={title}
                        onChangeText={title => this.setState({title})}
                        style={styles.inputText}
                        
                      />
                    </View>
                  </View>
      
                  <View style={styles.imputContainer}>
                  <Text>Lương: </Text>
                    <View style={styles.subInputContainer}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#f44336"
                        style={styles.inputText}
                        value={salary}
                        onChangeText={salary => this.setState({salary})}
                      />
                    </View>
                  </View>
                  <View style={styles.imputContainer}>
                  <Text>Bằng cấp: </Text>
                    <View style={styles.subInputContainer}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#f44336"
                        style={styles.inputText}
                        value={degree}
                        onChangeText={degree => this.setState({degree})}
                      />
                    </View>
                  </View>
      
                  <View style={styles.imputContainer}>
                    <Text>Thời gian làm việc: </Text>
                    <View style={styles.subInputContainer}>
                    <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#f44336"
                        style={styles.inputText}
                        value={dateWord}
                        onChangeText={dateWord => this.setState({dateWord})}
                      />
                    </View>
                  </View>
                  <View style={[styles.imputContainer, {height:50}]}>
                    <Text>Ngày hết hạn: </Text>
                    <View style={styles.subInputContainer}>
                    <DatePicker
                      style={{width: '100%',borderColor:'black',
                      borderWidth:1,
                      borderRadius:7, height:40}}
                      date={deadline}
                      mode="date"
                      placeholder="chọn ngày"
                      format="DD-MM-YYYY"
                      confirmBtnText="Đồng ý"
                      cancelBtnText="Hủy"
                      customStyles={{
                        dateIcon: {
                          position: 'absolute',
                          left: 0,
                          top: 2,
                        },
                        dateInput: {
                          marginLeft: 0
                        }
                        // ... You can check the source to find the other keys.
                      }}
                      onDateChange={(deadline) => {this.setState({deadline: deadline})}}
                    />
                    </View>
                  </View>
                  <View style={styles.imputContainer}>
                    <Text>Chuyên môn: </Text>
                    <View style={styles.subInputContainer}>
                      <TextInput
                        autoCapitalize="none"
                        autoCorrect={false}
                        autoFocus={false}
                        keyboardType="default"
                        underlineColorAndroid="transparent"
                        placeholderTextColor="#f44336"
                        style={styles.inputText}
                        value={specialize}
                        onChangeText={specialize => this.setState({specialize})}
                      />
                    </View>
                  </View>
                  <View style={styles.imputContainer}>
                    <Text>Trạng thái: </Text>
                    <View style={styles.subInputContainer}>
                    <Picker 
                      selectedValue = {status} 
                      style={styles.inputText}
                      onValueChange = {this.changeStatus}>
                        <Picker.Item label = "Đăng" value = "post" />
                        <Picker.Item label = "Không đăng" value = "notPost" />
                    </Picker>
                    </View>
                  </View>
                  <View style={{marginVertical: 10,height:170}}>
                    <Text>Chi tiết: </Text>
                      <View style={styles.subInputContainer}>
                      <Textarea
                        containerStyle={styles.textareaContainer}
                        style={styles.textarea}
                        maxLength={120}
                        placeholderTextColor={'#c7c7c7'}
                        underlineColorAndroid={'transparent'}
                        value={description}
                        onChangeText={description => this.setState({description})}
                      />
                    </View>
                  </View>
            </ScrollView>
            <View style={{height:42}}>
              <TouchableOpacity
                  style={styles.buttonLogin}
                  activeOpacity={0.6}
                  onPress={() => {this.updatePostRecruitment()}}
                  >
                  <Text style={styles.buttonText}>Lưu bài đăng</Text>
              </TouchableOpacity>
            </View>
            </KeyboardAvoidingView>
          </View>
        )
    }
    updatePostRecruitment = () => {
      const {id,title, salary, degree, dateWord, deadline, specialize, status, description} = this.state;
      // if(validator.isEmpty(title)){
      // }
      const data = {
        'id' : id,
        'title': title,
        'salary': parseFloat(salary),
        'degree': degree,
        'dateWord': dateWord,
        'deadline': deadline,
        'specialize': specialize,
        'status': status,
        'description': description,
      }
      this.props.updatePostRecruitment(data);
      this.props.getRefresh().refreshs;
      Toast.show("Cập nhật bài đăng thành công!");
      this.props.navigation.navigate("RecruitmentScreen");
    }
}
const mapStateToProps = state => {
  return {...state.postRecruitment}
}
const mapDispatchToProps = dispatch => {
  return {
    updatePostRecruitment : (data) => dispatch({type: GET_UPDATE_POST_RECRUTMENT, data}),
    getRefresh : () => dispatch({type: GET_REFRESH})
  }
}
export default connect(mapStateToProps, mapDispatchToProps) (UpdatePostRecruitmentScreen)
const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    inputText: {
        height: '100%',
        width: '100%',
        fontSize: 14,
        color: '#f44336',
        padding: 5,
        borderColor:'black',
        borderWidth:1,
        borderRadius:7
    },
    buttonLogin: {
        backgroundColor: '#009688',
        borderRadius: 10,
        width: "100%",
        height:35,
        alignItems: 'center',
        justifyContent:'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    message: {
        color: 'red',
        fontStyle: 'italic',
    },
    loading: {
        alignSelf: 'center',
    },
    textareaContainer: {
      height: 150,
      padding: 1,
    },
    textarea: {
      textAlignVertical: 'top',  // hack android
      height: 150,
      fontSize: 14,
      color: '#333',
      borderColor:'black',
      borderWidth:1,
      borderRadius:10
    },
});