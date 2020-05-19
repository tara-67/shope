import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    TouchableOpacity,
    Picker,
    StatusBar,
    Text,
    Image,
    ScrollView,
    Button,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/FontAwesome';
import ImagePicker from 'react-native-image-picker';
import moment from 'moment';
import Select2 from 'react-native-select-two';
import DateTimePicker from 'react-native-modal-datetime-picker';
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker';
import { Switch } from 'react-native-paper';

//import Header from '../layouts/Header';
import LinearGradient from 'react-native-linear-gradient';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Modaldate from 'react-native-modal';

//.........const............
const typeIncome = [
    { id: 1, name: 'خانه' },
    { id: 2, name: 'قبوض' },
    { id: 3, name: 'شرکت' },
    { id: 4, name: 'ماشین' },
    { id: 5, name: 'تفریح و ورزش' },
    { id: 6, name: 'سفر' },
    { id: 7, name: 'شرکت' },
];
const acount = [
    { id: 1, name: 'از بانک ملی تا بانک صادرات' },
    { id: 2, name: 'بانک صادرات' },
    { id: 3, name: 'بانک تجارت' },
    { id: 4, name: 'بانک پارسیان' },
    { id: 5, name: 'حساب آرکا' },
    { id: 6, name: 'حساب دانشگاه لرستان' },
    { id: 7, name: 'حساب جهاد دانشگاهی' },
];


