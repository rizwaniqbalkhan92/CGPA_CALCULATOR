import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container:{
        width:wp('95%'),
        height:hp('60%'),
        alignSelf:'center',
        backgroundColor:'#F36D42',
        borderRadius:10,
        flexDirection:'column',
        justifyContent:'space-around'

    },
    containerMain:{
        marginTop:hp('10%'),
        // justifyContent:'center',
        alignItems:'center',
        height:hp('100%'),

    },
    inputParent:{
        width:wp('90%'),
        
    },
    crossBtn:{
        backgroundColor:'white',borderRadius:50,
        width:wp('5%'),
        justifyContent:'center',
        alignItems:'center',
        height:wp('5%'),
        alignSelf:'flex-end',
        marginRight:wp('3%')
    },
    btnCrossText:{
        fontSize:hp('2%'),
        color:'black'
    }


})