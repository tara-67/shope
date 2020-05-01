import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SectionList
} from 'react-native';
import { Avatar, Card, IconButton } from 'react-native-paper';

export default class ContactList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data:[
        {
         time:"20:00", 
         date_order:'2بهمن',
          data:[
            {key:1, name:'شیرینی', image:require('../image/2.png')},
            {key:2, name:'شکلات', image:require('../image/3.png')},
            {key:3, name:'دسر', image:require('../image/4.png')},
          ]
        },
        {
            time:"10:00",
            date_order:'2بهمن',  
          data:[
            {key:1, name:'حلوا',  image:require('../image/2.png')},
            {key:2, name:'دسر', image:require('../image/2.png')},
          ]
        },
       
      ]
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <SectionList
          sections={this.state.data}
          renderSectionHeader={({section}) => {
            return (
              <View style={styles.titleContainer}>
                  <Text style={styles.title}>
                     تاریخ:
                  {section.date_order}
                </Text>
                <Text style={styles.title}>
                   ساعت:
                  {section.time}
                </Text>
                
              </View>
            )
          }}
          renderItem={({item}) => {
            return (
            <View style={styles.notificationBox}>
              <TouchableOpacity onPress={() => {}}>
              
                
              </TouchableOpacity>
              <View style={styles.content}>
                <View style={styles.contentHeader}>
                  <Text  style={styles.name}>{item.name}</Text>
                </View>
              </View>
              <Image style={styles.image} source={ item.image}/>
            </View>
            )
        }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    notificationBox: {
        padding:5,
        //marginTop:5,
       // marginBottom:5,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
       // borderRadius:10,
       // justifyContent:'center',
        //alignItems:'center',
        marginHorizontal:10
    },
   
  root:{
    marginTop:20,
    padding:10,
  },
  titleContainer:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 2
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    marginVertical: 8,
    backgroundColor:"#DCDCDC",
    padding:5,
    flexDirection:'row',
    justifyContent:'space-around',
    marginHorizontal:20

  },
  title:{
    fontSize:15,
    color:"#000000"
  },
  container: {
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'flex-end',
  
    
  },
  content: {
    marginRight: 16,
    flex: 1,
  },
  contentHeader: {
    flexDirection: 'row',
   // justifyContent: 'space-between',
    marginBottom: 6,
    justifyContent:'flex-end'
  },
  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },
  image:{
    width:45,
    height:45,
    borderRadius:20,
    marginRight:20
  },
  time:{
    fontSize:11,
    color:"#808080",
  },
  name:{
    fontSize:16,
    fontWeight:"bold",
   
   // alignItems:'flex-end'
  },
  eventBox: {
    padding:10,
    marginTop:5,
    marginBottom:5,
    flexDirection: 'row',
  },
  eventDate:{
    flexDirection: 'column',
  },
  eventDay:{
    fontSize:50,
    color: "#0099FF",
    fontWeight: "600",
  },
  eventMonth:{
    fontSize:16,
    color: "#0099FF",
    fontWeight: "600",
  },
});