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
import {saveRegisterRecruitment} from '../../helpers/storage.helper';
import CustomerApi from '../../apis/customer.api';
export class RegisterRecruitmentScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      password: "",
      againPassword: "",
      nameCompony: "",
      address: "",
      isLoading: false
    }
  }
  validateRegister(){
    var check = true;
    const {username, email, password, againPassword, nameCompony, address} = this.state;
    if(username == "") {
      Toast.show("Tên không được để rỗng");
      check = false;
    }
    if(email == "") {
      Toast.show("Email không được để rỗng");
      check = false;
    }
    if(nameCompony == "") {
      Toast.show("Tên công ty không được để rỗng");
      check = false;
    }
    if(address == "") {
      Toast.show("Địa chỉ công ty không được để rỗng");
      check = false;
    }
    if(password == "") {
      Toast.show("Mật khẩu không được để rỗng");
      check = false;
    }
    if(againPassword == "") {
      Toast.show("Mật khẩu nhập lại không được để rỗng");
      check = false;
    }
    if(password != againPassword){
      Toast.show("Mật khẩu nhập lại không đúng")
      check = false;
    }
    return check;
  }
  
    login = () => {
      const {username, email, password, nameCompony, address} = this.state;
      if(this.validateRegister()){
        this.setState({ isLoading: true });
        const data = {
          "fullName" : username,
          "username" : email,
          "password" : password,
          "role" : ["ROLE_RECRUIMENT"],
          "companyName" : nameCompony,
          "address" : address
        }
        CustomerApi.createCustomer(data).then(response => {
          if (response.success) {
              if(response.message == "Exit_Customer"){
                this.setState({ isLoading: false });
                Toast.show("Tài khoản đã tồn tại!");
              }else {
                this.setState({ isLoading: false });
                this.props.navigation.replace("ConfirmAccountScreen");
              }
          } else {
            this.setState({ isLoading: false });
            Toast.show("Đăng ký thất bại!");
          }
        }).catch( error => {
          this.setState({ isLoading: false });
          console.log(error)
        });
      }
    }
    render() {
      const {username, email, password, againPassword, nameCompony, address, isLoading} = this.state;
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
                      placeholder="Vui lòng nhập tên"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      value={username}
                      onChangeText={(username) => {
                        this.setState({username})
                      }}
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
                      placeholder="Vui lòng nhập email"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      value={email}
                      onChangeText={(email) => {
                        this.setState({email})
                      }}
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
                      placeholder="Vui lòng nhập tên công ty"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      value={nameCompony}
                      onChangeText={(nameCompony) => {
                        this.setState({nameCompony})
                      }}
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
                      placeholder="Vui lòng nhập địa chỉ làm việc"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      value={address}
                      onChangeText={(address) => {
                        this.setState({address})
                      }}
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
                      onChangeText={(password) => {
                        this.setState({password})
                      }}
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
                      placeholder="Vui lòng nhập lại mật khẩu"
                      underlineColorAndroid="transparent"
                      placeholderTextColor="#f44336"
                      style={styles.inputText}
                      secureTextEntry={true}
                      value={againPassword}
                      onChangeText={(againPassword) => {
                        this.setState({againPassword})
                      }}
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
                      <Text style={styles.buttonText}>Đăng ký</Text>
                    )}
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Text style={{color:'#f44336'}}>Quay về</Text>
                </TouchableOpacity>
              </View>
            </KeyboardAvoidingView>
          </ImageBackground>
        )
    }
}

export default RegisterRecruitmentScreen;

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
        color: '#f44336',
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