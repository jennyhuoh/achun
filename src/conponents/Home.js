import React,{ useEffect } from 'react';
import { StyleSheet, Text, View,Image, ScrollView,TouchableOpacity,Dimensions} from 'react-native';
import beok from "../json/json.json"
import { Audio } from 'expo-av';

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Home = ({navigation}) => {
  // useEffect(() => {
  //           PlayAudio();
  //       }, []);
    
  //       const PlayAudio = async () => {
  //           const soundObject = new Audio.Sound();
  //           try {
  //               await soundObject.loadAsync(require('../img/bgm.mp3'));
  //               await soundObject.playAsync();
  //               // Your sound is playing!
  //           } catch (error) {
  //               // An error occurred!
  //           }
  //       };
  const PlayAngry = async () => {
    const soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require('../img/btn2.mp3'));
        await soundObject.playAsync();
        // Your sound is playing!
    } catch (error) {
        // An error occurred!
    };
    navigation.navigate("RedButton")
  };
  const PlaySad = async () => {
    const soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require('../img/btn2.mp3'));
        await soundObject.playAsync();
        // Your sound is playing!
    } catch (error) {
        // An error occurred!
    };
    navigation.navigate("YellowButton")
  };
  const PlayHappy = async () => {
    const soundObject = new Audio.Sound();
    try {
        await soundObject.loadAsync(require('../img/btn2.mp3'));
        await soundObject.playAsync();
        // Your sound is playing!
    } catch (error) {
        // An error occurred!
    };
    navigation.navigate("Happysave")
  };
  // console.log(navigation)
  return (
    <ScrollView style={styles.container}>
      
        <View style={styles.ph}>
      <Image style={styles.iam} source={{url:beok[0].iam}}/>
      <Image style={styles.back} source={{url:beok[0].back}}/>
      <TouchableOpacity onPress={()=>{PlayAngry()}}><Image style={styles.angry} source={{url:beok[0].angry}}/></TouchableOpacity>
      <TouchableOpacity onPress={() =>{PlaySad()}}><Image style={styles.sad} source={{url:beok[0].sad}}/></TouchableOpacity>
      <TouchableOpacity onPress={() =>{PlayHappy()}}><Image style={styles.happy} source={{url:beok[0].happy}}/></TouchableOpacity>
      </View>
    </ScrollView>
  
  );
};


const styles = StyleSheet.create({
  container:{
    backgroundColor:"#05495D",
  
},
ph:{
  alignItems: 'center'
},
iam:{
    width:screenWidth*0.2,//70
    height:screenHeight*0.04,//40
    marginTop:70
},
back:{
  position:"absolute",
  width:"100%",
  height:screenHeight*0.51,//410
  marginTop:screenHeight*0.25//150
},
angry:{
    width:screenWidth*0.26,//90
    height:screenHeight*0.147,//109.59
    marginTop:screenHeight*0.13,//70
    marginLeft:40
},
sad:{
  width:screenWidth*0.26,//90
  height:screenHeight*0.148,//111.14
  marginTop:screenHeight*0.03,//25
  marginRight:45
},
happy:{
  width:screenWidth*0.26,//90
  height:screenHeight*0.147,//110.51
  marginTop:screenHeight*0.06,//50
  marginLeft:25
},
  // container:{
  //     backgroundColor:"#05495D",
    
  // },
  // ph:{
  //   alignItems: 'center'
  // },
  // iam:{
  //     width:screenWidth*0.2,//70
  //     height:screenHeight*0.06,//40
  //     marginTop:50
  // },
  // line:{
  //   width:screenWidth*0.12,//45
  //   height:2,
  //   backgroundColor:"#fff"
  // },
  // back:{
  //   position:"absolute",
  //   width:"100%",
  //   height:screenHeight*0.615,//410
  //   marginTop:screenHeight*0.225//150
  // },
  // angry:{
  //     width:screenWidth*0.24,//90
  //     height:screenHeight*0.164385,//109.59
  //     marginTop:screenHeight*0.105,//70
  //     marginLeft:40
  // },
  // sad:{
  //   width:screenWidth*0.24,//90
  //   height:screenHeight*0.16671,//111.14
  //   marginTop:screenHeight*0.038,//25
  //   marginRight:45
  // },
  // happy:{
  //   width:screenWidth*0.24,//90
  //   height:screenHeight*0.165765,//110.51
  //   marginTop:screenHeight*0.076,//50
  //   marginLeft:25
  // },
});

export default Home;