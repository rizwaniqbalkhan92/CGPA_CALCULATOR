import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    container:{
        width:wp('100%'),
        height:hp('35%'),
        justifyContent:'space-around',marginBottom:hp('2.5%')
    },
    number:{
    alignSelf:'center',
    fontSize:wp('40%'),
    fontWeight:'bold'
    
},
string:{
    fontWeight:'bold',
    fontSize:wp('20%'),
    alignSelf:'center',

}

})