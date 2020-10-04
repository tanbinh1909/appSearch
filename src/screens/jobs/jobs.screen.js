import React, { Component } from 'react'
import { Text, View , StyleSheet, Button, TouchableOpacity, FlatList} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';
export class JobsScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listJob: []
        }
    }
    renderListJobs = () => {
        return (
            <View style={styles.containerListJob}>
                
            </View>
        )
    }
    render() {
        const {listJob} = this.state; 
        return (
            <View style={styles.container}>
                {
                    listJob.length > 0 ? (
                        this.renderListJobs()
                    ): (
                        <View style={styles.containerSearchJob}>
                            <AntDesign name="addfolder" size={70} color="#009688"/>
                            <Text style={styles.fontText}>Bạn chưa lưu việc làm nào!</Text>
                            <Text style={styles.fontTextSearch}>Tìm và lưu lại những việc bạn muốn tại đây.</Text>
                            <TouchableOpacity style={styles.buttonSearch} onPress={() => this.props.navigation.navigate("SearchTabJobScreen")}>
                                <Text style={styles.textSearch}>Tìm kiếm việc làm</Text>
                            </TouchableOpacity>
                        </View>
                    )
                }
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {...state}
}
const mapDispatchToProps = dispatch => {
    return {...dispatch}
}
export default connect(mapStateToProps, mapDispatchToProps) (JobsScreen)

const styles = StyleSheet.create({
    container : {
        flex:1,
        flexDirection:'column'
    },
    containerListJob: {
        flex:1,
        flexDirection:'column'
    },
    containerSearchJob: {
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    buttonSearch: {
        height:40,
        width:300,
        marginTop:10,
        backgroundColor:'#009688',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center'
    },
    textSearch: {
        fontSize:16,
        fontWeight:'bold'
    },
    fontText: {
        fontSize:15,
        fontWeight:'bold',
        color:'#4CAF50'
    },
    fontTextSearch: {
        fontSize:13
    }
});
