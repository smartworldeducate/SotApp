import { StyleSheet, Text, View ,TouchableOpacity,TextInput, ScrollView} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Image1 from '../../assets/img/dr1.png';
import Icon from 'react-native-vector-icons/AntDesign';
import Down from 'react-native-vector-icons/AntDesign';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/Entypo';
import { Image } from 'react-native';
import { useState } from 'react';
import Right from 'react-native-vector-icons/EvilIcons';

import {Dropdown} from 'react-native-element-dropdown';
import { CheckBox } from '@rneui/themed';
export default function RegisterScreen() {
  const [checked, setChecked]=useState(false)
  const [gender,setGender]=useState()
  const [age,setAge]=useState()
  const [isFocus, setIsFocus] = useState(false);
  const [countryData, setCountryData] = useState(null);
  console.log(countryData)
  const [country,setCountry]=useState([
    { label: 'pakistan', value: '1' },
    { label: 'india', value: '2' },
    { label: 'uk', value: '3' },
    { label: 'us', value: '4' },
    { label: 'ingland', value: '5' },
    { label: 'japan', value: '6' },
    { label: 'uae', value: '7' },
    { label: 'dubai', value: '8' },
  ])
 
  const [association,setAssociation]=useState()
  const [question,setQuestion]=useState()
  const toggleCheckbox = () => setChecked(!checked);
  return (
    <View styles={styles.container}>
      <ScrollView>
       <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.navigate('Home')}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"black"}}>Register</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='dots-three-vertical' size={25} color="#5669FF"/>

           </View>

        </View>
        
        <View style={{flexShrink:1,width:wp(95),height:hp(10),margin:hp(4)}}>
            <Text style={{fontSize:hp(2.5),marginRight:hp(1),color:"#B7B7B7"}}>To continue, we’ll need some more information for your account </Text>
            <Text style={{fontSize:hp(3),color:"black"}}>zeeshan.hafeez@bh.edu.pk</Text>
        </View>
        <View style={{position:'relative',alignContent:'center',justifyContent:'center',alignItems:'center',width:wp(100)}}>
          <View style={{width:wp(10),height:hp(5),borderRadius:hp(50),position:'absolute',zIndex:1,backgroundColor:"#5669FF",top:hp(8),left:hp(28)}}>
           
          <Icon style={{marginTop:hp(1),marginLeft:hp(1)}} name='camerao' size={25} color="#fff"/>

          </View>  
        <Image style={{height:hp(12),width:hp(12),borderRadius:hp(50),marginTop:hp(1),marginLeft:hp(0.5)}} source={Image1}  />
        

        </View>

       
        
        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(4)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>First Name</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="black" placeholder='First Name' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>

        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(1)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Last Name</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="black" placeholder='Last Name' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>
        
        <View style={{width:wp(95),marginTop:hp(1),marginLeft:hp(1)}}>
        <Text style={{marginLeft:hp(3),fontSize:hp(2.5),marginBottom:hp(1),fontWeight:"bold"}}>Gender</Text>

        <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                   data={country}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select gender' : '...'}
                  searchPlaceholder="Search..."
                  value={countryData}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item,i)=>{
                    setCountryData(item.label);
                    setIsFocus(false);
              }}
        />
        </View>
       
        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(2)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Email Address</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="black" placeholder='Email' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>

        <View style={{marginLeft:hp(1),width:wp(95),marginTop:hp(2)}}>
          <Text style={{marginLeft:hp(2),fontSize:hp(2.5),fontWeight:"bold"}}>Phone</Text>
          <TextInput
      
            style={{ borderRadius: 100, color: 'gray', paddingHorizontal: 10,paddingVertical:hp(2), width:wp(95), marginVertical: 10,borderColor:"gray",borderWidth:1}}
            placeholderTextColor="black" placeholder='Phone' placeholderStyle={styles.placeholderStyle}></TextInput>
        </View>

        <View style={{width:wp(95),marginTop:hp(1),marginLeft:hp(1)}}>
        <Text style={{marginLeft:hp(3),fontSize:hp(2.5),marginBottom:hp(1),fontWeight:"bold"}}>Age Group</Text>

        <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={country}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select age' : '...'}
                  searchPlaceholder="Search..."
                  value={countryData}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item,i)=>{
                    setCountryData(item.label);
                    setIsFocus(false);
              }}
        />
        </View>

        <View style={{width:wp(95),marginTop:hp(1),marginLeft:hp(1)}}>
        <Text style={{marginLeft:hp(3),fontSize:hp(2.5),marginBottom:hp(1),fontWeight:"bold"}}>Country</Text>

        <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={country}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select country' : '...'}
                  searchPlaceholder="Search..."
                  value={countryData}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item,i)=>{
                    setCountryData(item.label);
                    setIsFocus(false);
              }}
        />
        </View>

        <View style={{width:wp(95),marginTop:hp(1),marginLeft:hp(1)}}>
        <Text style={{marginLeft:hp(3),fontSize:hp(2.5),marginBottom:hp(1),fontWeight:"bold"}}>Association with Beaconhouse</Text>

        <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={association}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Please Select ' : '...'}
                  searchPlaceholder="Search..."
                  value={countryData}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item,i)=>{
                    setAssociation(item.label);
                    setIsFocus(false);
              }}
        />
        </View>

        <View style={{width:wp(95),marginTop:hp(1),marginLeft:hp(1)}}>
        <Text style={{marginLeft:hp(3),fontSize:hp(2.5),marginBottom:hp(1),fontWeight:"bold"}}>How did you hear about this event?</Text>

        <Dropdown
                  style={[styles.dropdown, isFocus && {borderColor: 'blue'}]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={country}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Please Select' : '...'}
                  searchPlaceholder="Search..."
                  value={question}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={(item)=>{
                    setQuestion(item.label);
                    setIsFocus(false);
              }}
        />
        </View>

       <View style={{flexDirection:"row"}}>
        <View style={{marginLeft:hp(1)}}>
        <CheckBox
        size={32}
        style={{backgroundColor:"gray"}}
           checked={checked}
           onPress={toggleCheckbox}
          
         />
        </View>
        <View style={{marginTop:hp(2)}}>
          <Text style={{fontSize:hp(2),fontWeight:"bold"}}>Subscribe for future updates</Text>
        </View>
       </View>
        
        
      <View style={{marginLeft:hp(4),marginTop:hp(3),marginBottom:hp(5)}}>
      <TouchableOpacity
    
    onPress={()=>{}}
      style={{
        backgroundColor: "#356BF8",
        borderRadius: 15,
        alignItems: 'center',
        width: 350,
        paddingVertical: 20,
        
      }}>
       <View style={{flexDirection:"row"}}>
      
      <View>
      <Text style={{color:"#fff", fontSize: 20, }}>
        continue
      </Text>
      </View>
      <View style={{marginLeft:hp(20)}}>
        <Right name='arrow-right' size={35} color="#fff" backgroundColor="blue"/>
      </View>

      </View>
    </TouchableOpacity>
      </View>
      </ScrollView>

        
        
       
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F7F9F9',
      flex: 1,
   
      
    },
    
  
    imageContainer:{
      
      flex:wp(0.1),
      marginTop:hp(7)
    },
   
    buttonContainer:{
      marginTop:hp(15),
      marginLeft:hp(1),
    marginVertical:hp(3)
    },
    linecontainer: {
      marginVertical:hp(3),
      
      width:wp(90),
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    slidebtn:{
      
    },






    dropdown: {
      height:hp(8),
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 50,
      paddingHorizontal: 8,
      marginBottom: 10,
    },
    icon: {
      marginRight: 5,
    },
    label: {
      position: 'absolute',
      backgroundColor: 'white',
      left: 22,
      top: 8,
      zIndex: 999,
      paddingHorizontal: 8,
      fontSize: 14,
    },
    placeholderStyle: {
      fontSize: 16,
      color:"gray"
    },
    selectedTextStyle: {
      fontSize: 16,
     
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
    inputSearchStyle: {
      height: 40,
      fontSize: 16,
    },
    
   
  
  });
  
