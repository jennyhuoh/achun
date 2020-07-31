import React, { useState,useContext,useEffect}from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,TextInput,Input,AsyncStorage,Dimensions} from 'react-native';
import beok from "../json/json.json"
import { StoreContext } from "../stores/Store.js";
import { Notifications } from "expo";
import * as Permissions from "expo-permissions";
import Constants from "expo-constants";
import axios from "axios";
import * as firebase from "firebase";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const EXPO_PUSH_ENDPOINT = "https://exp.host/--/api/v2/push/send";
const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";
const CHART_PERSISTENCE_KEY = "CHART_PERSISTENCE_KEY";
const HAS_SET_KEY2 = "HAS_SET_KEY2";

const firebaseConfig = {
  apiKey: "AIzaSyBqVBjsd0lYup9QBOtpwQRxelsakbHKV-Q",
  authDomain: "logintest-f843a.firebaseapp.com",
  databaseURL: "https://logintest-f843a.firebaseio.com",
  projectId: "logintest-f843a",
  storageBucket: "logintest-f843a.appspot.com",
  messagingSenderId: "244239715678",
  appId: "1:244239715678:web:daa106ad69ef257291d3cf",
  measurementId: "G-NWHE0DB6KT"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Yellowsave = ({navigation}) => {
    // console.log(navigation)
    const { meState } = useContext(StoreContext);
    const [me, setMe] = meState;
    const [input, setInput] = useState('');
    const { chartState } = useContext(StoreContext);
    const [chart, setChart] = chartState;
    const [cin,setCin] = useState("https://i.imgur.com/W6XOYnX.png");

    const [expoPushToken, setExpoPushToken] = useState("");
    const [sendMsg, setSendMsg] = useState("");
    const [receivedMsg, setReceivedMsg] = useState("");

    const registerForPushNotificationsAsync = async () => {
        if (Constants.isDevice) {
          const { status: existingStatus } = await Permissions.getAsync(
            Permissions.NOTIFICATIONS
          );
          let finalStatus = existingStatus;
          if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(
              Permissions.NOTIFICATIONS
            );
            finalStatus = status;
          }
          if (finalStatus !== "granted") {
            // alert('Failed to get push token for push notification!');
            return;
          }
          const token = await Notifications.getExpoPushTokenAsync();
          setExpoPushToken(token);
        } else {
          // alert('Must use physical device for Push Notifications');
        }
    
        if (Platform.OS === "android") {
          Notifications.createChannelAndroidAsync("default", {
            name: "default",
            sound: true,
            priority: "max",
            vibrate: [0, 250, 250, 250],
          });
        }
      };

      const _handleNotification = (_notification) => {
        const {
          data: { text },
          orign,
        } = _notification;
        Vibration.vibrate();
        console.log(_notification);
        setReceivedMsg(text);
      };
    
      const sendPushNotification = async () => {
        let message = {  //for EXPO PUSH SERVER
          to: expoPushToken,
          sound: "default",
          title: "你有新訊息",
          body: "xxx好像需要您的關心!",
          data: { text: sendMsg },
          _displayInForeground: true,
        };
       
        try {
          await axios.post(EXPO_PUSH_ENDPOINT, message);
          // await axios.post(NTUE_PUSH_ENDPOINT, message);
        } catch (e) {
          console.log(e);
        }
      };
    
      const onHandlePushNotification = () => {
        registerForPushNotificationsAsync();
        Notifications.addListener(_handleNotification);  
      };
     
      useEffect(() => onHandlePushNotification(), []);

    const saveToAsyncStorage = () => {
        try {
            AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(me));
            AsyncStorage.setItem(HAS_SET_KEY, JSON.stringify(true));
            
        } catch (error) {
            // Error saving data
        }
    };

    useEffect(() => {
        saveToAsyncStorage();
    }, [me]);

    const saveToAsyncStorage2 = () => {
      try {
          AsyncStorage.setItem(CHART_PERSISTENCE_KEY, JSON.stringify(chart));
          AsyncStorage.setItem(HAS_SET_KEY2, JSON.stringify(true));
        
      } catch (error) {
          // Error saving data
      }
  };

  useEffect(() => {
      saveToAsyncStorage2();
  }, [chart]);

  const updatefile = () =>{
    let newReference = firebase.database()
     .ref('/users/'+firebase.auth().currentUser.uid+'/mood/sad')
     .push();
     newReference
     .update({
       content:input
       
   })
   }
    
    return (
    <ScrollView style={styles.container}>
         <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.date}>
                 <Text style={styles.wd}>DATE</Text>
                 <Text style={styles.wday}>2 0 2 0 . 0 8 . 1 1 </Text>
             </View>
         </View>
         <View style={styles.h2}>
         <View style={styles.line2}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         <View style={styles.t1}>
         <TextInput
                style={{fontSize:18,marginLeft:30,width:265,marginTop:30}}
                placeholder="點擊以輸入文字"
                placeholderTextColor="#fff"
                color="#fff"
                multiline={true}
                onChangeText={(input) => setInput(input)}
        />
         </View>
         <TouchableOpacity  onPress={() => {
                        navigation.navigate("Daily");
                        setMe({...me, why2:[...me.why2, input]});
                        setInput('');
                        sendPushNotification();
                        setChart({...chart,a:[...chart.a,cin]});
                        updatefile();
                    }}
                    >
                        <Image style={styles.sbtn} source={{url:beok[1].ysave}}/>
                        </TouchableOpacity>
         </View>
         
    </ScrollView>
    );

  };
  
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#05495D",
  },
  h1: {
      flexDirection: "row",
      marginLeft: 20,
      marginTop: screenHeight*0.1
  },
  h2: {
    flexDirection: "row",
    marginLeft: 20,
    marginTop: screenHeight*0.08
  },
  line: {
      width: 2,
      height: 80,
      backgroundColor: "#fff"
  },
  date: {
      marginLeft: 10,
  },
  wd: {
      color: "#fff",
      fontWeight: "bold",
      fontSize:15
  },
  wday: {
      color: "#fff",
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 30
  },
  line2: {
      width: 2,
      height: 40,
      backgroundColor: "#fff"
  },
  why: {
      marginLeft: 10,
  },
  h3: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: screenHeight*0.05
  },
  t1: {
      width: screenWidth*0.853,
      height: 340,
      backgroundColor: "#4E7E8C",
      borderRadius: 30,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.2,
  },
  sbtn: {
      width: 137,
      height: 45,
      marginTop:screenHeight*0.05
  }
    // container:{
    //     backgroundColor:"#05495D",
    // },
    // h1:{
    //     flexDirection:"row",
    //     marginLeft:20,
    //     marginTop:50
    // },
    // line:{
    //     width:2,
    //     height:80,
    //     backgroundColor:"#fff"
    // },
    // date:{
    //     marginLeft:10,
    //     marginTop:5
    // },
    // wd:{
    //     color:"#fff",
    //     fontWeight:"bold"
    // },
    // wday:{
    //     color:"#fff",
    //     fontSize:20,
    //     fontWeight:"bold",
    //     marginTop:30
    // },
    // line2:{
    //     width:2,
    //     height:40,
    //     backgroundColor:"#fff"
    // },
    // why:{
    //     marginLeft:10,
    //     marginTop:5
    // },
    // h3:{
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     marginTop:10
    // },
    // t1:{
    //     width:320,
    //     height:340,
    //     backgroundColor:"#4E7E8C",
    //     borderRadius:30,
    //     shadowColor:"#000",
    //     shadowOffset:{width:0,height:3},
    //     shadowOpacity:0.2,
    // },
    // sbtn:{
    //     width:137,
    //     height:45,
    //     marginTop:28
    //   },
      
  });

export default Yellowsave;