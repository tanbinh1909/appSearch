import React, { Component } from 'react'
import { Text,
    StyleSheet,
    View,
    ImageBackground,
    StatusBar,
    Image,
    TouchableOpacity,
    FlatList,
    Dimensions,
    TextInput
     } from 'react-native';
import {
        BallIndicator,
        BarIndicator,
        DotIndicator,
        MaterialIndicator,
        PacmanIndicator,
        PulseIndicator,
        SkypeIndicator,
        UIActivityIndicator,
        WaveIndicator,
      } from 'react-native-indicators';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default class ChatScreen extends Component {
    constructor(props){
        super(props)
        this.state  ={
            loading: false,
            data_messages:[
                {
                    id:'rwBa06nqlR',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: "",
                    sender_id: 'trongtinh_Rc0LjZ54yj',
                    messages: 'Hello',
                    readed: false,
                    num_messages_readed:6,
                    created_at: 'Few seconds',
                },
                {
                    id:'qKwgXmIoN0',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: "",
                    sender_id: 'trongthanh_O7xyqYRvo1',
                    messages: 'What are you doing?',
                    readed: true,
                    num_messages_readed:0,
                    created_at: '1 minute',
                },
                {
                    id:'ucPA0NXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: "",
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    num_messages_readed:3,
                    created_at: '1 day ago',
                },
                {
                    id:'dwBa06nqlR',
                    user_id: 'trongtinh_Rc0LjZ54yj',
                    user_name: 'TRONG TINH',
                    user_avatar: "",
                    sender_id: 'trongtinh_Rc0LjZ54yj',
                    messages: 'Hello',
                    readed: false,
                    num_messages_readed:6,
                    created_at: 'Few seconds',
                },
                {
                    id:'bKwgXmIoN0',
                    user_id: 'huynhnhu_R3J4WUoWXJ',
                    user_name: 'HUYNH NHU',
                    user_avatar: "",
                    sender_id: 'trongthanh_O7xyqYRvo1',
                    messages: 'What are you doing?',
                    readed: true,
                    num_messages_readed:0,
                    created_at: '1 minute',
                },
                {
                    id:'jcPA0NXweB',
                    user_id: 'trongthat_IlpBApYmye',
                    user_name: 'TRONG THAT',
                    user_avatar: "",
                    sender_id: 'trongthat_IlpBApYmye',
                    messages: 'Why?',
                    readed: false,
                    num_messages_readed:3,
                    created_at: '1 day ago',
                }
            ]
        }
    }
    UNSAFE_componentWillMount =() => {
        setTimeout(() => {
            this.setState({
                loading: true
            })
        }, 2000);
    }
    
    renderItem = ({item}) => {
        return (
            <TouchableOpacity style={styles.item_container}>
                <Image
                source={item.user_avatar}
                style={{height: 50, width: 50, borderRadius:75}}
                />
                <View style={styles.item_messages}>
                    <View style={{flex:1}}>
                        <Text style={{color:'black', fontWeight:item.readed ? null : 'bold'}}>
                        {item.user_name}</Text>
                        <Text style={{color:'black',
                        fontSize:12,
                        fontWeight:item.readed ? null : 'bold',
                        marginTop:5
                         }}>
                            {item.messages}
                        </Text>
                    </View>
                    <View style={{alignItems:'flex-end'}}>
                        <Text style={{color:'black', fontSize:12, fontStyle:'italic',fontWeight:item.readed ? null : 'bold', textAlign:'right'}}>
                            {item.created_at}
                        </Text>
                        {item.readed ? null: 
                        <View style={{height:20,
                         backgroundColor:'red',
                          paddingHorizontal:5,
                           justifyContent:'center',
                            alignItems:'center', borderRadius:50, marginTop:5}}>
                            <Text style={{color:'white', fontWeight:'bold', fontSize:23}}>
                                {item.num_messages_readed > 5 ? "5+" : item.num_messages_readed}
                            </Text>
                        </View>}
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    ItemSeparatorComponent = () => {
        return (
            <View style={{height:1, paddingVertical:10}}>

            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content"/>
                <View style={styles.header}>
                    <View style={styles.seleaction}>
                        <View style={styles.searchBar}>
                            <Ionicons name="ios-search" color="gray" size={20} />
                            <TextInput  style={{flex:1, paddingHorizontal:10, }}
                            placeholder="search..."
                            />
                            <TouchableOpacity>
                                <Ionicons name="ios-close" color="gray" size={25} />
                            </TouchableOpacity>
                            
                        </View>
                    </View>
                </View>
                <View style={styles.footer}>
                    <FlatList
                    data={this.state.data_messages}
                    renderItem={this.renderItem}
                    keyExtractor={(item) => item.id}
                    ItemSeparatorComponent={this.ItemSeparatorComponent}
                    />
                </View>
            </View>
        )
    }
}
const {width} = Dimensions.get('window');
const width_search = width * 0.8
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'white'
    },
    header: {
        height: '15%'
    },
    footer: {
        height: '85%'
    },
    imageBackground: {
        flex:1,
        width:'100%',
        height:'100%',

    },
    imageBackground_container: {
        flex:1,
        flexDirection:'row',
        marginTop:'4%'
    },
    logo: {
        flex: 1,
        marginLeft: '1%',
        alignItems: 'center',
    },
    user: {
        flex:2,
        alignItems:'center'
    },
    user_name: {
        color:'#FDD835',
        fontWeight:'bold',
        fontSize:18
    },
    action: {
        flexDirection:'row',
        marginTop:5
    },
    icon: {
        marginRight:10
    },
    item_container: {
        flexDirection:'row',
        paddingHorizontal:20,
    },
    item_messages: {
        flex: 1,
        flexDirection:'row',
        paddingLeft:15,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2'
    },
    seleaction: {
        height: '35%',
        alignItems:'center'
    },
    searchBar: {
        width: width_search,
        height: 40,
        flexDirection:'row',
        backgroundColor:'#f2f2f2',
        marginTop:15,
        borderRadius:20,
        alignItems:'center',
        paddingHorizontal: 15
    }
})
