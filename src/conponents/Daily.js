import React, { useState,useContext }from 'react';
import { StyleSheet, Text, View,Image,ScrollView,TouchableOpacity,TextInput,Input,Button,Dimensions} from 'react-native';
import beok from "../json/json.json"
import Swiper from 'react-native-swiper'
import {StoreContext} from "../stores/Store";

let screenWidth = Dimensions.get('window').width;
let screenHeight = Dimensions.get('window').height;

const Daily = ({navigation}) => {

    let hh={url:beok[0].happy};
    let aa={url:beok[0].angry};
    let ss={url:beok[0].sad};
    
    const { chartState } = useContext(StoreContext);
    const [chart, setChart] = chartState;

    //  console.log(chart);
    
    return (
    <ScrollView style={styles.container}>
             <View style={styles.date}>
                 <Text style={styles.wday}>2020</Text>
             </View>
             <Swiper style={styles.wrapper}  dotStyle={styles.dotStyle} 
             activeDotStyle={styles.activeDotStyle} horizontal={true} loop={false} index={1}>
             <View style={styles.day}>
                 <Text style={styles.dayw}>7</Text>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood1_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood2_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood3_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood4_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood5_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood6_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood7_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood8_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood9_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood10_6} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood11_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood12_6} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity><Image style={styles.mood13_6} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form2}}/>
             </View>
            </View>
            <View style={styles.day}>
                 <Text style={styles.dayw}>8</Text>
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood1_7} source={hh}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood2_7} source={hh}/></TouchableOpacity>
             </View>
             {/* <Button onPress={() => setChart({...chart, a:[]})} title="delete" /> */}
             {chart.a.map(c1 => ( <View style={styles.moodbtn} key={c1}>
             <TouchableOpacity onPress={() =>navigation.navigate("Content")}><Image style={styles.mood3_7} source={{url:c1}}/></TouchableOpacity>
             </View>))}
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood4_7} source={aa}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood5_7} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.moodbtn}>
             <TouchableOpacity ><Image style={styles.mood6_7} source={ss}/></TouchableOpacity>
             </View>
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form3}}/>
             </View>
            </View>
            <View style={styles.day}>
                 <Text style={styles.dayw}>9</Text>
             <View style={styles.dayform}>
             <Image style={styles.form} source={{url:beok[1].form}}/>
             </View>
            </View>
            </Swiper>
    </ScrollView>
    );

  };
  
  
  const styles = StyleSheet.create({
    container:{
        backgroundColor:"#05495D",
    },
    wrapper:{
        height:screenHeight*0.71,
        
    },
    dotStyle:{
        width:10,
        height:10,
        borderRadius:999,
       backgroundColor:"#69929E",
        marginTop:-screenHeight*0.01
    },
    activeDotStyle:{
        width:10,
        height:10,
        borderRadius:999,
        backgroundColor:"#fff",
        marginTop:-screenHeight*0.01
    },
    
    date:{
        width:90,
        marginTop:screenHeight*0.1,
        backgroundColor:"#fff",
        height:30,
        alignItems: 'center',
        justifyContent:"center",
        borderTopRightRadius:999,
        borderBottomRightRadius:999
    },
    wday:{
        color:"#05495D",
        fontSize:16,
        fontWeight:"bold",
        letterSpacing:3,
        
    },
    day:{
        alignItems: 'center',
        marginTop:10
    },
    dayw:{
        color:"#fff",
        fontSize:50,
        fontWeight:"bold",
    },
    dayform:{
        marginTop:35,
        width:screenWidth*0.906,//340
        height:screenHeight*0.5,//400
        backgroundColor:"#4E7E8C",
        borderRadius:30,
        flexDirection:"row",
        justifyContent:"center",
    },
    form:{
        width:screenWidth*0.759,//280
        height:screenHeight*0.38625,//309
        marginTop:30
    },
    moodbtn:{
    alignItems: 'center',
    zIndex:10,
    },
    mood1_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,//90
        right:screenWidth*0.32,//120
    },
    mood2_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        right:screenWidth*0.2//75
    },
    mood3_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        right:screenWidth*0.08//30
    },
    mood4_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        left:screenWidth*0.08
    },
    mood5_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.201,//163
        left:-screenWidth*0.04//-15
    },
    mood6_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.291,//236
        right:screenWidth*0.32,
    },
    mood7_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.291,
        left:screenWidth*0.2
    },
    mood8_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.291,
        left:screenWidth*0.08
    },
    mood9_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.38,//309
        right:screenWidth*0.2,
    },
    mood10_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.38,
        left:screenWidth*0.08
    },
    mood11_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.38,
        left:screenWidth*0.32
    },
    mood12_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.472,//382
        right:screenWidth*0.32,
    },
    mood13_6:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.472,
        right:screenWidth*0.2
    },
    mood1_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        right:screenWidth*0.32,
    },
    mood2_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        right:screenWidth*0.2
    },
    mood3_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.201,
        // right:30
        left:-screenWidth*0.04
    },
    mood4_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        left:screenWidth*0.08
    },
    mood5_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.201,
        right:screenWidth*0.08
    },
    mood6_7:{
        position:"absolute",
        width:30,
        height:36.53,
        marginTop:screenHeight*0.11,
        right:-screenWidth*0.04
    },
    // container:{
    //     backgroundColor:"#05495D",
    // },
    // wrapper:{
    //     height:540,
        
    // },
    // dotStyle:{
    //     width:10,
    //     height:10,
    //     borderRadius:999,
    //    backgroundColor:"#69929E"
    // },
    // activeDotStyle:{
    //     width:10,
    //     height:10,
    //     borderRadius:999,
    //     backgroundColor:"#fff"
    // },
    
    // date:{
    //     width:90,
    //     marginTop:50,
    //     backgroundColor:"#fff",
    //     height:30,
    //     alignItems: 'center',
    //     justifyContent:"center",
    //     borderTopRightRadius:999,
    //     borderBottomRightRadius:999
    // },
    // wday:{
    //     color:"#05495D",
    //     fontSize:16,
    //     fontWeight:"bold",
    //     letterSpacing:3,
        
    // },
    // day:{
    //     alignItems: 'center',
    //     marginTop:-10
    // },
    // dayw:{
    //     color:"#fff",
    //     fontSize:50,
    //     fontWeight:"bold",
    // },
    // dayform:{
    //     marginTop:35,
    //     width:340,
    //     height:400,
    //     backgroundColor:"#4E7E8C",
    //     borderRadius:30,
    //     flexDirection:"row",
    //     justifyContent:"center",
    // },
    // form:{
    //     width:280,
    //     height:309,
    //     marginTop:30
    // },
    // moodbtn:{
    // alignItems: 'center',
    // zIndex:10,
    // },
    // mood1_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     right:118,
    // },
    // mood2_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     right:74
    // },
    // mood3_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     right:30
    // },
    // mood4_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     left:30
    // },
    // mood5_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:163,
    //     left:-15
    // },
    // mood6_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:236,
    //     right:118,
    // },
    // mood7_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:236,
    //     left:74
    // },
    // mood8_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:236,
    //     left:30
    // },
    // mood9_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:309,
    //     right:74,
    // },
    // mood10_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:309,
    //     left:30
    // },
    // mood11_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:309,
    //     left:118
    // },
    // mood12_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:382,
    //     right:118,
    // },
    // mood13_6:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:382,
    //     right:74
    // },
    // mood1_7:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     right:118,
    // },
    // mood2_7:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     right:73
    // },
    // mood3_7:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:163,
    //     left:-14
    // },
    // mood4_7:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     left:-14
    // },
    // mood5_7:{
    //     position:"absolute",
    //     width:30,
    //     height:36.53,
    //     marginTop:90,
    //     left:30
    // },
  });

export default Daily;