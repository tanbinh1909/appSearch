import React, { Component } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    TouchableOpacity,
    TextInput,
    Dimensions,
    AsyncStorage,
    ActivityIndicator,
    Keyboard,
    StyleSheet,
    ImageBackground
} from 'react-native'
import Toast from "@remobile/react-native-toast";
import {getRegisterJob, saveUser, getRegisterRecruitment, saveToken ,saveCustomerId, saveRegisterJob} from '../../helpers/storage.helper';
import CustomerApi from '../../apis/customer.api';
import {connect} from 'react-redux';
import {GET_LOGIN} from '../../actions/account.action';
export class ConfirmAccountScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ""
    }
  }
  checkLogin(){
    const {code} = this.state;
    let check = true;
    if(code == "") {
      Toast.show("Password không được rỗng");
      check = false;
    }
    return check;
  }
  login = async() => {
    const {code} = this.state;
    if(this.checkLogin()){
      CustomerApi.confirmAccount(code).then(response => {
        if (response.success) {
            if (response.message == "Exit_not_user") {
              Toast.show("Mã Code không đúng");
            } else {
              Toast.show("Đăng kí thành công")
              this.props.navigation.replace("LoginScreen");
            }
        } else {
            Toast.show("Đăng ký thất bại!");
        }
      }).catch(error => {
        console.log(error)
      });
    }
  }
    render() {
       const {code} = this.state;
        return ( 
          <ImageBackground source={require('../../../assets/background.jpg')} style={styles.image}>
              <View style={styles.loginContainer}>
                <View style={styles.imputContainer}>
                  <View style={styles.subInputContainer}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoFocus={false}
                      keyboardType="numeric"
                      placeholder="Vui lòng nhập code"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#000"
                      style={styles.inputText}
                      value={code}
                      onChangeText={(code) => this.setState({
                        code
                      })}
                    />
                  </View>
                </View>
    
                <TouchableOpacity
                  style={styles.buttonLogin}
                  activeOpacity={0.6}
                  onPress={() => this.login()}>
                  <Text style={styles.buttonText}>Xác nhận thành công</Text>
                </TouchableOpacity>
              </View>
          </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getInforCustomer: (id) => dispatch({type: GET_LOGIN, id})
  }
}

export default connect(null, mapDispatchToProps) (ConfirmAccountScreen);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding:10
    },
    appName: {
        fontSize: 40,
        color: '#009688',
        marginVertical: 8,
        alignSelf: 'center',
        fontWeight: 'bold',
    },
    loginContainer: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        marginBottom:10,
        padding:10
    },
    image: {
      flex:1,
      resizeMode: 'cover'
    },
    textTitle: {
        fontSize: 55,
        color: '#fff',
    },
    imputContainer: {
        width: "100%",
        height: 40,
        marginVertical: 8,
        borderWidth:1,
        borderRadius:7,
        borderColor:'#009688'
    },
    subInputContainer: {
        zIndex: 1,
    },
    inputText: {
        height: '100%',
        width: '100%',
        fontSize: 16,
        color: 'red',
        padding: 10,
    },
    inputBackground: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        zIndex: 0,
        opacity: 1,
        borderRadius: 10,
        borderBottomColor: '#fff',
        borderBottomWidth: 0.7,
    },
    buttonLogin: {
        backgroundColor: '#009688',
        borderRadius: 10,
        width: "100%",
        height:45,
        padding: 11,
        alignItems: 'center',
        marginVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
    },
    footerContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 15,
    },
    textFooter: {
        color: 'white',
        fontSize: 15,
    },
    message: {
        color: 'red',
        fontStyle: 'italic',
    },
    loading: {
        alignSelf: 'center',
    },
});