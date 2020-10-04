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
export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false
    }
  }
  checkLogin(){
    const {email, password} = this.state;
    let check = true;
    if(email == ""){
      Toast.show("Email không được rỗng");
      check = false;
    }
    if(password == "") {
      Toast.show("Password không được rỗng");
      check = false;
    }
    return check;
  }
  login = async() => {
    const {email, password} = this.state;
    const data = {
      "username": email,
      "password": password
    }
    if(this.checkLogin()){
      this.setState({ isLoading: true });
      CustomerApi.login(data).then(response => {
        if (response.success) {
            if (response.message == "Exit_Not_Username") {
              this.setState({ isLoading: false });
              Toast.show("Tài khoản không tồn tại");
            } else if(response.message === "Unapproved_Account"){
              this.setState({ isLoading: false });
              Toast.show("Tài khoản chưa được xác nhận");
            } else {
              this.setState({ isLoading: false });
              const {token, customerId, role} = response.data;
              saveToken(token);
              saveCustomerId(customerId);
              saveUser(response.data);
              saveRegisterJob(data);
              this.props.getInforCustomer(customerId);
              Toast.show("Đăng nhập thành công")
              this.props.navigation.replace("LoadingScreen", {role});
            }
        } else {
          this.setState({ isLoading: false });
          Toast.show("Đăng nhập thất bại");
        }
      }).catch(error => {
        this.setState({ isLoading: false });
        console.log(error)
      });
    }
  }
    render() {
       const {email, password, isLoading} = this.state;
       const {navigation} = this.props;
        return ( 
          <ImageBackground source={require('../../../assets/background.jpg')} style={styles.image}>
              <KeyboardAvoidingView
              behavior="padding"
              style={styles.container}
              keyboardVerticalOffset={-350}>
              <View style={styles.loginContainer}>
                <Text style={styles.appName}>Tìm việc làm</Text>
                <View style={styles.imputContainer}>
                  <View style={styles.subInputContainer}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoFocus={false}
                      keyboardType="default"
                      placeholder="Vui lòng nhập email"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      value={email}
                      onChangeText={(email) => this.setState({
                        email
                      })}
                    />
                  </View>
                  <View style={styles.inputBackground} />
                </View>
    
                <View style={styles.imputContainer}>
                  <View style={styles.subInputContainer}>
                    <TextInput
                      autoCapitalize="none"
                      autoCorrect={false}
                      autoFocus={false}
                      keyboardType="default"
                      placeholder="Vui lòng nhập mật khẩu"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      secureTextEntry={true}
                      value={password}
                      onChangeText={(password) => this.setState({
                        password
                      })}
                    />
                  </View>
                  <View style={styles.inputBackground} />
                </View>
                <TouchableOpacity
                  style={styles.buttonLogin}
                  activeOpacity={0.6}
                  onPress={() => this.login()}>
                    {isLoading ? (
                        <ActivityIndicator size="small" color="white" /> 
                    ): (
                      <Text style={styles.buttonText}>Đăng nhập</Text>
                    )}
                  
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                      <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate("RegisterSearchJobScreen")}>
                      <Text style={{color:'#d50000'}}>Đăng kí tìm việc</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{flex:1, alignItems:'center', justifyContent:'center'}} onPress={() => navigation.navigate("RegisterRecruitmentScreen")}>
                      <Text style={{color:'#d50000'}}>Đăng kí tuyển dụng</Text>
                      </TouchableOpacity>
                </View>
              </View>
              <View style={{alignItems:'center', marginBottom:'5%'}}>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate("CheckUsernameScreen")}>
                     <Text >Quên mật khẩu</Text>
                  </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        )
    }
}

const mapDispatchToProps = dispatch => {
  return {
    getInforCustomer: (id) => dispatch({type: GET_LOGIN, id})
  }
}

export default connect(null, mapDispatchToProps) (LoginScreen);

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
        marginBottom:10
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
    },
    subInputContainer: {
        zIndex: 1,
    },
    inputText: {
        height: '100%',
        width: '100%',
        fontSize: 16,
        color: '#000',
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