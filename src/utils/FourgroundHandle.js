import messaging from '@react-native-firebase/messaging';
import { useEffect } from 'react';
import PushNotification from "react-native-push-notification";

export default Fourground = () => {
    useEffect(() => {
        const unSubScribe = messaging().onMessage(async remoteMessage => {
            console.log(
                'Notification caused app to open from forground state:',
                remoteMessage.notification,
            );
            const { messageId, notification } = remoteMessage
            PushNotification.localNotification({
                channelId: 'channel-id',
                messageId: messageId,
                title: notification.title,
                body: notification.body,
                soundName: 'default',
                vibrate: true,
                playSound: true,
                channelId: notification.channelId,
                visibility: "public",

            })
        });
        return unSubScribe
    }, [])

    return null
}