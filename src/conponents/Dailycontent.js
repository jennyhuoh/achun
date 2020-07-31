import React, { useState,useContext }from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, ScrollView,Linking,TouchableOpacity,TextInput, Button,Dimensions } from 'react-native';
import beok from "../json/json.json";
import {StoreContext} from "../stores/Store";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Dailycontent = ({navigation}) => {
    // console.log(navigation)
    const [count, setCount] = useState(0);
    const {meState} = useContext(StoreContext);
    const [me, setMe] = meState;
    let day = "2020.08.11";
    // console.log(me);
    if(count==0)
    return (
        <ScrollView style={styles.container}>
          <View style={styles.backx}>
          <TouchableOpacity onPress={() => navigation.navigate("Daily")}><Image style={styles.backxph} source={{url:beok[0].backx}}/></TouchableOpacity>
          </View>
           <View style={styles.h1}>
             <View style={styles.line}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>MOOD</Text>
             </View>
             <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry1}}/></TouchableOpacity>
             <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad2}}/></TouchableOpacity>
             <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy2}}/></TouchableOpacity>
         </View>
         <View style={styles.h1_1}>
         <View style={styles.line2}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
                 <Text style={styles.wm2}>{day}</Text>
             </View>
         </View>
         <View style={styles.h2}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>

         <View style={styles.h3}> 
           {me.why1.map(w1 => (
         <View style={styles.t1}>
            <Text style={styles.whyw}>{w1}</Text>
            {/* <Button onPress={() => setMe({...me, why1:[]})} title="delete" /> */}
         </View>
           ))}
         </View>
      </ScrollView>
    );
    else if(count==1) return(
      <ScrollView style={styles.container}>
        <View style={styles.backx}>
          <TouchableOpacity onPress={() => navigation.navigate("Daily")}><Image style={styles.backxph} source={{url:beok[0].backx}}/></TouchableOpacity>
          </View>
      <View style={styles.h1}>
        <View style={styles.line}></View>
        <View style={styles.mood}>
            <Text style={styles.wm}>MOOD</Text>
        </View>
        <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry2}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad1}}/></TouchableOpacity>
        <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy2}}/></TouchableOpacity>
    </View>
    <View style={styles.h1_1}>
             <View style={styles.line2}></View>
             <View style={styles.mood}>
                 <Text style={styles.wm}>DATE</Text>
                 <Text style={styles.wm2}>{day}</Text>
             </View>
         </View>
         <View style={styles.h2}>
         <View style={styles.line}></View>
             <View style={styles.why}>
                 <Text style={styles.wd}>WHY</Text>
         </View>
         </View>
         <View style={styles.h3}> 
         {me.why2.map(w2 => (
         <View style={styles.t1} >
            <Text style={styles.whyw}>{w2}</Text>
            {/* <Button onPress={() => setMe({...me, why2:[]})} title="delete" /> */}
         </View>
           ))}
         </View>
  
 </ScrollView>
    );
  
 else  return(
    <ScrollView style={styles.container}>
      <View style={styles.backx}>
          <TouchableOpacity onPress={() => navigation.navigate("Daily")}><Image style={styles.backxph} source={{url:beok[0].backx}}/></TouchableOpacity>
          </View>
    <View style={styles.h1}>
      <View style={styles.line}></View>
      <View style={styles.mood}>
          <Text style={styles.wm}>MOOD</Text>
      </View>
      <TouchableOpacity onPress={()=>setCount(0)}><Image style={styles.angry} source={{url:beok[1].sangry2}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(1)}><Image style={styles.sad} source={{url:beok[1].ssad2}}/></TouchableOpacity>
      <TouchableOpacity onPress={()=>setCount(2)}><Image style={styles.happy} source={{url:beok[1].shappy1}}/></TouchableOpacity>
  </View>
  <View style={styles.h1_1}>
           <View style={styles.line2}></View>
           <View style={styles.mood}>
               <Text style={styles.wm}>DATE</Text>
               <Text style={styles.wm2}>{day}</Text>
           </View>
       </View>
       <View style={styles.h2}>
       <View style={styles.line}></View>
           <View style={styles.why}>
               <Text style={styles.wd}>WHY</Text>
       </View>
       </View>
       <View style={styles.h3}> 
       {me.why3.map(w3 => (
         <View style={styles.t1} >
            <Text style={styles.whyw}>{w3}</Text>
            {/* <Button onPress={() => setMe({...me, why3:[]})} title="delete" /> */}
         </View>
           ))}
       </View>

</ScrollView>
  );
  
};
  
  const styles = StyleSheet.create({
    container:{
      backgroundColor:"#05495D",
      
  },
  backx:{
    alignItems: "flex-end",
    marginTop:screenHeight*0.1
  },
  backxph:{
    width:60,
    height:50,
  },
  h1:{
    flexDirection:"row",
    marginLeft:20,
    marginTop:screenHeight*0.03
},
h1_1:{
  flexDirection:"row",
  marginLeft:20,
  marginTop:screenHeight*0.05
},
h2:{
  flexDirection:"row",
  marginLeft:20,
  marginTop:screenHeight*0.06
},
line:{
    width:2,
    height:30,
    backgroundColor:"#fff"
},
line2:{
  width:2,
  height:60,
  backgroundColor:"#fff"
},
mood:{
    marginLeft:10,
},
wm:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:15
},
wm2:{
  color:"#fff",
  fontWeight:"bold",
  marginTop:10,
  fontSize:20,
  letterSpacing:2,
},
angry:{
  width:70,
  height:70,
 marginLeft:10
},
sad:{
width:70,
height:70,
marginLeft:10
},
happy:{
width:70,
height:70,
marginLeft:10
},
wd:{
color:"#fff",
fontWeight:"bold",
fontSize:15
},
why:{
marginLeft:10
},
h3:{
alignItems: 'center',
justifyContent: 'center',
marginTop:10,
flexDirection:"column-reverse",
},
t1:{
width:screenWidth*0.853,
height:250,
backgroundColor:"#4E7E8C",
borderRadius:30,
marginTop:20,

},
whyw:{
color:"#fff",
fontSize:18,
marginLeft:30,
width:265,
marginTop:30
},
mood3_7:{
      position:"absolute",
      width:30,
      height:36.53,
      marginTop:90,
      right:30
  },
//     container:{
//         backgroundColor:"#05495D",
        
//     },
//     backx:{
//       alignItems: "flex-end",
//       marginTop:40
//     },
//     backxph:{
//       width:60,
//       height:50,
//     },
//     h1:{
//       flexDirection:"row",
//       marginLeft:20,
//       marginTop:30
//   },
//   h1_1:{
//     flexDirection:"row",
//     marginLeft:20,
//     marginTop:10
//   },
//   h2:{
//     flexDirection:"row",
//     marginLeft:20,
//     marginTop:30
// },
//   line:{
//       width:2,
//       height:30,
//       backgroundColor:"#fff"
//   },
//   line2:{
//     width:2,
//     height:60,
//     backgroundColor:"#fff"
// },
//   mood:{
//       marginLeft:10,
//       marginTop:5
//   },
//   wm:{
//       color:"#fff",
//       fontWeight:"bold"
//   },
//   wm2:{
//     color:"#fff",
//     fontWeight:"bold",
//     marginTop:10,
//     fontSize:20,
//     letterSpacing:2,
// },
//   angry:{
//     width:70,
//     height:70,
//    marginLeft:10
// },
// sad:{
//   width:70,
//   height:70,
//   marginLeft:10
// },
// happy:{
//   width:70,
//   height:70,
//   marginLeft:10
// },
// wd:{
//   color:"#fff",
//   fontWeight:"bold"
// },
// why:{
//   marginLeft:10,
//   marginTop:5
// },
// h3:{
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop:10,
//   flexDirection:"column-reverse",
// },
// t1:{
//   width:320,
//   height:250,
//   backgroundColor:"#4E7E8C",
//   borderRadius:30,
//   marginTop:20,
  
// },
// whyw:{
//   color:"#fff",
//   fontSize:20,
//   marginLeft:30,
//   width:265,
//   marginTop:30
// },
  });

export default Dailycontent;