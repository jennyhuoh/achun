import React, { createContext, useState, useEffect } from "react";
import meJson from "../json/me.json";
import userJson from "../json/user.json";
import chartJson from "../json/chart.json";
import { AsyncStorage } from "react-native";

const ME_PERSISTENCE_KEY = "ME_PERSISTENCE_KEY";
const HAS_SET_KEY = "HAS_SET_KEY";

const USER_PERSISTENCE_KEY = "MAIL_PERSISTENCE_KEY";
const HAS_SET_KEY1 = "HAS_SET_KEY1";

const CHART_PERSISTENCE_KEY = "CHART_PERSISTENCE_KEY";
const HAS_SET_KEY2 = "HAS_SET_KEY2";

export const StoreContext = createContext();

// Make a Provider
export const StoreProvider = ({ children }) => {  
  const [isLogin, setIsLogin] = useState(false);
  const [me, setMe] = useState(meJson);
  const [user,setUser] = useState(userJson);
  const [chart,setChart] = useState(chartJson);
  const store = {
    isLoginState: [isLogin, setIsLogin],
    meState: [me, setMe],
    userState: [user, setUser],
    chartState: [chart,setChart]
  };

const restoreState = async () => {
    try {
      const hasSetString = await AsyncStorage.getItem(HAS_SET_KEY);
      const hasSet = JSON.parse(hasSetString);

      const userSetString = await AsyncStorage.getItem(HAS_SET_KEY1);
      const userSet = JSON.parse(userSetString);

      const chartSetString = await AsyncStorage.getItem(HAS_SET_KEY2);
      const chartSet = JSON.parse(chartSetString);
      if (true) {
        
        const meString = await AsyncStorage.getItem(ME_PERSISTENCE_KEY);
        const state_me = JSON.parse(meString);
        setMe(state_me);

        const chartString = await AsyncStorage.getItem(CHART_PERSISTENCE_KEY);
        const state_chart = JSON.parse(chartString);
        setChart(state_chart);

        const userString = await AsyncStorage.getItem(USER_PERSISTENCE_KEY);
        const state_user = JSON.parse(userString);
        setUser(state_user);
        console.log(state_me);
        console.log(state_chart);
        console.log(state_user);
        // console.log('restore from context chart a: ' + chart.a);
        // console.log('restore from phone chart a: ' + state_chart.a);
        
       
      }
    } catch (e) {
    
    }
  };

  const adjustState = async () =>{
   try {
    await AsyncStorage.setItem(ME_PERSISTENCE_KEY, JSON.stringify(meJson));
    await AsyncStorage.setItem(CHART_PERSISTENCE_KEY,JSON.stringify(chartJson));
   }
   catch(e){

   }
  };
  
  useEffect(() => {
    restoreState();
    // adjustState();
  }, []);

  return (
   <StoreContext.Provider value={store}>
      {children}
   </StoreContext.Provider>
  );
};