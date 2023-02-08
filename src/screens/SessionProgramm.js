import React, { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Event from 'react-native-vector-icons/MaterialIcons';
import Scaner from 'react-native-vector-icons/MaterialIcons';
import Speker from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DayBtn from '../component/combocomponent/DayBtn';
import CardBtn from '../component/combocomponent/CardBtn';
import CardLocation from '../component/combocomponent/CardLocation';
import InterestedBtn from '../component/combocomponent/InterestedBtn';
import ImageIcon from '../component/combocomponent/ImageIcon';
import DateView from '../component/combocomponent/DateView';
import Left from 'react-native-vector-icons/Ionicons';
import Dot from 'react-native-vector-icons/AntDesign';
import { useNavigation,DrawerActions } from '@react-navigation/native'
const SessionProgramm = ({navigation}) => {
  // const navigation=useNavigation()
  const [dayone,setDayone]=useState(true)
  const [daytwo,setDaytwo]=useState(false)
  const [daythree,setDaythree]=useState(false)
const data=[
  {
    id:1
  },
  {
    id:2
  },
  {
    id:3
  },
  {
    id:4
  },
  {
    id:5
  }
]
  const theme = useTheme();

  const dayOne=()=>{
    setDayone(true)
    setDaytwo(false)
    setDaythree(false)
  }

  const dayTwo=()=>{
    setDayone(false)
    setDaytwo(true)
    setDaythree(false)
  }

  const dayThree=()=>{
    setDayone(false)
    setDaytwo(false)
    setDaythree(true)
  }
 
  return (
    <View style={styles.container}>
    
    <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.dispatch(DrawerActions.openDrawer())}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='ios-menu-outline' size={25} color="#1C2833"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"#1C2833",fontFamily:'SourceSansPro-SemiBold'}}>Home</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='filter' size={25} color="#5669FF"/>

           </View>

        </View>
     <TouchableOpacity onPress={()=>navigation.navigate('PrvEvents')}>
     <View style={styles.cardsWrapper}>
        
                <View style={styles.card}>
                <View style={styles.cardImgWrapper}>
                  <Image
                    source={{
                      uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
                    }}
                    resizeMode="contain"
                    style={styles.cardTop}
                  />
                </View>
               
              </View>
          
        
      </View>
     </TouchableOpacity>

      <View style={styles.categoryContainer}>

      <TouchableOpacity
    
      onPress={()=>dayOne()}
      style={{
        backgroundColor: dayone ? "#5669FF":"#fff",
        borderRadius: 50,
        alignItems: 'center',
        width: hp(15),
        paddingVertical:hp(1),
        margin:hp(0.5),
        borderColor: '#5669FF',
        borderWidth:1
        
      }}>
       <View style={{flexDirection:'column',alignItems:'center'}}>
      
      
      <Text style={{color: dayone ? "#fff":"#5669FF", fontSize:15,fontWeight:'600' }}>
        Day 1
      </Text>
     
      
        <Text style={{fontSize:10,color:dayone ? "#fff":"#5669FF"}}>7th Novenmber 2022</Text>
      

      </View>
    </TouchableOpacity>
    <TouchableOpacity
    
    onPress={()=>dayTwo()}
    style={{
      backgroundColor: daytwo ? "#5669FF":"#fff",
      borderRadius: 50,
      alignItems: 'center',
      width: hp(15),
      paddingVertical:hp(1),
      margin:hp(0.5),
      borderColor: '#5669FF',
      borderWidth:1
      
    }}>
     <View style={{flexDirection:'column',alignItems:'center'}}>
    
    
    <Text style={{color: daytwo ? "#fff":"#5669FF", fontSize:15,fontWeight:'600' }}>
      Day 2
    </Text>
   
    
      <Text style={{fontSize:10,color:daytwo ? "#fff":"#5669FF"}}>7th Novenmber 2022</Text>
    

    </View>
  </TouchableOpacity>
  <TouchableOpacity
    
    onPress={()=>dayThree()}
    style={{
      backgroundColor: daythree ? "#5669FF":"#fff",
      borderRadius: 50,
      alignItems: 'center',
      width: hp(15),
      paddingVertical:hp(1),
      margin:hp(0.5),
      borderColor: '#5669FF',
      borderWidth:1
      
    }}>
     <View style={{flexDirection:'column',alignItems:'center'}}>
    
    
    <Text style={{color: daythree ? "#fff":"#5669FF", fontSize:15,fontWeight:'600' }}>
      Day 3
    </Text>
   
    
      <Text style={{fontSize:10,color:daythree ? "#fff":"#5669FF"}}>7th Novenmber 2022</Text>
    

    </View>
  </TouchableOpacity>
        
      </View>
     {dayone && ( <ScrollView style={styles.container}>
      <View style={styles.cardsWrapper}>
        {data.map((item,index)=>{
          return(
          <TouchableOpacity onPress={()=>navigation.navigate('Home')} key={index}>
            <View style={styles.card}>
          <View style={{position:"absolute",top:hp(1),left:hp(8),zIndex:1}}>
              <DateView/>
          </View>
          <View style={styles.cardImgWrapper}>
            <View>
              
            </View>
            <Image
              source={{
                uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
              }}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Designing Schools of T...</Text>

            <Text style={styles.cardDetails}>
             10:00 - 11:00
            </Text>
            <CardBtn/>
            <ImageIcon/>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View>
                <CardLocation/>
                </View>
                <View>
                    <InterestedBtn/>
                </View>
            </View>
          </View>
        </View>
          </TouchableOpacity>
          )
        })}

      </View>
    </ScrollView>)}
    {daytwo && ( <ScrollView style={styles.container}>
      <View style={styles.cardsWrapper}>
        {data.map((item,index)=>{
          return(
            <View style={styles.card} key={index}>
          <View style={{position:"absolute",top:hp(1),left:hp(8),zIndex:1}}>
              <DateView/>
          </View>
          <View style={styles.cardImgWrapper}>
            <View>
              
            </View>
            <Image
              source={{
                uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
              }}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Designing Schools of T...</Text>

            <Text style={styles.cardDetails}>
             10:00 - 11:00
            </Text>
            <CardBtn/>
            <ImageIcon/>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View>
                <CardLocation/>
                </View>
                <View>
                    <InterestedBtn/>
                </View>
            </View>
          </View>
        </View>
          )
        })}

      </View>
    </ScrollView>)}
    {daythree && ( <ScrollView style={styles.container}>
      <View style={styles.cardsWrapper}>
        {data.map((number,index)=>{
          return(
            <View style={styles.card} key={index}>
          <View style={{position:"absolute",top:hp(1),left:hp(8),zIndex:1}}>
              <DateView/>
          </View>
          <View style={styles.cardImgWrapper}>
            <View>
              
            </View>
            <Image
              source={{
                uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
              }}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Designing Schools of T...</Text>

            <Text style={styles.cardDetails}>
             10:00 - 11:00
            </Text>
            <CardBtn/>
            <ImageIcon/>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View>
                <CardLocation/>
                </View>
                <View>
                    <InterestedBtn/>
                </View>
            </View>
          </View>
        </View>
          )
        })}

      </View>
    </ScrollView>)}
    {/* <BottomNavigator/> */}
    <View style={{flexDirection:'row',width:wp(100),height:hp(8),backgroundColor:'#fff',color:'#fff'}}>
        <View style={{flexDirection:'row',width:wp(95),marginLeft:hp(7)}}>
        <View style={{width:wp(33)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('AllEvents')}>
            <View>
               <View>
               <Event name='event' size={35} color='#1C2833'/>
               </View>
               <View>
                <Text style={{color:"#1C2833"}}>Event</Text>
               </View>
            </View>
          </TouchableOpacity>
         </View>
         <View style={{width:wp(33)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('RegisterScreen')}>
            <View style={{zIndex:1,marginBottom:hp(12),width:wp(18),height:hp(9),backgroundColor:'white',borderRadius:hp(50)}}>
               <View style={{marginLeft:hp(0.4)}}>
               <Scaner name='qr-code-scanner' size={35} color='#1C2833' style={{marginLeft:hp(1.5)}}/>
               </View>
               <View style={{marginLeft:hp(0.6)}}>
                <Text style={{color:"#1C2833",marginLeft:hp(1)}}>Scaner</Text>
               </View>
            </View>
          </TouchableOpacity>
         </View>
         <View style={{width:wp(33)}}>
          <TouchableOpacity onPress={()=>navigation.navigate('SpeakerList')}>
            <View>
               <View style={{marginLeft:hp(1)}}>
               <Speker name='user' size={35} color='#1C2833'/>
               </View>
               <View>
                <Text style={{color:"#1C2833"}}>Speker</Text>
               </View>
            </View>
          </TouchableOpacity>
         </View>
        </View>
    </View>
    </View>
  );
};

export default SessionProgramm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7F9F9'
  },
  sliderContainer: {
    height: 200,
    width: '95%',
    marginTop: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    borderTopRightRadius:8
  },



 
  categoryContainer: {
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  cardsWrapper: {
    position:'relative',
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    
    
  },
  card: {
    height:185,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
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
    borderTopRightRadius:0,
    borderBottomRightRadius:0
    
    
    
  },
  cardTop: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    // borderTopRightRadius:0,
    // borderBottomRightRadius:0
    
    
    
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"black",
    fontFamily:'SourceSansPro-SemiBold'
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
    fontFamily:"SourceSansPro-Regular"
  },
});