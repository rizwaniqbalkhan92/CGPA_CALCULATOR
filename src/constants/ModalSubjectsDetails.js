import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles/modalSecond'
import Input from './Input'
import Button from './Button'

const ModalSubjectDetails = ({ open, setOpen }) => {

    return (
        <Modal visible={open}
            transparent
            animationType='fade'
        >
            <View style={styles.containerMain}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.crossBtn} onPress={() => setOpen(!open)}>
                        <Text style={styles.btnCrossText}>X</Text>
                    </TouchableOpacity>
                    <View style={styles.inputParent}>
                    <Input placeholder={'Totol Number Of Subjects'} />
                    <Input placeholder={'Totol Number Of Subjects'} />

                    </View>

                    <Button text={'Next'} />


                </View>

            </View>
        </Modal>

    )
}

export default ModalSubjectDetails