export default class advancedsearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            DateText: '',
            TimeText: '',
            DateHolder: null,
            PickerValueHolder: '',
            
            isModalVisible: false,
            isSwitchOn: false,
            isSwitchtow: false,
        };
    }

    // ......................modaldatepiker.....................
    toggleModal = () => {
        console.log(this.state.isModalVisible);
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };
    // ..................datepicker..................

    DatePickerMainFunctionCall = () => {

        let DateHolder = this.state.DateHolder;

        if (!DateHolder || DateHolder == null) {

            DateHolder = new Date();
            this.setState({
                DateHolder: DateHolder,
            });
        }
        //To open the dialog
        this.refs.DatePickerDialog.open({
            date: DateHolder,
        });
    };
    /**
     * Call back for dob date picked event
     *
     */
    onDatePickedFunction = (date) => {
        this.setState({
            dobDate: date,
            DateText: moment(date).format('DD-MMM-YYYY'),
        });

    };
    _onToggleSwitch = () => this.setState(state => ({ isSwitchOn: !state.isSwitchOn }));
    

    // ..................code............
    render() {
        const { isSwitchOn } = this.state;
        const { isSwitchtow } = this.state;
        return (
            <View style={styles.container}>
                <StatusBar
                    hidden={false}
                    backgroundColor='#47b03e'
                />
                <LinearGradient
                    style={styles.header}
                    start={{ x: 0.3, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                    locations={[0.1, 0.6, 0.9]}
                    colors={['#3e843d', '#3ede30', '#47b03e']}>
                    <View style={styles.headerContent}>

                        <Text style={{ fontSize: 20, color: '#fff', marginBottom: 5, fontFamily: 'Far_Aref' }}>
                            جستجوی پیشرفته
                </Text>
                    </View>
                </LinearGradient>
                <View style={styles.Detail}>


                    <View style={{ marginRight: 8, marginTop: 12, }}>
                        <Text> هزینه ها</Text>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={this._onToggleSwitch}
                            color='#47b03e'
                        />

                    </View>
                    <View style={{ marginRight: 8, marginTop: 12, }}>
                        <Text> درآمدها</Text>
                        <Switch
                            value={isSwitchOn}
                            onValueChange={this._onToggleSwitch}
                            color='#47b03e'
                        />


                    </View>

                </View>


                <ScrollView showsVerticalScrollIndicator={false}>



                    <View style={{ flexDirection: 'row', marginTop: 50 }}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.SectionStyle} onPress={this.toggleModal}>

                            <Text style={[styles.inputs, {
                                marginTop: -8,
                                textAlign: 'center',
                            }]}> {this.state.DateText}</Text>
                        </TouchableOpacity>
                        <View style={{ marginRight: 8, marginTop: 12, flex: 1 }}>
                            <Text style={{ fontSize: 16, flex: 2 }}>از تاریخ:</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/date.png')} /> */}
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Modaldate isVisible={this.state.isModalVisible}

                        >
                            <View style={{ flex: 1 }}>
                                <DatePicker isGregorian={false}
                                    mode="date"
                                    options={{
                                        defaultFont: 'Shabnam-Light',
                                        headerFont: 'Shabnam-Medium',
                                    }}
                                    onDateChange={date => {
                                        this.setState({ DateText: date });
                                        this.toggleModal();
                                    }

                                    }

                                    placeholder="Select date"
                                />
                                <Button title="انصراف" onPress={this.toggleModal} />
                            </View>
                        </Modaldate>
                    </View>

                    <View style={{ flexDirection: 'row', marginTop: 3 }}>
                        <TouchableOpacity activeOpacity={0.8} style={styles.SectionStyle} onPress={this.toggleModal}>

                            <Text style={[styles.inputs, {
                                marginTop: -8,
                                textAlign: 'center',
                            }]}> {this.state.DateText}</Text>
                        </TouchableOpacity>
                        <View style={{ marginRight: 8, marginTop: 12, flex: 1 }}>
                            <Text style={{ fontSize: 16, flex: 2 }}>تا تاریخ:</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/date.png')} /> */}
                        </View>
                    </View>

                    <View style={{ flex: 1 }}>
                        <Modaldate isVisible={this.state.isModalVisible}

                        >
                            <View style={{ flex: 1 }}>
                                <DatePicker isGregorian={false}
                                    mode="date"
                                    options={{
                                        defaultFont: 'Shabnam-Light',
                                        headerFont: 'Shabnam-Medium',
                                    }}
                                    onDateChange={date => {
                                        this.setState({ DateText: date });
                                        this.toggleModal();
                                    }

                                    }

                                    placeholder="Select date"
                                />
                                <Button title="انصراف" onPress={this.toggleModal} color= '#47b03e'/>
                            </View>
                        </Modaldate>
                    </View>
                    {/* .........................price....................................... */}

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="مبلغ"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{ marginRight: 5, marginTop: 12, flex: 1 }}>
                            <Text style={{ fontSize: 16, flex: 2 }}>  ازمبلغ :</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/639365.png')} /> */}
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row' }}>
                        <View style={styles.SectionStyle}>
                            <TextInput
                                style={styles.inputs}
                                placeholder="مبلغ"
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={{ marginRight: 5, marginTop: 12, flex: 1 }}>
                            <Text style={{ fontSize: 16, flex: 1 }}> تا مبلغ :</Text>
                            {/* <Image style={styles.imageIcon} source={require('../../../assets/images/icons/639365.png')} /> */}
                        </View>
                    </View>
                    {/*.........................select2...............................  */}

                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 10 }}>

                            <Select2

                                style={{
                                    borderRadius: 5,
                                    width: '138%',
                                    marginLeft: 44,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب نوع  دسته ها"
                                cancelButtonText="انصراف"
                                // newButtonText="جدید"
                                selectButtonText="تایید"
                                title="نوع دسته ها"
                                searchPlaceHolderText="جستجو نوع دسته"
                                data={typeIncome}
                                onSelect={data => {
                                    this.setState({ data });
                                }}
                                onRemoveItem={data => {
                                    this.setState({ data });
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 15, fontSize: 16, flex: 1 }}>
                            <Text style={{ fontSize: 16, marginRight: 5 }}> دسته ها:</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/2503483.png')} /> */}
                        </View>

                    </View>
                    {/* .........................select2....................................... */}
                    <View style={{ flexDirection: 'row' }}>

                        <View style={{ flexDirection: 'row', flex: 1, marginTop: 15 }}>




                            <Select2
                                style={{
                                    borderRadius: 5,
                                    width: '138%',
                                    marginLeft: 45,
                                    borderColor: '#3d933c',
                                    borderWidth: 1.5,
                                }}
                                isSelectSingle={true}
                                colorTheme='#3d933c'
                                popupTitle="انتخاب حساب"
                                cancelButtonText="انصراف"
                                selectButtonText="تایید"
                                title="انتخاب حساب"
                                searchPlaceHolderText="جستجو حساب"
                                data={acount}
                                onSelect={data => {
                                    this.setState({ data });
                                }}
                                onRemoveItem={data => {
                                    this.setState({ data });
                                }}
                            />
                        </View>
                        <View style={{ marginTop: 15, flex: 1 }}>
                            <Text style={{ fontSize: 16, marginRight: 7 }}> حساب:</Text>
                            {/* <Image style={[styles.imageIcon,{marginLeft:-40}]} source={require('../../../assets/images/icons/wallet.png')} /> */}
                        </View>
                    </View>




                    <TouchableOpacity activeOpacity={0.8}>
                        <LinearGradient
                            start={{ x: 0.48, y: 0.0 }} end={{ x: 0.5, y: 1.0 }}
                            locations={[0.1, 0.6, 0.9]}
                            colors={['#3e843d', '#3ede30', '#47b03e']}
                            style={{
                                borderRadius: 5, width: '70%', marginLeft: 45,
                                height: 45, marginTop: 20, marginBottom: 40,
                            }}>
                            <Text style={{ color: '#fff', textAlign: 'center', fontSize: 20, marginTop: 10 }}>جستجو</Text>

                        </LinearGradient>

                    </TouchableOpacity>

                </ScrollView>
                {/*............ ........modal4................................. */}

            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',


    },
    header: {
        backgroundColor: '#3d933c',
    },
    headerContent: {
        padding: 50,
        alignItems: 'center',
    },
    SectionStyle: {

        borderRadius: 5, width: '70%', marginLeft: 43, borderWidth: 1.5,
        borderColor: '#3d933c', height: 45, marginTop: 15,



    },


    imageIcon: {
        width: 30,
        height: 30,

        marginLeft: -15,
        marginTop: 10,

    },
    inputs: {
        textAlign: 'right',
        marginBottom: 7,
        height: 40,
        width: '95%',
        // borderWidth: 1,
        borderColor: '#DD2C00',
        borderRadius: 5,

    },
    popupButtons: {

        marginBottom: 10,
        flexDirection: 'row',
        flex: 1,
        borderColor: '#eee',
        justifyContent: 'center',
        marginLeft: -30,

    },
    popup: {
        marginTop: 20,
        marginBottom: 10,
        flexDirection: 'row',
        borderColor: '#e2e2e2',
        justifyContent: 'center',
        borderBottomWidth: 2,


    },

    icon: {
        width: 22,
        height: 22,
        marginTop: 20,
        marginLeft: -10,
    },
    // modal: {
    //     justifyContent: "center",
    //     alignItems: "center",
    //     borderRadius: 10
    // },
    modal4: {
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    modal3: {
        height: 250,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    card: {
        // // shadowColor: '#00000021',
        // // shadowOffset: {
        // //   width: 0,
        // //   height: 6,
        // },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,

        borderRadius: 5, width: '70%', marginLeft: 43,
        height: 100, marginTop: 15,
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
    cardTitle: {
        color: '#00BFFF',
    },

    Detail: {
        alignSelf: 'center',

        marginTop: 105,
        width: '60%',
        height: 70,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        position: 'absolute',
        backgroundColor: "#ffffff",
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
});
