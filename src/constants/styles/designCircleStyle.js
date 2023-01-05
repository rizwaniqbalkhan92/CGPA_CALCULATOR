import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";


export const styles=StyleSheet.create({

    circleContainer:{
        width:wp('30%'),
        height:hp('12%'),
        // backgroundColor:'white',
        padding:5
    },
    circleOne:{
        width:wp('5%'),
        height:wp('5%'),
        borderRadius:100,
        backgroundColor:'#F36D42',
    },
    circleTwo:{
        width:wp('8%'),
        marginLeft:5,
        height:wp('8%'),
        borderRadius:100,
        marginTop:-10,
        backgroundColor:'#F36D42'
    },
    circleThree:{
        width:wp('15%'),
        marginTop:-10,
        height:wp('15%'),
        borderRadius:100,
        marginLeft:60,
        backgroundColor:'#F36D42'
    }





})
