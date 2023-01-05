import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../../styles/addSemester'
import AddBtn from '../../../constants/AddBtn'
import List from '../../../constants/List'
import SubjectModal from '../../../constants/subjectModal'

const AddSemester = () => {
  return (
    <View style={styles.container}>
    <List/>
     <AddBtn/>
     {/* <SubjectModal/> */}
    </View>
  )
}

export default AddSemester