import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#FECA3C'
    },
    shareBtn: {
        alignSelf: 'flex-end',
        padding: wp('2%')
    },
    btnText: {
        fontSize: wp('4%'),
        color:'white'
    }
})