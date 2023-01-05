import { StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";



export const styles= StyleSheet.create({
    linksContainer:{
        width:wp('90%'),
        flexDirection:'row',
        justifyContent:'space-between',
        alignSelf:'center',
        padding:wp('1%')
        

    },
    btnLink:{
        color:'white',
        
        fontSize:wp('10%')
    },
    btnText:{
        color:'white'
    }
    
})


