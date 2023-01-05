import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        width: wp('100%'),
        height: hp('100%'),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F36D42'
    },
    createAccount:{
        fontSize:wp('8%'),
        color:'white',
        marginBottom:hp('3%')
    },
    inputsContainer:{
        width:wp('100%'),
        height:hp('17%'),
        justifyContent:'space-around',
        flexDirection:'column'
    },
    btnAndLinks:{
        height:hp('13%'),
        justifyContent:'space-between'
    }
})