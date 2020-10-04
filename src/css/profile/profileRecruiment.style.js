import {StyleSheet} from 'react-native';

export const profileRecruitment = StyleSheet.create({
    bodyViewInfoAccount: {
        flex:1.5
    },
    bodyViewSetting: {
        flex:3,
        marginTop:10
    },
    container : {
        flex: 1,
        flexDirection:'column'
    },
    icon: {
        padding:8, 
        marginLeft:4, 
    },
    containerProfile: {
        flex:1,
        flexDirection:'column',
    },
    contaierListSetting : {
        flex:1,
        flexDirection:'column',
    },
    account: {
        flex:2, 
        flexDirection:'row', 
        padding:30, 
        alignItems:'center'
    },
    buttonAccount: {
        borderWidth:2, 
        height:100, 
        width:100, 
        borderRadius:50
    },
    addFile : {
        flex:1, 
        alignItems:'center'
    },
    buttonAddFile: {
        height:40, 
        width:180, 
        backgroundColor:'#009688', 
        justifyContent:'center', 
        alignItems:'center', 
        borderRadius:5
    },
    textAccount: {
        marginLeft:20, 
        fontSize:20
    },
    textAddFile: {
        fontSize:16
    },
    bodySetting: {
        flexDirection:'row',
        marginBottom:5, 
        marginTop:10
    },
    buttonSetting: {
        flex:9, 
        flexDirection:'row'
    },
    bodyVewIcon: {
        marginLeft:10
    },
    bodyViewText: {
        marginLeft:10, 
        marginBottom:10
    },
    icon: {
        flex:1
    },
    fontText:{
        fontWeight:'bold'
    }
})