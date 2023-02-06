import React, { useState } from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import pepsi from '../../assets/img/pepsi.png'
import walls from '../../assets/img/walls.png'
import oye from '../../assets/img/oye.png'
import princ from '../../assets/img/princ.png'
import alid from '../../assets/img/alid.png'
import {
    View,
    Text,
    Image,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import { useTheme } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import ExibitorBtn from '../component/combocomponent/ExibitorBtn';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/EvilIcons';

const Sponser = () => {
    
    const [data,setData]=useState([
        {
            image:pepsi,
            backgroundColor:"#AFAFAF",
            name:"Gold",
            disc:"Pepsi Cola"
        },
        {
            image:walls,
            backgroundColor:"#FFD700",
            name:"Walls",
            disc:"Walls Brand"
        },
        {
            image:oye,
            backgroundColor:"#FFD700",
            name:"oye",
            disc:"Oye Hoye"
        },
        {
            image:princ,
            backgroundColor:"#FFD700",
            name:"Princ",
            disc:"Princ Walls"
        }
    ])
    const theme = useTheme();
    return (
        <View style={styles.container}>
           
            <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"black"}}>Exibitors</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(1.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='search' size={35} color="#5669FF"/>

           </View>

        </View>
        <ScrollView style={styles.container}>
            {/* <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} /> */}

            <View style={styles.cardsWrapper}>

                {data.map((card,index)=>{
                    return(
                        <View style={styles.card} key={index}>

                        <View style={styles.cardImgWrapper}>
                            <View style={{ width: hp(10), height: hp(10), marginTop: hp(1.4), marginLeft: hp(1.3) }}>
                                <Image
                                    source={card.image}
                                    resizeMode="contain"
                                    style={styles.cardImg}
                                />
                            </View>
    
    
                        </View>
                        <View style={styles.cardInfo}>
                            <Text style={styles.cardTitle}>{card.disc}</Text>
                            <View style={{ marginTop: hp(3) }}>
                                {/* <ExibitorBtn /> */}
                                <TouchableOpacity
    
                                   
                                    style={{
                                        backgroundColor: "#FFD700",
                                        borderRadius: 50,
                                        alignItems: 'center',
                                        width: hp(10),
                                        paddingVertical:hp(0.5),
                                        marginTop:hp(1),
                                        borderColor: '#5669FF',
                                        
                                        marginBottom:hp(1)
                                        
                                    }}>
                                    <View style={{flexDirection:'column',alignItems:'center'}}>
                                    
                                    
                                    <Text style={{color: "#fff", fontSize:15,fontWeight:'600', }}>
                                        {card.name}
                                    </Text>
                                    
                                    
                                    

                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    )
                })}
              
            </View>
        </ScrollView>
        </View>
    );
};

export default Sponser;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#F7F9F9'
    },


    cardsWrapper: {
        position: 'relative',
        marginTop: 20,
        width: '95%',
        alignSelf: 'center',

    },
    card: {
        height: hp(14),
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,

    },
    cardImgWrapper: {
        backgroundColor: "#fff",
        flex: hp(0.1),
        height:hp(14),
        marginRight: hp(1),
        borderColor: "#EBEEF2",
        borderWidth: 3,
        borderRadius: hp(3)

    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        borderColor: "#EBEEF2",
        borderWidth: 3,
        borderRadius: hp(3),
        flex: 2,
        padding: 10,



        // borderBottomRightRadius: 8,
        // borderTopRightRadius: 8,
        // borderTopLeftRadius:8,
        // borderBottomLeftRadius:8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: "#1C2833",
        
    },
    cardDetails: {
        fontSize:hp(3),
        color: '#1C2833',
    },
});