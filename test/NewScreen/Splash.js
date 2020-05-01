
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  I18nManager,
  BackHandler
} from 'react-native';

// Force RTL
I18nManager.forceRTL(false);

import AppIntroSlider from 'react-native-app-intro-slider';

const data = [
  {
   
    text: 'به راحتی حواستون به همه مخارج باشه',
    image: require('../../image/hh.png'),
    bg: "#1cb5c7"
  },
  {
   
    text: 'همه پول ها و حسابهایتان را یکجا ببینید',
    image: require('../../image/hh.png'),
    bg:"#1cb5c7"
  },
  {
  
    text: "برای پرداختی هاتون بودجه بندی کنید",
    image: require('../../image/hh.png'),
    bg:"#1cb5c7"
  },
];

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"#1cb5c7",
  },
  image: {
    width: 320,
    height: 320,
    marginVertical: 32,
  },
  text: {
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  title: {
    fontSize: 22,
    color: 'white',
    textAlign: 'center',
  },
});

export default class App extends React.Component {
  componentDidMount() {
  
    BackHandler.addEventListener("hardwareBackPress", this.backPressed);
}
    backPressed = () => {
    let { routeName } = this.props.navigation.state;
    console.log("route is :  " + routeName);

    if (this.props.navigation.isFocused()) {
        console.log("ROUTE :  " + routeName);
        BackHandler.exitApp()

      
        return true;
    } else {
        return false;
    }
};



  _renderItem = ({item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  _keyExtractor = (item) => item.title;

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar translucent backgroundColor="transparent" />
        <AppIntroSlider
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          showPrevButton
          showSkipButton
          nextLabel="بعدی "
          prevLabel='برگشت'
          data={data}
         
        />
      </View>
    );
  }
}