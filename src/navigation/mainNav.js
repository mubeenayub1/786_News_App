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
import Theme from '../Theme/Theme';
import {moderateScale} from '../Theme/Dimensions';
import Categories from '../Screens/MainScreen/HomeComponents/Categories';

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
          name="Categories"
          component={Categories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="???????? ??????????"
          component={National}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="??????"
          component={Health}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={Religion}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={Cricket}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={ShowBiz}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={Sports}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="??????????"
          component={Education}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={Business}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="?????????? ?? ????????"
          component={Amazing}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="?????????? ??????????"
          component={InterNational}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="????????"
          component={Season}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="??????????"
          component={Food}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="?????????? ?????? ??????????????????"
          component={Science}
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
          marginLeft: moderateScale(20),
          fontFamily: Theme.fontFamily.urdu,
          fontSize: Theme.fontSizes.xmedium,
        },
      }}>
      <Drawer.Screen name="????????" component={MainScreen} />
      <Drawer.Screen name="?????????? ?? ????????" component={Amazing} />
      <Drawer.Screen name="????????" component={Business} />
      <Drawer.Screen name="????????" component={Cricket} />
      <Drawer.Screen name="??????????" component={Education} />
      <Drawer.Screen name="??????????" component={Food} />
      <Drawer.Screen name="??????" component={Health} />
      <Drawer.Screen name="?????????? ??????????" component={InterNational} />
      <Drawer.Screen name="???????? ??????????" component={National} />
      <Drawer.Screen name="????????" component={Religion} />
      <Drawer.Screen name="?????????? ?????? ??????????????????" component={Science} />
      <Drawer.Screen name="????????" component={Season} />
      <Drawer.Screen name="????????" component={ShowBiz} />
      <Drawer.Screen name="????????" component={Sports} />
    </Drawer.Navigator>
  );
};

export default MainNav;
