import React, {useState, useRef, Fragment} from 'react';
import QRCodeScanner from 'react-native-qrcode-scanner';
import Icon from 'react-native-vector-icons/Fontisto';
import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Scaner from '../../assets/img/scaner.jpg';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';



import {
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Linking,
  View,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import axios from 'axios';
const ScannerScreen = () => {
  const [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: '',
  });

  const {scan, ScanResult, result} = state;

  var ncode = result?.data;

  var [barcode, setBarcode] = useState({
    item: [],
  });

  // console.log(barcode.item)

  const addCode = data => {
    const newCode = barcode.item.concat(data);
    setBarcode({item: newCode});
  };

  console.log(barcode.item);

  const reaadCode = () => {
    return barcode.item?.map((v, index) => {
      console.log(v);
      if (v !== '') {
        return (
          <View style={styles.cardsWrapper} key={index}>
            <View style={styles.card}>
              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>data : {v.data}</Text>

                <Text style={styles.cardDetails}>type of data : {v.type}</Text>
              </View>
            </View>
          </View>
        );
      }
    });
  };

 
  const scanner = useRef(null);

  const data = result;

  const onSuccess = e => {
    const check = e.data.substring(0, 4);

    setState({
      result: e,
      scan: false,
      ScanResult: true,
    });

    if (check === 'http') {
      Linking.openURL(e.data).catch(err =>
        console.error('An error occured', err),
      );
    } else {
      setState({
        result: e,
        scan: false,
        ScanResult: true,
      });
    }
  };

  const activeQR = e => {
    setState({
      scan: true,
    });
  };
  const scanAgain = () => {
    setState({
      scan: true,
      ScanResult: false,
    });
    addCode(state.result);
  };
  return (
    <View style={styles.parant}>
      <Fragment>
        

        {!scan && !ScanResult && (
          <View style={{flex:1}}>
            <TouchableOpacity
              style={{width:wp(80),height:hp(40),}}
              onPress={() => activeQR('active qr')}>
            <Image source={Scaner} style={{width:wp(90),height:hp(70),marginVertical:hp(10),marginHorizontal:hp(2.5)}}/>
             
            </TouchableOpacity>
           
          </View>
        )}

        {ScanResult && (
          <>
            <View>
              <TouchableOpacity onPress={() => {}}>
                <Text style={styles.text}>save now</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={scanAgain}>
                <Text style={styles.text}>
                  <Icon name="shopping-barcode" size={60} color="white" />
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView>{reaadCode()}</ScrollView>
          </>
        )}

        {scan && (
          <QRCodeScanner
            reactivate={true}
            showMarker={true}
            ref={scanner}
            onRead={onSuccess}
            bottomContent={
              <View style={[styles.categoryBtn]}>
               <View style={{marginRight:hp(2)}}>
               <TouchableOpacity onPress={() => scanner.reactivate()}>
                  <View style={{width:wp(20),height:hp(5),borderRadius:hp(15),backgroundColor:'#34495E'}}>
                    <Text style={{color:'#fff',marginHorizontal:hp(3),marginVertical:hp(1)}}>Scan</Text>
                  </View>
                </TouchableOpacity>
               </View>

               <View>
               <TouchableOpacity onPress={() => setState({scan: false})}>
                <View style={{width:wp(20),height:hp(5),borderRadius:hp(30),backgroundColor:'#34495E'}}>
                    <Text style={{color:'#fff',marginHorizontal:hp(3),marginVertical:hp(1)}}>Sotp</Text>
                  </View>
                </TouchableOpacity>
               </View>
              </View>
            }
          />
        )}
      </Fragment>
    </View>
  );
};
export default ScannerScreen;

const styles = StyleSheet.create({
  categoryContainer: {
    flexDirection: 'row',
    width: '90%',
    alignSelf: 'center',
    marginTop: 25,
    marginBottom: 10,
  },
  categoryBtn: {
    flex: 1,
    flexDirection:'row',
    width: '30%',
    marginHorizontal: 0,
    alignSelf: 'center',
    justifyContent:'space-between'
  },
  categoryIcon: {
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fff' /* '#FF6347' */,
    borderRadius: 50,
  },
  categoryBtnTxt: {
    alignSelf: 'center',
    marginTop: 5,
    color: '#de4f35',
  },

  parant: {
    flex: 1,
    height: 750,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    padding: 30,
  },
  cardsWrapper: {
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    flexDirection: 'row',
    shadowColor: '#999',
    marginBottom: 10,
  },

  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});