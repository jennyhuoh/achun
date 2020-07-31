import React, { useState,useEffect,useContext } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,ScrollView, AsyncStorage, ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator, DrawerActions } from '@react-navigation/stack';
import { Input } from 'react-native-elements';
import { navigationRef } from './RootNavigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from "./src/screens/HomeStack";
import DailyStack from "./src/screens/DailyStack";
import FriendStack from "./src/screens/FriendStack";
import RedButton from "./src/conponents/RedButton";
import YellowButton from "./src/conponents/YellowButton";
import Redsave from "./src/conponents/Redsave";
import Yellowsave from "./src/conponents/Yellowsave";
import Happysave from "./src/conponents/Happysave"
import Setting from "./src/conponents/Setting"
import beok from "./src/json/json.json";
import { TextInput } from 'react-native-gesture-handler';
import { StoreProvider } from "./src/stores/Store.js"
import * as firebase from "firebase";
import { StoreContext } from "./src/stores/Store.js";
import Login from "./src/conponents/Login";
import {SplashScreen} from "expo";
import { ImagePropTypes } from 'react-native';
import meJson from './src/json/me.json';
import chartJson from "./src/json/chart.json";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MyTab = () => {
  return (

    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HOME') {
            iconName = focused
              ? require("./src/img/home1.png")
              : require("./src/img/home2.png")
          }
          else if (route.name === 'Daily') {
            iconName = focused
              ? require("./src/img/daily1.png")
              : require("./src/img/daily2.png")
          }
          else if (route.name === 'FRIENDS') {
            iconName = focused
              ? require("./src/img/friends1.png")
              : require("./src/img/friends2.png")
          }
          else if (route.name === 'SETTING') {
            iconName = focused
              ? require("./src/img/setting1.png")
              : require("./src/img/setting2.png")
          }
          return <Image source={iconName} style={{ width: 40, height: 40 ,top:10}} />;

        },
      })}
      tabBarOptions={{
        activeBackgroundColor:false,
        inactiveTintColor: '#838383',
        activeTintColor: '#05495D',
        style: { height: 80,width:"95%", 
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        left:"2.5%",
        position:"absolute",
         },
        labelStyle: {
          bottom: -14,//2
        },
        // activeBackgroundColor:false,
        // inactiveTintColor: '#838383',
        // activeTintColor: '#05495D',
        // style: { height: 60,width:"95%", 
        // borderTopLeftRadius:25,
        // borderTopRightRadius:25,
        // left:"2.5%",
        // position:"absolute",
        //  },
        // labelStyle: {
        //   bottom: 2,
        // },
      }}>
      <Tab.Screen name="HOME" component={HomeStack} />
      <Tab.Screen name="Daily" component={DailyStack} options={{ title: "DAILY" }} />
      <Tab.Screen name="FRIENDS" component={FriendStack} />
      <Tab.Screen name="SETTING" component={Setting} />
    </Tab.Navigator>
  );
};

const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";
const CHART_PERSISTENCE_KEY = "CHART_PERSISTENCE_KEY";
const HAS_SET_KEY2 = "HAS_SET_KEY2";

const App = (props) => {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  const { isLoginState } = useContext(StoreContext);
  const [ isLogin, setIsLogin] = isLoginState;
  
  const [me, setMe] = React.useState(meJson);
  const [chart,setChart] = React.useState(chartJson);
  
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
        await AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(meJson));
        await AsyncStorage.setItem(CHART_PERSISTENCE_KEY,JSON.stringify(chartJson));
        // const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
        // const state_me = JSON.parse(meString);
        // setMe(state_me);

        // const chartString = await AsyncStorage.getItem(CHART_PERSISTENCE_KEY);
        // const state_chart = JSON.parse(chartString);
        // setChart(state_chart);
        
      } catch (e) {

        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  useEffect(() => {
    // Initialize Firebase
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
    // firebase.initializeApp(firebaseConfig);
   if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
   }
  }, []);
 
  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null;
  } else {
    return isLogin ? (
      <NavigationContainer
        ref={navigationRef}
        initialState={initialNavigationState}
        onStateChange={(state) =>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
        <Stack.Navigator>
        
          <Stack.Screen name="Home" component={MyTab}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: "H O M E",
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerShown: false,
              headerBackTitleVisible: false,

            }}
          />
          <Stack.Screen name="RedButton" component={RedButton}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="YellowButton" component={YellowButton}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Redsave" component={Redsave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Yellowsave" component={Yellowsave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Happysave" component={Happysave}
            options={{
              headerRight: () => <TouchableOpacity onPress={() => navigationRef.current?.navigate('Setting')}>
                <Image style={styles.setting} source={{ uri: beok[0].setting }} />
              </TouchableOpacity>,
              title: false,
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
              headerLeft: false,
              headerShown: false
            }}
          />
          <Stack.Screen name="Setting" component={Setting}
            options={{
              title: 'S E T T I N G',
              headerTintColor: '#000',
              headerStyle: { backgroundColor: '#FAF9F9' },
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    ):(
      <NavigationContainer
      ref={navigationRef}
      initialState={initialNavigationState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
     
    >
       <Stack.Navigator>
        <Stack.Screen name="Login" component={Login}
            options={{
              headerShown: false
            }} />
           </Stack.Navigator>
      </NavigationContainer>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#05495D",
    height:"100%"
  },
  setting: {
    width: 30,
    height: 30,
    right: 8
  },
  
});
// export default App;
export default () => {
  return (
    <StoreProvider>
      <App />
    </StoreProvider>// user變成全域變數
  )
}