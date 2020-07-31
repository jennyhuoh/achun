import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../conponents/Home';
import RedButton from "../conponents/RedButton";
import YellowButton from "../conponents/YellowButton";
import Setting from "../conponents/Setting"
import beok from "../json/json.json";
const Stack = createStackNavigator();

const HomeStack = ({navigation}) => 
{
    return(
    <Stack.Navigator>
    <Stack.Screen name="Home" component={Home} 
    options={{
     headerRight: () =>  <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
     <Image style={styles.setting} source = {{uri:beok[0].setting}}/>
     </TouchableOpacity>,
    title:"H O M E",
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#FAF9F9'},
    headerShown: false,
  }}
  />
  </Stack.Navigator>
    )}
  
  const styles = StyleSheet.create({
    setting:{
        width:30,
        height:30,
        right:8
      },
  });
  
  export default HomeStack;