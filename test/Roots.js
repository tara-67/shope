import React from 'react';
import { View } from "react-native";
import {AsyncStorage} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import RegisterScreen from '../test/RegisterScreen';
import SplashScreen from '../test/Splash';
import HomeScreen from '../test/Home';
 import detaillist  from '../test/details';
import loginScreen from '../test/LoginScreen';
import Splash from '../test/NewScreen/Splash'
AsyncStorage.setItem('user','gvbkjnlkk');
const RootStack = createStackNavigator({
 
  splash: {
    screen:SplashScreen,
    navigationOptions: {
      headerShown: false
         
       },
},
  login: {
    screen:loginScreen,
    navigationOptions: {
      headerShown: false
         
       },
},
Register: {
  screen:RegisterScreen ,
  navigationOptions: {
    headerShown: false
       
     },
},
 
Home: {
  screen:HomeScreen,
  navigationOptions: {
    headerShown: false
       
     },
     
},
list: {
  screen:detaillist,
  navigationOptions: {
    title: "دریافت",
    headerRight: () => <View />,
    headerTintColor: "#FFF",
    headerStyle: {
      borderBottomColor: "white",
      backgroundColor:'#3d933c',
      height:80
    },
    headerTitleStyle: {
      color: "#fff",
      textAlign: "center",
      flex: 1,
      textAlign:'center',
      elevation: 0,
      fontSize: 25,
      justifyContent: "center",
      
    }
  }
},
    
    
  
 
  
 
});
export default  createAppContainer(RootStack);