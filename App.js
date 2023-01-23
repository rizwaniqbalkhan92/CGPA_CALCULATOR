import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
// com.facebook.FacebookSdk
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
import SplashScreen from 'react-native-splash-screen'
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigation from './src/Navigation/AuthNavigation'
import ScreensNavigation from './src/Navigation/ScreensNavigation'
import Practice from './src/authenticated/screens/Profile/Practice'
import right from './src/assets/Images/right.png';
import write from './src/assets/Images/write.png';
import down from './src/assets/Images/arrowDown.png';
import RadioButtonRN from 'radio-buttons-react-native';
const App = () => {
  useEffect(()=>{
    SplashScreen.hide();
  },[])


  return (
    <NavigationContainer>
{/* <AuthNavigation/> */}
{/* <ScreensNavigation/> */}
{/* // <View> */}
      {/* <Text>App</Text>
      <Button  text={'Get Started'} />
      <Input placeholder={'Enter Name'} />
      <Links btnOneText={'signUp'} btnTwoText={'forgotten'} /> */}
      {/* <CirclesDesign/> */}
{/* <SocialLogin/> */}
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
    {/* </View> */}
  
    <Practice type="string" before={write}  textField={'Email'} after={right} placeholder={'Enter Your Email'}  />
    <Practice type="string" before={down}  after={right} textField={'Name'}  placeholder={'Enter Your Email'} />
    <Practice type="radio" before={down}  after={right} textField={'Name'}  placeholder={'Enter Your Email'} />



    </NavigationContainer>
    )
}

export default App

