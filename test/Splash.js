import React, { Component } from 'react';
import {
  Platform, StyleSheet, View, Text,
  Image, TouchableOpacity, Alert, ImageBackground, StatusBar
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {AsyncStorage} from 'react-native';

export default class SplashScreen extends Component {


  constructor() {
    super();
    this.state = {
      isVisible: true,
    }
  }



  // componentDidMount() {

  //   // setTimeout(() => {
  //     AsyncStorage.getItem('user', (err, result) => {
  //       console.log(result);
  //       if(result===null)
  //       this.props.navigation.navigate('list');
  //       else
  //       this.props.navigation.navigate('Home');

  //     });
  //   //  console.log(ss)
    
  //   // }, 4000)
  // }
 componentDidMount() {

     setTimeout(() => {
     
        this.props.navigation.navigate('list');
        

      
   
    
     }, 4000)
  }
  render() {
    let Splash_Screen = (
      <View style={styles.SplashScreen_RootView}>
        <StatusBar
          hidden={true}
          translucent={true}
          networkActivityIndicatorVisible={true}
        />
        <LinearGradient colors={['#030905', '#1cb5c7', '#030905']} style={styles.SplashScreen_ChildView} >
          <View style={styles.SplashScreen_ChildView}>
            <Image style={styles.avatar} source={require('../image/t.png')} />
            <Text style={{ fontSize: 40, color: '#fff' }}>shoping tara</Text>
          </View>
        </LinearGradient>
      </View>)
    return (
      <View style={styles.MainContainer}>
        <Text style={{ textAlign: 'center' }}> Splash Screen Example</Text>
        {
          (this.state.isVisible === true) ? Splash_Screen : null
        }
      </View>
    );
  }
}
const styles = StyleSheet.create(
  {
    MainContainer:
    {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: (Platform.OS === 'ios') ? 20 : 0
    },

    SplashScreen_RootView:
    {
      justifyContent: 'center',
      flex: 1,
      margin: 10,
      position: 'absolute',
      width: '100%',
      height: '100%',
    },

    SplashScreen_ChildView:
    {
      justifyContent: 'center',
      alignItems: 'center',
      // backgroundColor: '#00BCD4',  
      flex: 1,
    },
    avatar: {
      width: 100,
      height: 100,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom: 10,
    },
  });  