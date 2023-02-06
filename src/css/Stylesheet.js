import {StyleSheet} from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export const styles = StyleSheet.create({
    // ...
    appButtonContainer: {
      
      elevation: 8,
      backgroundColor:"#E74133",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal: 80,
      alignItems:'center'
     
    },
    fbButtonContainer: {
      
      elevation: 8,
      backgroundColor: "#1977F3",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal:80,
      alignItems:'center'
    },
    slideButtonContainer: {
      
      elevation: 8,
      backgroundColor: "#D0D0D0",
      borderRadius: 10,
      paddingVertical: 15,
      paddingHorizontal:180,
      alignContent:'center',
      alignItems:'center'
    },
    appButtonText: {
      fontSize:13,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    textInput:{
      width: wp(90),
      height: 40,
      borderTopRightRadius:hp(1.5),
      borderTopLeftRadius:hp(1.5),
      backgroundColor: '#fff',
      paddingVertical: 10,
      borderColor: 'blue',
      borderWidth: 1,
      borderRadius: 15, 
      fontSize: 16,
    },
    //signupscree
    


  })