import { useState } from "react";
import { Text, View,StyleSheet,Image, ScrollView, TouchableOpacity,TextInput } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import kk from '../../assets/img/kk.png'
import Image1 from '../../assets/img/Image1.png';
import Image2 from '../../assets/img/Image2.png';
import Image3 from '../../assets/img/Image3.png';
import Icon from 'react-native-vector-icons/EvilIcons';
import Calinder from 'react-native-vector-icons/FontAwesome';
import Location from 'react-native-vector-icons/Entypo';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/Entypo';
import Cancel from 'react-native-vector-icons/Entypo';
import { BottomSheet } from '@rneui/themed';


export default function SessionDetail({navigation}) {
    const [isVisible, setIsVisible] = useState(false);
    const [isPoll, setIsPoll] = useState(false);
    const [isEq, setIsEq] = useState(false);
  return (
    <View style={styles.container}>
          <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8),zIndex:1}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"black"}}>Session Detail</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='dots-three-vertical' size={25} color="#5669FF"/>

           </View>

        </View>
        <ScrollView>
          <View style={{height:hp(12)}}>
            <Image style={{height:hp(40)}} source={kk}/>
          </View>
          
          <View style={{flexDirection:'row',marginTop:hp(30),marginLeft:hp(8),position:'relative'}}>
               <View style={{width:hp(15),position:'absolute',marginLeft:hp(3),zIndex:3}}>
               
               <Image style={{height:hp(5),width:hp(5)}} source={Image1}  />
                
               </View>
               <View style={{width:hp(15),position:'absolute',marginLeft:hp(6),zIndex:2}}>
               
               <Image style={{height:hp(5),width:hp(5)}} source={Image2}  />
                
               </View>
               <View style={{width:hp(15),position:'absolute',marginLeft:hp(9),zIndex:1}}>
               
               <Image style={{height:hp(5),width:hp(5)}} source={Image3}  />
                
               </View>
               <View style={{flexDirection:'row',marginLeft:hp(16),marginTop:hp(1)}}>
               <Text style={{fontSize:hp(2.5),color:"gray"}}>Speakers</Text>
                
                    <Icon style={{marginLeft:hp(2)}} name='arrow-right' size={35} color="#356BF8"/>
      

               </View>
          </View>
          <View style={{marginLeft:hp(3),width:wp(90),marginTop:hp(2)}}>
            <Text style={{fontSize:hp(3.5),color:"#1C2833"}}>
            Celebrities and Influencers - Social Media's Impact on...
            </Text>
          </View>

          <View style={{flexDirection:'row',width:wp(90),marginLeft:hp(2),marginTop:hp(2)}}>
            <View style={{width:wp(20),height:hp(10),backgroundColor:"#F5F5F5",borderRadius:hp(50),justifyContent:'center',alignItems:'center'}}>
               <Calinder name="calendar-check-o" size={35} color="#356BF8"/>
            </View>
            <View style={{marginTop:hp(1.5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(2.5),color:"#1C2833",fontWeight:"bold"}}>December 14, 2021</Text>
                <Text style={{fontSize:hp(2.5),color:"#1C2833"}}>Tuesday, 4:00 - 09:00 PM</Text>
            </View>
          </View>

          <View style={{flexDirection:'row',width:wp(90),marginLeft:hp(2),marginTop:hp(2)}}>
            <View style={{width:wp(20),height:hp(10),backgroundColor:"#F5F5F5",borderRadius:hp(50),justifyContent:'center',alignItems:'center'}}>
               <Location name="location-pin" size={35} color="#356BF8"/>
            </View>
            <View style={{marginTop:hp(1.5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(2.5),color:"#1C2833",fontWeight:"bold"}}>Gala Convention Center</Text>
                <Text style={{fontSize:hp(2.5),color:"#1C2833"}}>Tuesday, 4:00 - 09:00 PM</Text>
            </View>
          </View>

          <View style={{marginLeft:hp(3)}}>
            <Text style={{fontSize:hp(3),color:"#1C2833"}}>About Session</Text>
            <View style={{width:wp(90)}}>
                <Text style={{fontSize:hp(2),color:"#1C2833"}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut <Text style={{fontSize:hp(2),color:"#356BF8"}}>Read more...</Text>
                </Text>
            </View>
          </View>

          <View style={{flexDirection:'row',width:wp(90),marginTop:hp(2),marginLeft:hp(3)}}>
             <View>
                <TouchableOpacity onPress={() => setIsVisible(true)}><Text style={{fontSize:hp(2.5),color:"#356BF8"}} >Ask a question</Text></TouchableOpacity>
             </View>
             <View style={{marginLeft:hp(3),marginRight:hp(3),width:wp(1),height:hp(5),backgroundColor:"gray",borderRadius:hp(50)}}></View>
             <View>
                <TouchableOpacity onPress={() => setIsPoll(true)}><Text style={{fontSize:hp(2.5),color:"#356BF8"}}>Poll</Text></TouchableOpacity>
             </View>
             <View style={{marginLeft:hp(3),marginRight:hp(3),width:wp(1),height:hp(5),backgroundColor:"gray",borderRadius:hp(50)}}></View>
             <View>
                <TouchableOpacity onPress={() =>setIsEq(true)}><Text style={{fontSize:hp(2.5),color:"#356BF8"}}>Evaluation</Text></TouchableOpacity>
             </View>
          </View>

          <View style={{marginLeft:hp(2.5),marginTop:hp(5),marginBottom:hp(5)}}>
          <TouchableOpacity
    
            onPress={()=>{}}
            style={{
                backgroundColor: "#356BF8",
                borderRadius: 15,
                alignItems: 'center',
                width: wp(90),
                paddingVertical: 20,
                
            }}>
            <View style={{flexDirection:"row"}}>
            
            <View style={{marginLeft:hp(10)}}>
            <Text style={{color:"#fff", fontSize: hp(3),fontWeight:"bold" }}>
            Submit
            </Text>
            </View>
            <View style={{marginLeft:hp(15)}}>
                <Icon name='arrow-right' size={35} color="#fff"/>
            </View>

            </View>
        </TouchableOpacity>
        </View>

          </ScrollView>
          <BottomSheet isVisible={isVisible} style={{flex:1,backgroundColor:"#fff",width:wp(100)}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(5)}}>
            <View style={{marginTop:hp(1),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>Ask a Question</Text>
            </View>
            <View style={{width:wp(12),height:hp(6),borderRadius:hp(50),backgroundColor:"#dcdde1",marginRight:hp(1),marginTop:hp(1)}}>
                <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Cancel style={{marginTop:hp(1),marginLeft:hp(1)}} name="cross" size={35} color="red"/>

                </TouchableOpacity>

                
            </View>
            </View>

            <View style={{width:wp(90),margin:hp(2),marginTop:hp(3)}}>
                <Text style={{fontSize:hp(2),fontWeight:"bold",color:"gray"}}>Pathways to Happiness: Coping with Stress and Anxiety</Text>
            </View>

        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(2)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Full Name</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="black" placeholder='Full Name' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>

        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(2)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Email</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="#1C2833" placeholder='Email' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>

        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(2)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Ask a Question </Text>
          <TextInput
      
            style={{ borderRadius: 30, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(7), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="#1C2833" placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>
            
            <View style={{width:wp(90),marginLeft:hp(5),marginTop:hp(3)}}>
            <TouchableOpacity
    
                onPress={()=>{}}
                style={{
                    backgroundColor: "#356BF8",
                    borderRadius: 15,
                    alignItems: 'center',
                    width: wp(80),
                    paddingVertical: 20,
                    
                }}>
                <View style={{flexDirection:"row"}}>
                
                <View style={{marginLeft:hp(10)}}>
                <Text style={{color:"#fff", fontSize: hp(3),fontWeight:"bold" }}>
                Submit
                </Text>
                </View>
                <View style={{marginLeft:hp(15)}}>
                    <Icon name='arrow-right' size={35} color="#fff"/>
                </View>

                </View>
            </TouchableOpacity>
            </View>
      
       
        </BottomSheet>

        <BottomSheet isVisible={isPoll} style={{flex:1,backgroundColor:"#fff",width:wp(100)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(5)}}>
            <View style={{marginTop:hp(1),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>Poll Questions</Text>
            </View>
            <View style={{width:wp(12),height:hp(6),borderRadius:hp(50),backgroundColor:"#dcdde1",marginRight:hp(1),marginTop:hp(1)}}>
                <TouchableOpacity onPress={() => setIsPoll(false)}>
                <Cancel style={{marginTop:hp(1),marginLeft:hp(1)}} name="cross" size={35} color="red"/>

                </TouchableOpacity>

                
            </View>
            </View>

            <View style={{marginTop:hp(5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"gray"}}>How was your experience?</Text>
            </View>
            <View style={{marginTop:hp(2),marginLeft:hp(2),width:wp(95),flexDirection:'row'}}>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>1</Text>
                </View>
               
            </View>
            <View style={{marginLeft:hp(1.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Good</Text>
            </View>
            </View>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>2</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Excellent</Text>
            </View>
            </View>

            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>3</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(3.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Bad</Text>
            </View>
            </View>


            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>4</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Improved</Text>
            </View>
            </View>
             

             <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>5</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(1),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>NoComment</Text>
            </View>
            </View>

           </View>

           <View style={{marginTop:hp(5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"gray"}}>How was your experience?</Text>
            </View>


            <View style={{marginTop:hp(2),marginLeft:hp(2),width:wp(95),flexDirection:'row'}}>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>1</Text>
                </View>
               
            </View>
            <View style={{marginLeft:hp(1.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Good</Text>
            </View>
            </View>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>2</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Excellent</Text>
            </View>
            </View>

            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>3</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(3.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Bad</Text>
            </View>
            </View>


            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>4</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Improved</Text>
            </View>
            </View>
             

             <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>5</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(1),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>NoComment</Text>
            </View>
            </View>

           </View>

           <View style={{width:wp(90),marginLeft:hp(5),marginTop:hp(10)}}>
            <TouchableOpacity
    
                onPress={()=>{}}
                style={{
                    backgroundColor: "#356BF8",
                    borderRadius: 15,
                    alignItems: 'center',
                    width: wp(80),
                    paddingVertical: 20,
                    
                }}>
                <View style={{flexDirection:"row"}}>
                
                <View style={{marginLeft:hp(10)}}>
                <Text style={{color:"#fff", fontSize: hp(3),fontWeight:"bold" }}>
                Submit
                </Text>
                </View>
                <View style={{marginLeft:hp(15)}}>
                    <Icon name='arrow-right' size={35} color="#fff"/>
                </View>

                </View>
            </TouchableOpacity>
            </View>
        </BottomSheet>

        {/* evalution popup */}


        <BottomSheet isVisible={isEq} style={{flex:1,backgroundColor:"#fff",width:wp(100)}}>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:hp(5)}}>
            <View style={{marginTop:hp(1),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>Evalution</Text>
            </View>
            <View style={{width:wp(12),height:hp(6),borderRadius:hp(50),backgroundColor:"#dcdde1",marginRight:hp(1),marginTop:hp(1)}}>
                <TouchableOpacity onPress={() => setIsEq(false)}>
                <Cancel style={{marginTop:hp(1),marginLeft:hp(1)}} name="cross" size={35} color="red"/>

                </TouchableOpacity>

                
            </View>
            </View>

            <View style={{marginTop:hp(5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"gray"}}>How was your experience?</Text>
            </View>
            <View style={{marginTop:hp(2),marginLeft:hp(2),width:wp(95),flexDirection:'row'}}>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>1</Text>
                </View>
               
            </View>
            <View style={{marginLeft:hp(1.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Good</Text>
            </View>
            </View>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>2</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Excellent</Text>
            </View>
            </View>

            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>3</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(3.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Bad</Text>
            </View>
            </View>


            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>4</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Improved</Text>
            </View>
            </View>
             

             <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>5</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(1),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>NoComment</Text>
            </View>
            </View>

           </View>

           <View style={{marginTop:hp(5),marginLeft:hp(2)}}>
                <Text style={{fontSize:hp(3),color:"gray"}}>How was your experience?</Text>
            </View>


            <View style={{marginTop:hp(2),marginLeft:hp(2),width:wp(95),flexDirection:'row'}}>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>1</Text>
                </View>
               
            </View>
            <View style={{marginLeft:hp(1.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Good</Text>
            </View>
            </View>
            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>2</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Excellent</Text>
            </View>
            </View>

            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>3</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(3.5),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Bad</Text>
            </View>
            </View>


            <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>4</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(2),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>Improved</Text>
            </View>
            </View>
             

             <View>
            <View style={{width:wp(15),height:hp(7.5),borderRadius:hp(1),borderColor:"gray",borderWidth:1,marginLeft:hp(2)}}>
                <View style={{marginTop:hp(2),marginLeft:hp(3)}}>
                <Text style={{fontSize:hp(3),color:"#000000"}}>5</Text>
                </View>
            </View>
            <View style={{marginLeft:hp(1),marginTop:hp(1)}}>
                    <Text style={{fontSize:hp(2),color:"#000000",fontWeight:"bold"}}>NoComment</Text>
            </View>
            </View>

           </View>

           <View style={{width:wp(90),marginLeft:hp(5),marginTop:hp(10)}}>
            <TouchableOpacity
    
                onPress={()=>{}}
                style={{
                    backgroundColor: "#356BF8",
                    borderRadius: 15,
                    alignItems: 'center',
                    width: wp(80),
                    paddingVertical: 20,
                    
                }}>
                <View style={{flexDirection:"row"}}>
                
                <View style={{marginLeft:hp(10)}}>
                <Text style={{color:"#fff", fontSize: hp(3),fontWeight:"bold" }}>
                Submit
                </Text>
                </View>
                <View style={{marginLeft:hp(15)}}>
                    <Icon name='arrow-right' size={35} color="#fff"/>
                </View>

                </View>
            </TouchableOpacity>
            </View>
        </BottomSheet>


    </View>
  )
}









const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#F7F9F9",
        fontFamily:'rbold.ttf'
    }
})