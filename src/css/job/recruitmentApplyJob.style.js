import {StyleSheet} from 'react-native';

export const recruitmentApplyJobStyle = StyleSheet.create({
    container : {
        flex:1,
        padding:5
    },
    containerListJob: {
        flex:1,
        flexDirection:'column'
        
    },
    bodys: {
        flex:1,
        flexDirection:'column',
    },
    containerSearchJob: {
        marginTop:'50%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
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
    },
    bodyItem: {
        height:60,
        width:'100%',
        borderWidth:1,
        borderColor:'#C5CAE9',
        borderRadius:5,
        backgroundColor:'#E8EAF6',
        padding:5,
        flexDirection:'row',
        marginBottom:10
    },
    itemText: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    itemBtn: {
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    btnWatchCV: {
        height:30,
        width:'30%',
        backgroundColor:'#66BB6A',
        borderRadius:5,
        marginRight:1,
        alignItems:'center',
        justifyContent:'center',
    },
    btnDowloadCV: {
        height:30,
        width:'30%',
        backgroundColor:'#FF7043',
        borderRadius:5,
        marginLeft:3,
        alignItems:'center',
        justifyContent:'center',
    },
    btnDeleteCV: {
        height:30,
        width:'30%',
        backgroundColor:'#ef5350',
        borderRadius:5,
        marginLeft:3,
        alignItems:'center',
        justifyContent:'center',
    },
    itemTxtTitle: {
        color:'#b71c1c',
        fontWeight:'bold'
    },
    itemTxtContent: {
        fontSize:14
    },
    itemTextBtn: {
        fontWeight:'bold',
        fontSize:12
    },
})