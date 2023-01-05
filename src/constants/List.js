import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { styles } from './styles/listStyle'
import Item from './Item'

const List = () => {
  return (
<FlatList   contentContainerStyle={{paddingBottom:10}} data={[1,2,3,4,5]} renderItem={({item})=>(
    <Item/>
)} />

  )
}

export default List