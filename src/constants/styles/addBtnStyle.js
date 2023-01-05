import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    addBtnImg:{
        alignSelf:'center',
        marginTop:hp('1%'),
        width:wp('20%'),
        height:wp('20%'),
        marginBottom:hp('1.5%')
    }

})