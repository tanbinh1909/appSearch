import React, { Component } from 'react'
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'

export class DocumentScreen extends Component {
    render() {
        return (
            <View style={{flex:1, padding:3, marginTop:10}}>
                <ScrollView>
                    <TouchableOpacity style={{height: 50, backgroundColor:'#E0E0E0', borderRadius:10, padding:5, borderColor:'#455A64', borderWidth:0.5}}>
                        <Text style={{flex:1, color:'#1A237E'}}>CV xin việc </Text>
                        <View style={{flex:1, alignItems:'flex-end', marginTop:2}}>
                          <Text style={{fontSize:12, color:'#004D40'}}>Ngày tạo: 28/6/2020</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
                <View style={{height:40, justifyContent:'center', alignItems:'center', padding:5}}>
                    <TouchableOpacity 
                    style={{height:35, backgroundColor:'#3949AB', width:'100%', 
                    borderRadius:20, justifyContent:'center', alignItems:'center'}}
                    onPress={() => this.props.navigation.navigate("AddFileScreen")}>
                        <Text style={{color:'white', fontWeight:'bold'}}>Tải hồ sơ</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default DocumentScreen
