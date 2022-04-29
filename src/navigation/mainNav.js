import React from 'react';
import {StatusBar} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';

// Screens
import Splash from '../Screens/Splash/Splash';
import DetailScreen from '../Screens/DetailScreen/DetailScreen';
import MainScreen from '../Screens/MainScreen/MainScreen';
import National from '../Screens/OtherScreens/National';
import Business from '../Screens/OtherScreens/Business';
import Religion from '../Screens/OtherScreens/Religion';
import Sports from '../Screens/OtherScreens/Sports';
import Education from '../Screens/OtherScreens/Education';
import Health from '../Screens/OtherScreens/Health';
import CustomDrawer from '../navigation/CustomDrawer/CustomDrawer';
import Science from '../Screens/OtherScreens/Science';
import ShowBiz from '../Screens/OtherScreens/ShowBiz';
import Season from '../Screens/OtherScreens/Season';
import Amazing from '../Screens/OtherScreens/Amazing';
import Cricket from '../Screens/OtherScreens/Cricket';
import InterNational from '../Screens/OtherScreens/InterNational';
import Food from '../Screens/OtherScreens/Food';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const MainNav = () => {
  return (
    <NavigationContainer>
      {/* <StatusBar barStyle="light-content" backgroundColor={'#cb0003'} /> */}
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainScreen"
          component={MyDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="National"
          component={National}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Health"
          component={Health}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Religion"
          component={Religion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Cricket"
          component={Cricket}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowBiz"
          component={ShowBiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sports"
          component={Sports}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Education"
          component={Education}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Business"
          component={Business}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Amazing"
          component={Amazing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="InterNational"
          component={InterNational}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Season"
          component={Season}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Food"
          component={Food}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="General"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        // drawerActiveBackgroundColor: '#cb0003',
        drawerActiveTintColor: '#cb0003',
        drawerInactiveTintColor: 'black',
        drawerLabelStyle: {
          marginLeft: 20,
          fontFamily: 'Roboto-Medium',
          fontSize: 14,
        },
      }}>
      <Drawer.Screen name="General" component={MainScreen} />
      <Drawer.Screen name="Amazing & Wierd" component={Amazing} />
      <Drawer.Screen name="Bussiness" component={Business} />
      <Drawer.Screen name="Cricket" component={Cricket} />
      <Drawer.Screen name="Education" component={Education} />
      <Drawer.Screen name="Food & Recipes" component={Food} />
      <Drawer.Screen name="Health" component={Health} />
      <Drawer.Screen name="International" component={InterNational} />
      <Drawer.Screen name="National" component={National} />
      <Drawer.Screen name="Religion" component={Religion} />
      <Drawer.Screen name="Science & Technology" component={Science} />
      <Drawer.Screen name="Season" component={Season} />
      <Drawer.Screen name="Showbiz" component={ShowBiz} />
      <Drawer.Screen name="Sports" component={Sports} />
    </Drawer.Navigator>
  );
};

export default MainNav;
