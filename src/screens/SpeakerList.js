import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Image1 from '../../assets/img/dr1.png';
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
    TextInput,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/AntDesign';
import Aero from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';



export default function SpeakerList() {
    const navigation = useNavigation();
    const data=[1,2,3,4,5,6,7,8,9]
    return (
        <View style={styles.container}>
             <View style={{marginBottom:hp(3),flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"#1C2833",fontFamily:'Roboto-Medium'}}>Speaker List</Text>
           </View>
           </TouchableOpacity>
        

        </View>
            <View style={{backgroundColor:"#fff",width:wp(95),height:hp(6),borderRadius:50,borderColor:"gray",borderWidth:1,flexDirection:'row',marginLeft:hp(1),paddingHorizontal:hp(0)}}>
                <View style={{width:wp(85)}}>
                    <TextInput

                        style={{ backgroundColor:"#fff",borderRadius: 100, color: '#1C2833', paddingHorizontal: 10, paddingVertical: 15, width: wp(80), marginVertical: 10, borderColor: "#EBEEF2",color:'black' }}
                        placeholderStyle={{marginLeft:hp(2),color:"#1C2833"}} placeholder='Search'></TextInput>
                </View>
                <View style={{marginTop:hp(2),marginRight:hp(12),width:wp(15)}}>
                <Icon style={{marginRight:hp(2)}} name='search1' size={25} color="gray"/>
                </View>
                <View>

                </View>
            </View>

            {/* listview */}

            <ScrollView>
                {data.map((item,index)=>{
                    return(
                        <View style={{backgroundColor:"#fff",shadowColor:'#000',shadowOpacity:0.25,shadowRadius: 3.84,shadowOffset:{width:0, height:3},width:wp(95),height:hp(12),borderRadius:12,borderColor:"#EBEEF2",borderWidth:1,flexDirection:'row',marginLeft:hp(1),paddingHorizontal:hp(0),marginTop:hp(4)}} key={index}>
                        <View style={{width:wp(20)}}>
                        <Image style={{height:hp(10),width:hp(10),borderRadius:hp(50),marginTop:hp(1),marginLeft:hp(0.5)}} source={Image1}  />
                        </View>
                        <View style={{width:wp(40),marginLeft:hp(2),marginTop:hp(2)}}>
                            <Text style={styles.cardTitle}>Dr Lawrence Burke</Text>
                            <Text>Designation</Text>
                        </View>
                        <TouchableOpacity onPress={()=>navigation.navigate("SessionDetail")}>
                        <View style={{marginTop:hp(3),marginLeft:hp(6),width:wp(15),height:hp(6),backgroundColor:"#fff",borderRadius:hp(1)}}>
                        <Aero style={{marginLeft:hp(2),marginTop:hp(1)}} name='arrowright' size={30} color="#356BF8"/>
                        </View>
                        </TouchableOpacity>
                        
                    </View>
                    )
                })}
            
            </ScrollView>
           
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: hp(5),
        backgroundColor:"#F7F9F9"
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '95%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    cardsWrapper: {
        position: 'relative',
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',

    },
    card: {
        height: 185,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

    },
    cardImgWrapper: {
        flex: 1.5,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: 'none',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#1C2833",
        marginBottom:hp(1.7),
        fontFamily:'Roboto-Bold'
    },
    cardDetails: {
        fontSize: 15,
        color: '#444',
    },
});
