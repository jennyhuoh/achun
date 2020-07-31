import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Daily from '../conponents/Daily';
import Dailycontent from "../conponents/Dailycontent"
import beok from "../json/json.json";
const Stack = createStackNavigator();

const DailyStack = ({navigation}) => 
{
    return(
    <Stack.Navigator>
    <Stack.Screen name="Daily" component={Daily} 
    options={{
     headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
     <Image style={styles.setting} source = {{uri:beok[0].setting}}/>
     </TouchableOpacity>,
    title:"D A I L Y",
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#FAF9F9' },
    headerShown: false
  }}/>
    <Stack.Screen name="Content" component={Dailycontent} 
    options={{
     headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
     <Image style={styles.setting} source = {{uri:beok[0].setting}}/>
     </TouchableOpacity>,
    title:"D A I L Y",
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#FAF9F9' },
    headerBackTitleVisible:false,
    headerShown: false
  }}/>
  </Stack.Navigator>
    )}

const styles = StyleSheet.create({
    setting:{
        width:30,
        height:30,
        right:8
      },
});

export default DailyStack;