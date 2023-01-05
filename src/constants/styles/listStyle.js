import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({

    container: {
        width: wp('95%'),
        height: hp('7%'),
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop:hp('1.5%'),
padding:wp('2%'),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
    ,
    textContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // padding:10
        alignItems: 'center',


    }
,
text:{
    fontSize:wp('5%'),
    color:'black',
    opacity:0.7
}


})
