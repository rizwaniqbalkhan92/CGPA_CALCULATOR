import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container:{
        width:wp('90%'),
        height:hp('30%'),
        alignSelf:'center',
        backgroundColor:'#F36D42',
        borderRadius:10,

    },
    containerMain:{
        justifyContent:'center',
        alignItems:'center',
        height:hp('100%'),

    }


})