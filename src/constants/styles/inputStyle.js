import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({

    inputContainer: {
        width: wp('90%'),
        height: hp('6%'),
        alignSelf:'center',
        borderRadius: 8,
        color:'F36D42',
        backgroundColor: 'white',
        color:'#000',
        padding:wp('3%'),
        
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    }
})

