
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Modal,
  StatusBar,
  ScrollView,
  RefreshControl,
  TextInput,TouchableWithoutFeedback,
  Animated
} from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';


export default class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      refreshing: false,
      modalVisible: false,
      userSelected: [],
      dataSource: [],
      mobile:'',
      Password:''
    


    };
  }
  GetStudentIDFunction=(mobile,password,_id)=>{
 
    this.props.navigation.navigate('list', { 

      ID :_id,
      PHONE_NUMBER : mobile,
     key : password

    });

}
  // ........modal...............

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  clickEventListener = () => {
    this.setState({

    
      
  });

      this.setModalVisible(true);
    
  }
 

  // ..........refresh.................
  _handleRefresh = () => {
    this.setState({ dataSource: responseJson.data })
  }

  //  ..............showalluse................
  componentDidMount  ()  {
    this.ShowRecord();
   
  }
  ShowRecord = () => {
  fetch('http://194.5.175.25:3000/api/v1/Showalluser')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    this.setState({
      isLoading: false,
      dataSource: responseJson.data
    })
  })
  .catch((error) => {
    console.error(error);
  });
}

  //  .................delete..........................
  DeleteRecord = (item) => {
    let id
    id = item._id;

    fetch('http://194.5.175.25:3000/api/v1/deleteuser/' + id, {

      method: 'DELETE',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _id: id
      })

    }).then((response) => response.json())
      .then((responseJson) => {

        console.log(responseJson);
        this.ShowRecord()

      }).catch((error) => {
        console.error(error);
      });
}
    // ............update..................
    UpdateRecord = () => {
      fetch('http://194.5.175.25:3000/api/v1/updateuser/5e8be1b8f1886b11dce3e4fe', {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: {
          mobile:this.state.mobile,
          password: this.state.password,
        }
      }).then((response) => response.json())
        .then((responseJson) => {
          console.log(responseJson);
        }).catch((error) => {
          console.error(error);
        });
    }
  
  render() {
    if (this.state.isLoading) {
      return (

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

          <ActivityIndicator size="large" />

        </View>

      );

    }
    return (
      <View style={styles.container}>
        <StatusBar

          hidden={false}
          backgroundColor='#030905'
        />
         <View style={{ height:'20%', flexDirection: 'row',justifyContent:'space-between' ,backgroundColor: "#1cb5c7" }}>
                <View style={{ marginTop:50, }} >
               
                <Icon name="filter" size={25} color="#fff" style={{ marginLeft: 5, }} />
                
                </View>
                <View style={{ flex: 5, justifyContent: 'center', paddingLeft: 10 ,alignItems:'center'}} >
                    <Text style={{ fontFamily: 'A Sogand', fontSize: 22, color: "#fff" ,alignItems:'center'}} >
                      shoping tara
                        {/* {this.props.title} */}
                    </Text>
                </View>
                <View style={{ marginTop:50 }} >
                <TouchableWithoutFeedback onPress={() => {}}>
                <View style={styles.burgerButton}>
                <Icon name="bars" size={20} color="#000" style={{ marginRight: 5, }} />
                </View>
                </TouchableWithoutFeedback>
                </View>

            </View>
     
        <FlatList style={styles.list}
          contentContainerStyle={styles.listContainer}
          data={this.state.dataSource}
          extraData={this.state.dataSource}
          horizontal={false}
          numColumns={2}
          refreshing={this.state.refreshing}
          onRefresh={this._handleRefresh}
          keyExtractor={(item) => {
            return item._id;
          }}
          renderItem={({ item }) => {
            return (
              <View style={styles.card} >
                <View style={styles.cardHeader}>

                  <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TouchableOpacity onPress={() => this.clickEventListener()
                     }>
                   
                      <Image style={[styles.icon, { justifyContent: 'flex-start', alignItems: 'flex-start' }]} source={require('../image/edite.png')} />

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { this.DeleteRecord(item) }}>


                      <Image style={[styles.icon, { justifyContent: 'flex-end', alignItems: 'flex-end' }]} source={require('../image/delete-sign.png')} />
                    </TouchableOpacity>
                  </View>

                </View>
                <Image style={styles.userImage} source={require('../image/hh.png')} />
                <View style={styles.cardFooter}>
                  <View style={{ alignItems: "center", justifyContent: "center" }}>
                    <Text style={styles.name}> {item.mobile}</Text>
                    <Text style={styles.position}>{item.password}</Text>

                  </View>
                </View>

              </View>

            )

          }} />
        <Modal
          animationType={'fade'}
          transparent={true}
          onRequestClose={() => this.setModalVisible(false)}
          visible={this.state.modalVisible}>
          <View style={styles.popupOverlay}>
          
            <View style={styles.popup}>
            <TouchableOpacity onPress={() => { this.setModalVisible(false) }}  >
                <Image style={styles.icon} source={require('../image/delete-sign.png')} />
       
              </TouchableOpacity>
            
              <View style={styles.popupContent}>
                <ScrollView contentContainerStyle={styles.modalInfo}>
                  <Image style={styles.userImage} source={require('../image/hh.png')} />
                  <Text>{this.state.userSelected.mobile}</Text>
               
                <TextInput
                    style={{
                        height: 40,
                        width:150,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: -5,
                        marginBottom: 2,
                        borderBottomWidth: 1
                    }}      
                    value={this.state.mobile}       
                    onChangeText={ this.setState({ mobile: value })}
                    placeholder="Enter food's name"
                                  
                />
                <TextInput
                    style={{
                        height: 40,
                        borderBottomColor: 'gray',
                        marginLeft: 30,
                        marginRight: 30,
                        marginTop: 3,
                        marginBottom: 5,
                        borderBottomWidth: 1
                    }}
                    
                    onChange={(text) => this.setState({ password: text })}
                    placeholder="Enter food's description"
                    value={this.state.password}
                />
              
                  <View>
                  </View>
                </ScrollView>
              </View>
              <View style={styles.popupButtons}>
              <Button
                    style={{ fontSize: 18, color: 'white' }}
                    containerStyle={{
                        padding: 8,
                        marginLeft: 1,
                        marginRight: 1,
                        height: 40,
                        width:'50%',
                        borderRadius: 6,
                        backgroundColor: '#1cb5c7'
                    }}
                    
                      onPress={() => { this.UpdateRecord() }}                                                                
                   >
                    Save
                </Button>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop:20,
  },
  header: {
    //backgroundColor: "#fc693b",
    // // padding: 10,
    // borderBottomStartRadius: 20,
    // borderBottomEndRadius: 20,
    paddingVertical: '14%',




  },
  list: {
    paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainer: {
    alignItems:'center'
  },
  /******** card **************/
  card: {
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor: "white",
    flexBasis: '46%',
    marginHorizontal: 5,
  },
  cardFooter: {
    paddingVertical: 17,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContent: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  userImage: {
    height: 90,
    width: 90,
    borderRadius: 60,
    alignSelf: 'center',
    borderColor: "#DCDCDC",
    borderWidth: 3,
  },
  name: {
    fontSize: 18,
    flex: 1,
    alignSelf: 'center',
    color: "#008080",
    fontWeight: 'bold'
  },
  position: {
    fontSize: 14,
    flex: 1,
    alignSelf: 'center',
    color: "#696969"
  },
  followButton: {
    marginTop: 10,
    height: 35,
    width: 100,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    backgroundColor: "#00BFFF",
  },
  followButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  /************ modals ************/
  popup: {
    backgroundColor: 'white',
    // backgroundColor : "#00BCD4",   
   marginTop: 150,
    marginHorizontal: 30,
    borderRadius: 7,
   // alignSelf:'center',
   // marginVertical:100,
    justifyContent:'center'
  },
  popupOverlay: {
    backgroundColor: "#00000057",
    flex: 1,
    marginTop: 5
  },
  popupContent: {
    //alignItems: 'center',
    margin: 5,
    height: 200,
  },
  popupHeader: {
    marginBottom:25
  },
  popupButtons: {
    marginTop: 15,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: "#eee",
    justifyContent: 'center'
  },
  popupButton: {
    flex: 1,
    marginVertical: 16
  },
  btnClose: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    width: 150,
    borderRadius: 5,
   
  },
  modalInfo: {
    marginTop: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {

    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',

    shadowColor: "#808080",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 12,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
    textAlign: 'center'
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  burgerButton: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 40,
    height: 40,
    paddingHorizontal:10,
    paddingVertical:10,
    borderRadius: 50,
    backgroundColor: '#fff',
    marginRight:10
  },
});


