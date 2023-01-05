import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from './src/constants/Button'
import Input from './src/constants/Input'
import Links from './src/constants/Links'
import CirclesDesign from './src/constants/CirclesDesign'
import SocialLogin from './src/authentication/screens/SocialLogin'
import GetStarted from './src/authentication/screens/GetStarted'
import SignUp from './src/authentication/screens/SignUp'
import Login from './src/authentication/screens/Login'
import OnBoarding from './src/onboarding/screens/ScreenOne'
import BottomTabBar from './src/authenticated/screens/Home/BottomTabBar'
import Item from './src/constants/Item'
import List from './src/constants/List'
import Home from './src/authenticated/screens/Home/Home'
import AddBtn from './src/constants/AddBtn'
import AddSemester from './src/authenticated/screens/AddSemester/AddSemester'
import SubjectModal from './src/constants/subjectModal'

const App = () => {
  return (
    <View>
      {/* <Text>App</Text>
      <Button  text={'Get Started'} />
      <Input placeholder={'Enter Name'} />
      <Links btnOneText={'signUp'} btnTwoText={'forgotten'} /> */}
      {/* <CirclesDesign/> */}
<SocialLogin/>
{/* <GetStarted/> */}
{/* <SignUp/> */}
{/* <Login/> */}
    {/* <OnBoarding/> */}
{/* <Item/> */}
    {/* <BottomTabBar/> */}
    {/* <List/> */}
    {/* <Home/> */}
    {/* <AddBtn/> */}
    {/* <AddSemester/> */}
    {/* <SubjectModal/> */}
    </View>
  )
}

export default App

