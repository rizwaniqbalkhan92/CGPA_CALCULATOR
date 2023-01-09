import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles/listStyle'
import Item from './Item'
import BottomTabBar from '../authenticated/screens/Home/BottomTabBar'
// import { useRoute } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
const List = ({navigation}) => {
  // const route = useRoute();
  const route = useRoute();
  // console.log(route.name);
  return (
    <>
<FlatList   contentContainerStyle={{paddingBottom:10}} data={[1,2,3,4,5]} renderItem={({item})=>(
  <Item/>
  
  )} />
  
  {
    route?.name==="Home" ?
 null: route?.name ==="AddSemester" ? null : 
 <BottomTabBar navigation={navigation}   /> 
}
{/* <BottomTabBar navigation={navigation}   />  */}
  </>

  )
}

export default List