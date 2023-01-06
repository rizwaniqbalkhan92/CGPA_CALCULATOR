import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/addSemester'
import AddBtn from '../../../constants/AddBtn'
import List from '../../../constants/List'
import SubjectModal from '../../../constants/subjectModal'
import BottomTabBar from '../Home/BottomTabBar'

const AddSemester = ({navigation}) => {
  return (
    <View style={styles.container}>
    <List/>
     <AddBtn/>
     {/* <SubjectModal/> */}
 <BottomTabBar navigation={navigation}   /> 
    </View>
  )
}

export default AddSemester