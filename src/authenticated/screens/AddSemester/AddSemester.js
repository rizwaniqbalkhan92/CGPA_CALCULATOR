import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../../styles/addSemester'
import AddBtn from '../../../constants/AddBtn'
import List from '../../../constants/List'
import SubjectModal from '../../../constants/subjectModal'
import BottomTabBar from '../Home/BottomTabBar'
import ModalSubjectDetails from '../../../constants/ModalSubjectsDetails'

const AddSemester = ({navigation}) => {
  const [open,setOpen]=useState(false);

  return (
    <View style={styles.container}>
    <List/>
     <AddBtn   open={open}  setOpen={setOpen} />
     <SubjectModal   open={open}  setOpen={setOpen} />
     {/* <ModalSubjectDetails   open={open}  setOpen={setOpen} /> */}
 <BottomTabBar navigation={navigation}   /> 
    </View>
  )
}

export default AddSemester