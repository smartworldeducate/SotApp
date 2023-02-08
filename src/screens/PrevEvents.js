import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
import CardBtn from '../component/combocomponent/CardBtn';
import CardLocation from '../component/combocomponent/CardLocation';
import ImageIcon from '../component/combocomponent/ImageIcon';
import Left from 'react-native-vector-icons/AntDesign';
import Dot from 'react-native-vector-icons/AntDesign';
const   PrevEvents = ({navigation}) => {
    const data=[1,3,4,5,6]
  const theme = useTheme();
  return (
    <View style={styles.container}>
      <View style={{flexDirection:'row',justifyContent:'space-between',width:wp(100),height:hp(8)}}>
           <TouchableOpacity onPress={()=>navigation.goBack(null)}>
           <View style={{flexDirection:'row',marginTop:hp(2)}}>
           <Left style={{marginTop:hp(1),marginLeft:hp(1)}} name='arrowleft' size={25} color="#5669FF"/>
             <Text style={{fontSize:hp(3),marginLeft:hp(2),marginTop:hp(1),color:"black"}}>Previous Events</Text>
           </View>
           </TouchableOpacity>
           <View style={{borderRadius:hp(1),marginRight:hp(0.5),marginTop:hp(2.5),width:wp(12),height:hp(6),backgroundColor:"#EBEEF2"}}>
           <Dot style={{marginTop:hp(1),marginLeft:hp(2)}} name='filter' size={25} color="#5669FF"/>

           </View>

        </View>
    <ScrollView>
      <StatusBar barStyle={theme.dark ? 'light-content' : 'dark-content'} />
     

   
     
      <View style={styles.cardsWrapper}>
        {data.map((item,index)=>{
            return(
                <View style={styles.card} key={index}>
                <View style={styles.cardImgWrapper}>
                  <Image
                    source={{
                      uri: 'https://www.sotevents.com/wp-content/uploads/2022/10/bannerFl-1536x745.jpg',
                    }}
                    resizeMode="cover"
                    style={styles.cardImg}
                  />
                </View>
               
              </View>
            )
        })}
        
      </View>
    </ScrollView>
    </View>
  );
};

export default PrevEvents;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7F9F9'
  },
  cardsWrapper: {
    marginTop: 20,
    width: '95%',
    alignSelf: 'center',
    
  },
  card: {
    height: 185,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
   
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
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
    color:"black"
  },
  cardDetails: {
    fontSize: 15,
    color: '#444',
  },
});