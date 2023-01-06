import { View, Text, Image, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Calculator from '../../assets/Images/calculator.png';
import Cap from '../../assets/Images/cap.png';
import List from '../../assets/Images/list.jpg';
import { styles } from '../styles/onboardingStyle';
import CirclesDesign from '../../constants/CirclesDesign';
import Buttons from './Buttons';



const OnBoarding = () => {
    const data = [
        { description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface', img: Calculator }
        , { description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface', img: Cap }
        , { description: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface', img: List }
    ]

    return (
<View>
{/* <CirclesDesign /> */}
        <FlatList
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').width}
        horizontal data={data} renderItem={({ item }) => (
            <View style={styles.container}>

                <View style={styles.imageAndtext} >
                    <Image source={item.img} style={styles.onboardingImage} resizeMode='contain' />
                    <Text style={styles.onboardingText}>{item.description}</Text>

                </View>
                <View style={styles.dots}>
                    <View style={styles.dotActive}></View>
                    <View style={styles.dot}></View>
                    <View style={styles.dot}></View>

                </View>
        
            </View>
        )} />     
           <Buttons />
        </View>
    )
}



export default OnBoarding