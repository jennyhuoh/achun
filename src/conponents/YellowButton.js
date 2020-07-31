import React, { useState,useRef } from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,Dimensions } from 'react-native';
import beok from "../json/json.json"
import { Audio } from 'expo-av';
import LottieView from "lottie-react-native";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const YellowButton = ({navigation}) => {
    // console.log(navigation)
    const [count, setCount] = useState(0);

    const PlayAudio = async () => {
      const soundObject = new Audio.Sound();
      try {
          await soundObject.loadAsync(require('../img/btn1.mp3'));
          await soundObject.playAsync();
          // Your sound is playing!
      } catch (error) {
          // An error occurred!
      };
      setCount((count+1));
      animation.current.play();
    };

    const animation = useRef(null);

    if(count<=20)
    return (
        <ScrollView style={styles.container}>
           <Image style={styles.bp} source={{url:beok[0].backgy}}/>
       <View style={styles.ph}>
       <Text style={styles.w}>{count}</Text>
       <LottieView
        ref={animation}
        source={require("../json/bbtn1.json")}
        loop={false}
        style={styles.lo}
      />
      <TouchableOpacity  onPress={()=>{PlayAudio()}} ><View style={styles.btnt}></View></TouchableOpacity>
      </View>
      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Yellowsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
      </View>
    </ScrollView>
    );
    else
    return (
      <ScrollView style={styles.container}>
         <Image style={styles.bp} source={{url:beok[0].backgy}}/>
     <View style={styles.ph}>
     <Text style={styles.w}>{count}</Text>
     <LottieView
        ref={animation}
        source={require("../json/bbtn2.json")}
        loop={false}
        style={styles.lo2}
      />
      <TouchableOpacity  onPress={()=>{PlayAudio()}} ><View style={styles.btnt}></View></TouchableOpacity>
    </View>
    <View style={styles.bottombtn}>
    <TouchableOpacity onPress={() => navigation.navigate("Home")}><Image style={styles.backbtn} source={{url:beok[0].backbtn}}/></TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Yellowsave")}><Image style={styles.okbtn} source={{url:beok[0].okbtn}}/></TouchableOpacity>
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
  ybtn:{
      width:219,
      height:247,
      marginTop:180
  },
  w:{
      color:"#fff",
      fontSize:85,
      fontWeight:"bold",
      opacity:0.5,
      marginTop:screenHeight*0.08
  },
  bp:{
    position:"absolute",
    width:"100%",
    height:screenHeight*0.9,
  },
  bottombtn:{
    flexDirection:"row",
    justifyContent:'space-between',
    marginTop:screenHeight*0.05
  },
  backbtn:{
    width:60,
    height:50,
  },
  okbtn:{
    width:60,
    height:50,
  },
  btnt:{
    width:200,
    height:200,
    borderRadius:999,
    backgroundColor:"#000",
    opacity:0,
    marginTop:screenHeight*0.35
  },
  lo:{
    marginTop:screenHeight*0.15,
    width:300,
    height:300,
    position:"absolute"
  },
  lo2:{
    marginTop:screenHeight*0.1585,
    width:278.5,
    height:278.5,
    position:"absolute"
  },
    // container:{
    //     backgroundColor:"#05495D",
      
    // },
    // ph:{
    //     alignItems: 'center'
    //   },
    // ybtn:{
    //     width:219,
    //     height:247,
    //     marginTop:180
    // },
    // w:{
    //     color:"#fff",
    //     fontSize:100,
    //     fontWeight:"bold",
    //     opacity:0.5,
    //     marginTop:35
    // },
    // bp:{
    //   position:"absolute",
    //   width:"100%",
    //   height:640,
    // },
    // bottombtn:{
    //   flexDirection:"row",
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   marginTop:30
    // },
    // backbtn:{
    //   width:60,
    //   height:50,
     
    // },
    // okbtn:{
    //   width:60,
    //   height:50,
    //   marginLeft:250
    // },
    // btnt:{
    //   width:200,
    //   height:200,
    //   borderRadius:999,
    //   backgroundColor:"#000",
    //   opacity:0,
    //   marginTop:220
    // },
    // lo:{
    //   marginTop:100,
    //   width:300,
    //   height:300,
    //   position:"absolute"
    // },
    // lo2:{
    //   marginTop:107,
    //   width:278,
    //   height:278,
    //   position:"absolute"
    // },
  });

export default YellowButton;