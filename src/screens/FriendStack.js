import React from 'react';
import { StyleSheet, Text, View,Image, TouchableWithoutFeedback, Button, Linking ,TouchableOpacity} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Friends from '../conponents/Friends';
import beok from "../json/json.json";
const Stack = createStackNavigator();

const FriendStack = ({navigation}) => 
{
    return(
    <Stack.Navigator>
    <Stack.Screen name="Friends" component={Friends}
    options={{
     headerRight: () =>  <TouchableOpacity onPress={() =>navigation.navigate('Setting')}>
     <Image style={styles.setting} source = {{uri:beok[0].setting}}/>
     </TouchableOpacity>,
    title:"F R I E N D S",
    headerTintColor: '#000',
    headerStyle: { backgroundColor: '#FAF9F9' },
    headerShown:false
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

export default FriendStack;