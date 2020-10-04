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
export class CheckUsernameScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      isLoading: false
    }
  }
  checkLogin(){
    const {username} = this.state;
    let check = true;
    if(username == "") {
      Toast.show("tên đăng nhập không được rỗng");
      check = false;
    }
    return check;
  }
  login = async() => {
    const {username} = this.state;
    if(this.checkLogin()){
        this.setState({ isLoading: true });
      CustomerApi.checkUsername(username).then(response => {
        if (response.success) {
            if (response.message == "Exist_not_username") {
                this.setState({ isLoading: false });
              Toast.show("Tên đăng nhập không đúng");
            } else {
                this.setState({ isLoading: false });
              this.props.navigation.replace("ForgetAccountScreen");
            }
        } else {
            this.setState({ isLoading: false });
            Toast.show("kiểm tên đăng nhập thất bại!");
        }
      }).catch(error => {
        console.log(error)
      });
    }
  }
    render() {
       const {username, isLoading} = this.state;
        return ( 
          <ImageBackground source={require('../../../assets/background.jpg')} style={styles.image}>
              <View style={styles.loginContainer}>
                  <Text style={{fontSize:30, fontWeight:'bold', marginBottom:'15%', color:"#009688"}}>Xác nhập tài khoản</Text>
                <View style={styles.imputContainer}>
                  <View style={styles.subInputContainer}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoFocus={false}
                      keyboardType="default"
                      placeholder="Vui lòng nhập  tên đăng nhập"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#000"
                      style={styles.inputText}
                      value={username}
                      onChangeText={(username) => this.setState({
                        username
                      })}
                    />
                  </View>
                </View>
                <View style={{flexDirection:'row'}}>
                    <TouchableOpacity
                        style={styles.buttonLogin}
                        activeOpacity={0.6}
                        onPress={() => this.login()}>
                            {isLoading ? (
                               <ActivityIndicator size="small" color="white" /> 
                            ): (
                                <Text style={styles.buttonText}>Tiếp tục</Text>
                            )}
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonBack}
                        activeOpacity={0.6}
                        onPress={() => this.props.navigation.goBack()}>
                        <Text style={styles.buttonText}>Quay về</Text>
                    </TouchableOpacity>
                </View>
                
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

export default connect(null, mapDispatchToProps) (CheckUsernameScreen);

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
        width: "50%",
        height:40,
        padding: 11,
        alignItems: 'center',
        marginVertical: 10,
        marginRight:5
    },
    buttonBack: {
        backgroundColor: 'red',
        borderRadius: 10,
        width: "50%",
        height:40,
        padding: 11,
        alignItems: 'center',
        marginVertical: 10,
        marginLeft:5
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