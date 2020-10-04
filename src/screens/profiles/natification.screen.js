import React, { Component } from 'react'
import { Text, View , StyleSheet, TouchableOpacity, ScrollView } from 'react-native'

export class NatificationScreen extends Component {
    render() {
        return (
            <View style={{flex:1, padding:3, marginTop:10}}>
                <ScrollView>
                    <TouchableOpacity style={{height: 45, backgroundColor:'#B0BEC5', borderRadius:15, padding:5, borderColor:'#455A64', borderWidth:0.5}}>
                        <Text style={{flex:1, color:'#1A237E'}}>Bạn đã được chấp nhận CV, Vui lòng đợi nhà tuyển dụng thông báo chi tiết</Text>
                        <View style={{flex:1, alignItems:'flex-end', marginTop:2}}>
                          <Text style={{fontSize:12, color:'#004D40'}}>10 phút trước</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

export default NatificationScreen
