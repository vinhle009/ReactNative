import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity, Image, TextInput, View, Text } from "react-native";
import Login from "./Login";
import ListJob from "./ListJob";
import AddJob from "./AddJob";
import{useState} from "react";
const Stack = createStackNavigator();
const StackNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      <Stack.Screen name="ListJob"  component={ListJob} options={({route})=>({
            headerTitle: "",
            headerRight: () => (
          <View style={{ flexDirection: "row" }}>
            <View style={{alignItems:"center"}}>
              <Image style={{height:40,width:40,resizeMode:"contain"}} source={require("../assets/user-circle.png")} />
            </View>
            <View>
              <Text style={{color:"black",fontSize:20,marginLeft:10,fontWeight:"bold"}}>Hi   </Text>
              <Text style={{fontSize:14,marginRight:10}}>Have agrate day a head</Text>
            </View>
          </View>
            ),
            })
      } />
      <Stack.Screen name="AddJob"  component={AddJob} options={({route})=>({
               headerTitle: "",
               headerRight: () => (
             <View style={{ flexDirection: "row" }}>
               <View style={{alignItems:"center"}}>
                 <Image style={{height:40,width:40,resizeMode:"contain"}} source={require("../assets/user-circle.png")} />
               </View>
               <View>
                 <Text style={{color:"black",fontSize:20,marginLeft:10,fontWeight:"bold"}}>Hi </Text>
                 <Text style={{fontSize:14,marginRight:10}}>Have agrate day a head</Text>
               </View>
             </View>
               ),
               })
         } />
    </Stack.Navigator>
  );
};
export { StackNavigation };
