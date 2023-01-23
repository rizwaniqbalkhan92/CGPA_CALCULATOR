import { StyleSheet,TextInput,TouchableOpacity,Image, Text, View } from 'react-native'
import React,{useState} from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp}  from 'react-native-responsive-screen'
import write from '../../../assets/Images/write.png';
import right from '../../../assets/Images/right.png';
import arrowDown from '../../../assets/Images/arrowDown.png';
import RadioButtonRN from 'radio-buttons-react-native';

const Practice = (props:any) => {

    const [value,setValue]=useState('')
    const data = [
        {
          label: ' Hombre'
         },
         {
          label: ' Hombre'
         },
         {
          label: ' Hombre'
         }
        ];
  return (
<View>
    {
        props?.type==="string" ?
<View style={styles.mainContainer}>
        
        <View style={styles.textAndInput}>
          <Text style={styles.text}>{props?.textField}</Text>
           <TextInput  onChangeText={e=>setValue(e)}  placeholder={props?.placeholder} placeholderTextColor={'#fff'}  style={styles.inpText}  />
          
        </View>
        {
          value ?  
        <TouchableOpacity style={styles.btn} >
          <Image  source={props?.after}  style={styles.img}  />
        </TouchableOpacity>
      :  
        <TouchableOpacity style={styles.btn} >
          <Image  source={props?.before}  style={styles.img}  />
        </TouchableOpacity>
      
      }
  
  
  
      </View>:
      <View style={styles.mainContainer}>
        
      <View style={styles.textAndInput}>
        <Text style={styles.text}>{props?.textField}</Text>
        <RadioButtonRN 
        circleSize={12}
boxStyle={{width:140, height:35,background:'transparent'}}
  data={data}
  box={false}
  textStyle={{fontSize:12}}
  style={{flexDirection:'row',justifyContent:'space-between',width:'50%'}}
  selectedBtn={(e) => console.log(e)}
  textColor={'#fff'}
/>
      </View>



    </View>
    }
</View>




  )
}

export default Practice

const styles = StyleSheet.create({
mainContainer:{
    width:wp('90%'),
    height:hp('12%'),
    backgroundColor:'#172F53',
    borderColor:'#6350E6',
    borderWidth:wp('0.1%'),
    alignSelf:'center',
    borderRadius:wp('0.5%'),
    padding:hp('2%'),
    flexDirection:'row',
    justifyContent:'space-between'

},
btn:{
    width:wp('5%'),
    height:wp('5%'),
    alignSelf:'flex-end'
},
img:{
    width:wp('4%'),
    height:wp('4%')
},
inpText:{

},
text:{

}



})