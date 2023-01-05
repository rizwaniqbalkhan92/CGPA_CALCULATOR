import { StyleSheet } from "react-native";
import {widthPercentageToDP as wp,heightPercentageToDP as hp}  from 'react-native-responsive-screen';


export const styles=StyleSheet.create({

container:{
    width:wp('80%'),
    height:hp('10%'),
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    alignSelf:'center',
    marginTop:hp('5%')
},
btnSkip:{
    width:wp('17%'),
    justifyContent:'center',
    alignItems:'center',
    height:hp('4%'),
    borderRadius:wp('100%'),
    backgroundColor:'#F36D42'
},
btnNext:{
    width:wp('17%'),
    justifyContent:'center',
    alignItems:'center',
    height:hp('4%'),
    borderRadius:wp('100%'),
    backgroundColor:'#F36D42'
}
,
btnText:{
    color:'white',
    fontSize:wp('4%')
}
})