// import React, { Component } from 'react'
// import { StyleSheet, Text, View, Image, Button, Alert,ActivityIndicator } from 'react-native';
// import ListView  from 'deprecated-react-native-listview';


// export default class HomeScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//          isLoading:true
//         }
//     }
//     componentDidMount = () => {
//        fetch('http://194.5.175.25:3000/api/v1/Showalluser').then((response) => response.json())
//        .then((responseJson) => {
//           console.log(responseJson);
//           let ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1==r2});

//           this.setState({
//             isLoading:false,
//              dataSource: ds.cloneWithRows(responseJson)
//           })
//        })
//        .catch((error) => {
//           console.error(error);
//        });
//     }
//     listItemSeparator(){
//       return (
//         <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>




//       )
//     }
//     render() {

//       if (this.state.isLoading) {
//         return (

//          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

//             <ActivityIndicator size="large" />

//           </View>

//         );

//       }


//        return (
//          <View style={styles.MainContainer}>

//        <ListView

//         dataSource={ this.state.dataSource }

//         renderSeparator= {this.listItemSeparator.bind(this)}


//         renderRow={(rowData)=>
//           <View style={{flex:1, flexDirection: 'row'}}>



//               <Text  style={{color:'red'}}>{rowData.mobile}</Text>
//               <Text  style={{color:'red'}}>{rowData.Password}</Text>

//             </View>
//         }


//         />

//      </View>
//        )
//     }
//  }

//  const styles = StyleSheet.create({

//   MainContainer :{

//       justifyContent: 'center',
//       flex:1,
//       margin: 5,
//       marginTop: (Platform.OS === 'ios') ? 20 : 0,

//   },

//   imageView: {

//       width: '50%',
//       height: 100 ,
//       margin: 7,
//       borderRadius : 7

//   },

//   textView: {

//       width:'50%', 
//       textAlignVertical:'center',
//       padding:10,
//       color: '#000'

//   }

//   });