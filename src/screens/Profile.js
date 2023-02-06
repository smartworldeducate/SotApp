import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
import Image1 from '../../assets/img/dr1.png';
import Icon from 'react-native-vector-icons/FontAwesome';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/Entypo';
// import {ImagePicker} from 'react-native-image-crop-picker';

export default function Profile({navigation}) {
   const [uri,setUri]=useState(null)
    const [about,setAbout]=useState(true)
    const [session,setSession]=useState(false)

    const handleAbout=()=>{
      setAbout(true)
      setSession(false)
    }
    const handleSession=()=>{
        setAbout(false)
        setSession(true)
    }

    // const pickPicture = () => {
    //     ImagePicker.openPicker({
    //       width: 300,
    //       height: 400,
    //       cropping: true,
    //     }).then(image => {
    //       setUri(image.path);
    //       props.onChange?.(image);
    //     });
    //   };
  return (
    <View style={styles.container}>
         <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"black",fontFamily:"SourceSansPro-SemiBold"}}>Profile</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='dots-three-vertical' size={25} color="#5669FF"/>

           </View>

        </View>
        <View style={{position:'relative',alignContent:'center',justifyContent:'center',alignItems:'center',width:wp(100)}}>
          <View style={{width:wp(10),height:hp(5),borderRadius:hp(50),position:'absolute',zIndex:1,backgroundColor:"#5669FF",top:hp(15),left:hp(30)}}>
           <TouchableOpacity>
           <Icon style={{marginTop:hp(1),marginLeft:hp(1)}} name='edit' size={25} color="#fff"/>

           </TouchableOpacity>

          </View>  
        <Image style={{height:hp(20),width:hp(20),borderRadius:hp(50),marginTop:hp(1),marginLeft:hp(0.5)}} source={Image1}  />
        <Text style={{fontSize:hp(3),fontWeight:'bold',color:"black",fontFamily:'SourceSansPro-SemiBold'}}>Dr Lawrence Burke</Text>
        <Text style={{fontSize:hp(2.5)}}>Dr Lawrence Burke</Text>

        </View>
        
        <View style={{flexDirection:'row',marginTop:hp(4)}}>
            <View style={{marginLeft:hp(4.5)}}>
                <TouchableOpacity
                    
                    onPress={()=>handleAbout()}
                    style={{
                        backgroundColor: about? "#5669FF":"#fff",
                        borderRadius: 30,
                        alignItems: 'center',
                        width: hp(20),
                        paddingVertical:hp(1),
                        margin:hp(0.5),
                        borderColor: '#5669FF',
                        borderWidth:1,
                        
                        // paddingHorizontal:hp(8)
                        
                    }}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    
                    
                    <Text style={{color:session ? "#5669FF":"#fff", fontSize:20,fontWeight:'bold' }}>
                        About
                    </Text>
                    
                    
                    

                    </View>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                    
                    onPress={()=>handleSession()}
                    style={{
                        backgroundColor:session ? "#5669FF":"#fff",
                        borderRadius: 30,
                        alignItems: 'center',
                        width: hp(20),
                        paddingVertical:hp(1),
                        margin:hp(0.5),
                        borderColor: '#5669FF',
                        borderWidth:1,
                        // paddingHorizontal:hp(8)
                        
                    }}>
                    <View style={{flexDirection:'column',alignItems:'center'}}>
                    
                    
                    <Text style={{color: about? "#5669FF":"#fff", fontSize:20,fontWeight:'bold' }}>
                        Session
                    </Text>
                    
                    
                        
                    

                    </View>
                </TouchableOpacity>
            </View>
           
        </View>

        {about && (<View style={{ flexDirection: 'row',width:wp(90),marginLeft:hp(5),marginTop:hp(2)}}> 
            <Text style={{ flexShrink: 1,alignItems:'center',textAlign: 'justify',
    lineHeight: 20,letterSpacing:0.5 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </View>)}


        {session && (<View style={{backgroundColor:"#fff",width:wp(95),height:hp(20),borderRadius:12,borderColor:"#EBEEF2",borderWidth:1,flexDirection:'row',marginLeft:hp(1),paddingHorizontal:hp(0),marginTop:hp(4)}}>
                        <View style={{width:wp(20)}}>
                        </View>
                        <View style={{width:wp(40),marginLeft:hp(2),marginTop:hp(2)}}>
                            <Text style={styles.cardTitle}>Dr Lawrence Burke</Text>
                            <Text>Designation</Text>
                        </View>
                       
                       
                    </View>)}

    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F7F9F9'
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
        color: "black",
        marginBottom:hp(1.7)
    },
    cardDetails: {
        fontSize: 15,
        color: '#444',
    },
});

