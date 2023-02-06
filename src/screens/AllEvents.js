import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
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
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/AntDesign';
const AllEvents = () => {
  const navigation = useNavigation();
  const data=[1,3,4,5,6]
  const theme = useTheme();
  return (
    <View style={styles.container}>
       <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.goBack()}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"#1C2833",fontFamily:'Roboto-Bold'}}>All Events</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='filter' size={25} color="#5669FF"/>

           </View>

        </View>
    <ScrollView style={styles.container}>
      
     

   
     
      <View style={styles.cardsWrapper}>
        {data.map((item,index)=>{
          return(
            <TouchableOpacity onPress={()=>navigation.navigate('PrvEvents')} key={index}>
              <View style={styles.card} >
            <View style={{position:"absolute",top:hp(1),left:hp(8),zIndex:1}}>
              <DateView/>
            </View>
          <View style={styles.cardImgWrapper}>
            <Image
              source={{
                uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
              }}
              resizeMode="contain"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>A World of Tomorrow</Text>

            <Text style={styles.cardDetails}>
             10:00 - 11:00
            </Text>
            <CardBtn/>
            <ImageIcon/>
            <View style={{flexDirection:'row',justifyContent:"space-between"}}>
                <View>
                <CardLocation/>
                </View>
               
            </View>
          </View>
        </View>
            </TouchableOpacity>
          )
        })}
       
      </View>
    </ScrollView>
    </View>
  );
};

export default AllEvents;

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
  },



  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '95%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
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
    height: 190,
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
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
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
    color:"#1C2833"
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
});