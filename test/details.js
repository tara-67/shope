import React, { Component } from 'react';

import { StyleSheet, View, TextInput, TouchableOpacity, Picker, StatusBar, Text, Image, Alert} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Button from 'react-native-button';
import ImagePicker from 'react-native-image-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DatePickerDialog } from 'react-native-datepicker-dialog'
import moment from 'moment'
import { ScrollView } from 'react-native-gesture-handler';



export default class detaillist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DateText: '',
      DateHolder: null,
      PickerValueHolder: '',
      image:'',
       selectedcat: "",
    category: [
      {
        itemName: "نقد"
      },
      {
        itemName: "چک"
      },
      {
        itemName: "کارت به کارت"
      },
     
    ]
  

    }
  }
 
  async onValueChangeCat(value) {
    this.setState({ selectedcat: value });
  }

  DatePickerMainFunctionCall = () => {

    let DateHolder = this.state.DateHolder;

    if (!DateHolder || DateHolder == null) {

      DateHolder = new Date();
      this.setState({
        DateHolder: DateHolder
      });
    }

    //To open the dialog
    this.refs.DatePickerDialog.open({

      date: DateHolder,

    });

  }

  /**
   * Call back for dob date picked event
   *
   */
  onDatePickedFunction = (date) => {
    this.setState({
      dobDate: date,
      DateText: moment(date).format('DD-MMM-YYYY')
    });
  }

  handleClick = () => {
      const options = {
          title: 'Select Image',
          storageOptions: {
              skipBackup: true,
              path: 'images'
          }
      };

      ImagePicker.showImagePicker(options, response => {
          console.log('Response = ', response);

          if (response.didCancel) {
              console.log('User cancelled image picker');
          } else if (response.error) {
              console.log('ImagePicker Error: ', response.error);
          } else {
              this.setState({ image: response });
          }
      });
      }
  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
  }
  show = mode => {
    this.setState({
      show: true,
      mode,
    });
  }
  datepicker = () => {
    this.show('date');
  }

  timepicker = () => {
    this.show('time');
  }

  render() {
    const  image  = this.state;
    return (
      <View style={styles.container}>
        <StatusBar
          hidden={false}
        //  backgroundColor='#ff4500' 
        />

        <ScrollView>
        <Text> برای ثبت درامد های روزانه خود فرم زیر را پرکنید </Text>
          <View style={{ flexDirection: 'row', marginTop: 20 }}>
            <TouchableOpacity activeOpacity={0.8} style={styles.SectionStyle} onPress={this.DatePickerMainFunctionCall.bind(this)}  >

              <Icon name="sort-desc" size={20} color="#777777" style={{ marginLeft: 8, marginTop: 2 }} />
              <Text style={[styles.inputs, { marginTop: 4 }]}>{this.state.DateText}</Text>
            </TouchableOpacity>
            <Image style={styles.imageIcon} source={require('../image/pay-date.png')} />
          </View>
          <DatePickerDialog ref="DatePickerDialog" onDatePicked={this.onDatePickedFunction.bind(this)} 
          />
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.SectionStyle}>

              <Icon name="sort-desc" size={20} color="#777777" style={{ marginLeft: 8, marginTop: 2 }} />

              <TextInput
                style={styles.inputs}
                placeholder="مبلغ"
                underlineColorAndroid="transparent"
              />
            </View>
            <Image style={styles.imageIcon} source={require('../image/coin.png')} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.SectionStyle} >
            <Icon name="sort-desc" size={20} color="#777777" style={{ marginLeft: 8, marginTop: 2 }} />

            <TextInput
                style={styles.inputs}
                placeholder="درافت ها"
                underlineColorAndroid="transparent"
              />
             

            </View>
            <Image style={styles.imageIcon} source={require('../image/get.png')} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={styles.SectionStyle}>
              <Icon name="sort-desc" size={20} color="#777777" style={{ marginLeft: 8, marginTop: 3 }} />
              <TextInput
                style={styles.inputs}
                placeholder="حساب ها"
                underlineColorAndroid="transparent"
              />

            </View>
            <Image style={styles.imageIcon} source={require('../image/walet.png')} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.SectionStyle,{backgroundColor: '#e7e3e3',height:100}]}>
             
              <TextInput
                 placeholder="توضیحات"
                 style={[styles.inputs,{marginLeft:15}]}
              underlineColorAndroid="transparent"
              />

            </View>
            <Image style={styles.imageIcon} source={require('../image/date2.png')} />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <View style={[styles.SectionStyle,{height:250}]}>
            {image && (
                       <Image
                           source={{ uri: this.state.image.uri }}
                           // style={{ width: 200, height: 250, }}
                           style={{  width: '80%',
                       //  height:'80%',
                            alignItems: 'center',
                            height: 250,
                        
                          // borderColor:'#3d933c',
                           height: 200,
                           borderRadius: 5,
                           margin: 7,}}
                       />
                   )}
           
            </View>
            <Image style={styles.imageIcon} source={require('../image/date2.png')} />
            <Button
              
              style={{ fontSize: 16, color: 'white' }}
              containerStyle={{
                  padding: 8,
                  marginLeft: 1,
                  marginRight:30,
                  height: 40,
                  width:'40%',
                  borderRadius: 6,
                  backgroundColor:'#3d933c'
              }}
              onPress={() => {this.handleClick()}}
                                                                             
             >
               
             پیوست فایل
          </Button>
          </View>
          <View style={{flexDirection:'row'}}></View>
          <View
               style={{flexWrap:'wrap',justifyContent:'center',alignItems:'center',  flexDirection: 'row',marginRight:5
               }}
               >
               {image && (
                       <Image
                           source={{ uri: this.state.image.uri }}
                           // style={{ width: 200, height: 200, }}
                           style={{  width: '80%',
                       //  height:'80%',
                            alignItems: 'center',
                           borderRadius:5,
                           borderWidth: 2,
                        
                           borderColor:'#3d933c',
                           height: 200,
                           borderRadius: 5,
                           margin: 7,}}
                       />
                   )}
                
   </View>
         
         
        </ScrollView>
        <View style={styles.popupButtons}>
              <Button
              
                    style={{ fontSize: 16, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 1,
                        marginRight:30,
                        height: 40,
                        width:'40%',
                        borderRadius: 6,
                        backgroundColor:'#3d933c'
                    }}
                  
                                                    
                   >
                  
                  ثبت
                </Button>
               
              </View>
           
         
         
      </View>
    );
  }
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 10
  },

  SectionStyle: {
    width: '80%',
    flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#3d933c',
    height: 45,
    borderRadius: 5,
    margin: 7,
    shadowColor: '#808080',
    marginHorizontal: 25,
    shadowOffset: {
      width: 0,
      height: 2,
      marginVertical: 5,
      marginRight: 16,
      marginBottom: 12

    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center'
  },
  content: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  datePickerBox: {
    marginTop: 9,
    borderColor: '#FF5722',
    borderWidth: 0.5,
    padding: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    height: 38,
    justifyContent: 'center'
  },

  datePickerText: {
    fontSize: 14,
    marginLeft: 5,
    borderWidth: 0,
    color: '#000',

  },
  imageIcon: {
    width: 30,
    height: 30,
    //  marginRight: 15,
    // justifyContent: 'center'
    marginLeft: -15,
    marginTop: 10

  },
  inputs: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
    // borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,

  },
  popupButtons: {
    marginTop: 20,
    flexDirection: 'row',
    marginLeft:15,
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center',
    
  },
  itemStyle: {
    fontSize: 10,
    fontFamily: "Roboto-Regular",
    color: "#007aff"
  },
  pickerStyle: {
    width: "100%",
    height: 40,
    color: "#007aff",
    fontSize: 14,
    fontFamily: "Roboto-Regular",
    alignItems:'flex-end'
  },
  textStyle: {
    fontSize: 14,
    fontFamily: "Roboto-Regular"
  }

});
