import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    getFCMToken()
  }
}

const getFCMToken = async () => {
    let fcmToken=await AsyncStorage.getItem('fcmToken')
    console.log("old fcm token : ",fcmToken)
    if(!fcmToken){
        try {
            const token = await messaging().getToken();
            console.log(token);
            console.log("new gerated fcm token:",token)
             await AsyncStorage.setItem('fcmToken',token)
          } catch (error) {
            console.log(error);
          }
    }
   
  };

  export const notificationService=()=>{
    messaging().onNotificationOpenedApp(remoteMessage => {
        console.log(
          'Notification caused app to open from background state:',
          remoteMessage
        );
      });
// forground message handleing
messaging().onMessage(async remoteMessage => {
    console.log(
        'Notification caused app to open from forground state:',
        remoteMessage.notification,
      );
  });

// Check whether an initial notification is available
    messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      }
    });
  }