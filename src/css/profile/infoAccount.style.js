import {StyleSheet} from 'react-native';

export const StylesInforAccount = StyleSheet.create({

    bodyView: {
        height:'80%',
        width:'100%',
        backgroundColor:'#E8EAF6',
        borderRadius:10,
        padding:5
    },
    footerView: {
        height:'20%',
        width:'100%',
        flexDirection:'row',
        padding:10,
        justifyContent:'center'
    },
    bodyBtnUpdate: {
        height:40,
        width:'40%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginRight:3,
        backgroundColor:'#9575CD'
    },
    bodyBtnChangePassword: {
        height:40,
        width:'40%',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:3,
        backgroundColor:'#FF8A65'
    },
    textUpdate: {
        fontWeight:'bold',
        color:'white',
        fontSize:13
    },
    textChangePassword: {
        fontWeight:'bold',
        color:'white',fontSize:13
    },
    bodyText:{
        height:'10%',
        width:'100%',
        flexDirection:'row',
        padding:5
    },
    bodyTextTitle: {
        width:'50%',
        height:'100%'
    },
    bodyTextContext: {
        width:'50%',
        height:'100%'
    },
    textTitle: {
        fontSize:15,
        fontWeight:'bold',
    },
    textContext: {
        fontSize:15,
    },
    bodyViewLogo: {
        height:'65%',
        width:'100%',
        marginTop:10,
        flexDirection:'column',
        padding:5
    },
    bodyTitleLogo: {
        height:"20%",
        width:'100%',
        justifyContent:'center',
        alignItems:'center'
    },
    bodyContextLogo: {
        height:"80%",
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },
    bodyLogo: {
        height:'100%',
        width:'60%',
        borderColor:'#004D40',
        borderRadius:10,
        borderWidth:1,
        backgroundColor:'#C5CAE9'
    }
})