import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export const styles = StyleSheet.create({
    container: {
        width: wp('95%'),
        height: hp('7%'),
        borderRadius: 10,
        alignSelf: 'center',
        backgroundColor: '#F36D42',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom:hp('1.5%')
    },
    btnTabBar: {

        width: wp('11%'),
        height: wp('11%'),
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor:'red',

    },
    img: {
        width: wp('9%'),
        height: wp('9%')
    }
})