
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    ScrollView,
    StatusBar,
    ActivityIndicator,
    Animated,
    Easing,

} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';
import { connect} from 'react-redux';
import {mobailchanged, passwordchanged,registerUser} from '../test/redux/action/indexRejesAction';
import Icon from 'react-native-vector-icons/FontAwesome';  

class RegisterScreen extends Component {
    constructor() {
        super();
        this.animatedValue3= new Animated.Value(0);
        this.state = {
            image: '',
            dialogVisible: false
        };

    }
//...........backe...........................
    
   
    // ................animated..............
    
    componentDidMount() {
        this.animate();
        
    }
    animate() {
        
        this.animatedValue3.setValue(0);
        const createAnimation = (value, duration, easing, delay = 0) => {
            return Animated.timing(value, {
                toValue: 1,
                duration,
                easing,
                delay,
                useNativeDriver: false,
            });
        };
        Animated.parallel([
            
            createAnimation(this.animatedValue3, 2000, Easing.linear)
        ]).start();
    }

    // ...........dialoge..............
    showDialog = () => {
        this.setState({ dialogVisible: true });
    };

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    };
    sendInput(inputText) {
        console.log("sendInput (DialogInput#1): " + inputText);
    }
    
    // ...............redux....................
    onMobailchange (text){
        this.props.mobailchanged(text);
        }
        onPasswordchange (text){
            this.props. passwordchanged(text)
            }
            onRejester (){
              const {Mobile,Password} = this.props;
              const {navigation}=this.props;
              this.props.registerUser(Mobile,Password,navigation);
            
            }
            renderButtom(){
                if(this.props.loading){
                  return (<ActivityIndicator />)
                 
                }
                return(   <TouchableOpacity activeOpacity={0.8} onPress={this.onRejester.bind(this)}>
                <LinearGradient colors={['#030905','#1cb5c7', '#030905']}style={styles.buttonlogin}>

                    <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'IRANSansMobile(FaNum)' }}>ثبت نام</Text>

                </LinearGradient>
            </TouchableOpacity>)
            }
              

    render() {
        const introBtnLogin = this.animatedValue3.interpolate({
            
            inputRange: [0, 1],
            outputRange: [-700, 1]
        });
      
        return (
            <View style={styles.container}>
                <StatusBar

                    hidden={true}
                //  backgroundColor='#ff4500'

                
                />

                <LinearGradient colors={['#030905','#1cb5c7', '#030905']} style={styles.header} >
                 

                    <View style={{ justifyContent: 'center', alignItems: 'center', height: '50%' }}>


                        <Image style={styles.avatar} source={require('../image/t.png')} />

                        <Text style={{ color: '#fff', fontSize: 16, fontFamily: 'IRANSansMobile(FaNum)', marginTop: -15, marginBottom: 10 }}></Text>

                    </View>
                </LinearGradient>

                <Animated.View style={[styles.profileDetail,{top: introBtnLogin}]}>
                    <View style={styles.detailContent}>
                        <Text style={styles.title}>فرم ثبت نام</Text>

                        <View style={[styles.inputContainer, { marginTop: 25, marginBottom: 5 }]}>
                            <Icon name="envelope" size={20} color="#777777" style={{ marginLeft: 8, marginRight: 2 }} />

                            <TextInput
                                style={styles.inputs}
                                placeholder="شماره موبایل خود را وارد کنید"
                                keyboardType='numeric'
                                underlineColorAndroid="transparent"
                                onChangeText={this.onMobailchange.bind(this)}
                                value={this.props.email}
                            />

                        </View>


                        <View style={[styles.inputContainer, { marginTop: 5,marginBottom:5 }]}>
                            <Icon name="user"   size={25} color="#777777" style={{ marginLeft: 10, }} />

                            <TextInput
                                style={styles.inputs}
                                placeholder="رمز خود را وار کنید"
                                keyboardType='name-phone-pad'
                                underlineColorAndroid="transparent"
                                secureTextEntry={true}
                                onChangeText={this.onPasswordchange.bind(this)}
                                value={this.props.password}
                            />

                        </View>
      
                    </View>
                    {/* <TouchableOpacity activeOpacity={0.8} onPress={() => this. onLoginUser.bind(this)}>
                        <LinearGradient colors={['#030905','#1cb5c7', '#030905']}style={styles.buttonlogin}>

                            <Text style={{ color: '#fff', fontSize: 18, fontFamily: 'IRANSansMobile(FaNum)' }}>ورود</Text>

                        </LinearGradient>
                    </TouchableOpacity> */}
                    {this.renderButtom()}

               </Animated.View>
            
                <View style={styles.body}>
                    <View style={styles.bodyContent}>

                        <View style={{ marginTop: 80, marginBottom: 50}}>
                          

                            <View style={{ marginTop:10, alignItems: 'center' }}>
                               
                            </View>

                       </View>
                       

                        <View style={{ marginTop: 2, alignItems: 'center' }}>

                         
                        </View>

                    </View>
                </View>
                <View style={styles.dialoge}>
                 
                </View>




            </View>
        );
    }
}

