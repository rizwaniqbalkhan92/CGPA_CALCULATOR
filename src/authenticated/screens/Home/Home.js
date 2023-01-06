import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Item from '../../../constants/Item'
import BottomTabBar from './BottomTabBar'
import { styles } from '../../styles/homeStyle'
import List from '../../../constants/List'
import TextContainer from './TextContainer'

const Home = ({navigation}) => {
    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.shareBtn}>
                <Text style={styles.btnText}>Share</Text>
            </TouchableOpacity>
            <TextContainer/>
            <List />
            {/* <TouchableOpacity style={styles.moreBtn}>
                <Text style={styles.btnText}>More</Text>
            </TouchableOpacity> */}
            <BottomTabBar navigation={navigation}   />
        </View>
    )
}

export default Home