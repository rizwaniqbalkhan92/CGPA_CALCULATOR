import {StyleSheet}   from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles=StyleSheet.create({

container:{
width:wp('100%'),
height:hp('100%'),


},
socialCircle:{
    width:wp('85%'),
    height:hp('70%'),
    // backgroundColor:'red',
    marginTop:hp('7.5%'),
    borderTopRightRadius:300,
    borderBottomRightRadius:300,
}
,
google:{
    width:wp('30%'),
    height:wp('30%'),
    alignSelf:'flex-start',
    marginLeft:wp('10%'),
    // backgroundColor:'red',
    borderRadius:100,
},
facebook:{
    width:wp('25%'),
    // marginTop:hp('5%'),
    height:wp('25%'),
    alignSelf:'flex-end',
    // marginLeft:wp('30%'),
    // backgroundColor:'red',
    borderRadius:100
},
twitter:{
    width:wp('20%'),
    height:wp('20%'),
    alignSelf:'flex-end',
    marginRight:wp('20%'),
    // backgroundColor:'red',
    marginTop:hp('18%'),
    borderRadius:100
},
email:{
    width:wp('15%'),
    height:wp('15%'),
    alignSelf:'flex-start',
    marginLeft:wp('10%'),
    marginTop:hp('5%'),
    // backgroundColor:'red',
    borderRadius:100
},
imageSocial:{
    justifyContent:'center',
    alignItems:'center',

}

})