const styles = StyleSheet.create({
    dialoge: {

        //backgroundColor: 'beige',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        //backgroundColor: "#fc693b",
        // // padding: 10,
        // borderBottomStartRadius: 20,
        // borderBottomEndRadius: 20,
       paddingVertical: '20%',
        
       
        

    },
    headerContent: {
        padding: 30,
        alignItems: 'center',

    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
    },
    name: {
        fontSize: 22,
        color: "#FFFFFF",
        fontWeight: '600',
    },
    profileDetail: {
        alignSelf: 'center',
        marginTop: 230,
        marginBottom: 30,
        alignItems: 'center',
        // flexDirection: 'row',
        position: 'absolute',
        backgroundColor: "#ffffff",
        paddingHorizontal: 30,
        width: '80%',
        flex:5,
        // height: '45%',
        borderRadius: 5,
        shadowColor: '#808080',
        shadowOffset: {
            width: 0,
            height: 2,
            marginVertical: 5,
            marginRight: 16,
            marginBottom: 5

        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 12,


    },
    detailContent: {
        margin: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        color: "#00CED1"
    },
    count: {
        fontSize: 18,
    },

    textInfo: {
        fontSize: 18,
        marginTop: 20,
        color: "#696969",
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginTop: 80
    },

    buttonlogin: {
        // marginTop: 10,
        height: '45%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3,
        width: 150,
        borderRadius: 5,
        backgroundColor: "#fc693b",
      
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 12,
    },
    title: {
        fontSize: 18,
        color: "#777777",
        fontFamily: 'IRANSansMobile(FaNum)',
    },

    description: {
        fontSize: 20,
        color: "#00CED1",
        marginTop: 10,
        textAlign: 'center'
    },
    inputContainer: {
        borderColor: '#F5FCFF',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        borderWidth: 1,
        width: 220,
        height: 45,

        flexDirection: 'row',
        alignItems: 'center',

        shadowColor: '#808080',
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
    inputs: {
    textAlign: 'center',
    marginBottom: 7,
    height: 40,
    width: '80%',
   // borderWidth: 1,
    borderColor: '#DD2C00',
    borderRadius: 5,

    },
    inputIcon: {
        width: 30,
        height: 30,
        marginRight: 25,

    },
    btnForgotPassword: {
        height: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 5,
        width: 300,
        backgroundColor: 'transparent'
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        width: 300,
        borderRadius: 30,
        backgroundColor: 'transparent'
    },
});
const mapstatetoprops = state =>{
    return{
        Mobile : state.auth.Mobile,
    Password:state.auth.Password,
    loading:state.auth.loading,
    
    }
    }

export default connect (mapstatetoprops,{mobailchanged, passwordchanged,registerUser,})(RegisterScreen);
