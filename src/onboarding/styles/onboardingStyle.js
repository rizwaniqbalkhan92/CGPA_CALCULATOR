import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export const styles = StyleSheet.create({

    container: {
        width: wp('100%'),
        height: hp('100%'),
        backgroundColor: 'white'
    },
    imageAndtext:{
        height:hp('60%'),
        justifyContent:'space-around'
    },
    onboardingImage: {
        alignSelf: 'center',
        width: wp('60%'),
        height: wp('60%')
    },
    onboardingText: {
        textAlign: 'justify',
        width: wp('80%'),
        fontSize: wp('5%'),
        alignSelf: 'center',
        color:'black',
        opacity:0.5
    },
    dots: {
        marginTop:hp('5%'),
        width: wp('25%'),
        height: hp('5%'),
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dot: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: 100,
        backgroundColor: 'grey'
    },
    dotActive: {
        width: wp('4%'),
        height: wp('4%'),
        borderRadius: 100,
        backgroundColor: '#F36D42'
    }

})
