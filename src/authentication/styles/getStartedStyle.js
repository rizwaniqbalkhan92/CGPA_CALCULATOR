import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export const styles=StyleSheet.create({

    container:{
        width:wp('100%'),
        height:hp('100%'),
        justifyContent:'center',
        alignItems:'center',
        // flex:1,
        backgroundColor:'#F36D42'
    },
    innerContainer:{
        height:hp('30%'),
        width:wp('100%'),
        // backgroundColor:'red',
        flexDirection:'column',
        justifyContent:'space-around'
    },
    checkText:{
        fontSize:wp('10%'),
        color:'white',
        alignSelf:'center'
    },
    cgpaText:{
        fontSize:wp('15%'),
        alignSelf:'center',
        color:'white'
    
    }
})