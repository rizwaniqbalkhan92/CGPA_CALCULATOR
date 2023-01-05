import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: '#FECA3C'
    },

})