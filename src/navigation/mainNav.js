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
import HealthScreen from '../Screens/Health/HealthScreen';
import Entertainment from '../Screens/Health/Entertainment';
import Politics from '../Screens/Health/Politics';
import Sports from '../Screens/Health/Sports';
import Science from '../Screens/Health/Science';
import Technology from '../Screens/Health/Technology';
import CustomDrawer from '../navigation/CustomDrawer/CustomDrawer';
import TopStories from '../Screens/Health/TopStories';
import Trending from '../Screens/Health/Trending';
import World from '../Screens/Health/World';

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
          name="HealthScreen"
          component={HealthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="TopStories"
          component={TopStories}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Trending"
          component={Trending}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Politics"
          component={Politics}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sports"
          component={Sports}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Science"
          component={Science}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Entertainment"
          component={Entertainment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Technology"
          component={Technology}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="World"
          component={World}
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
          fontSize: 16,
        },
      }}>
      <Drawer.Screen name="General" component={MainScreen} />
      <Drawer.Screen name="Politics" component={Politics} />
      <Drawer.Screen name="Health" component={HealthScreen} />
      <Drawer.Screen name="Sports" component={Sports} />
      <Drawer.Screen name="Science" component={Science} />
      <Drawer.Screen name="Technology" component={Technology} />
      <Drawer.Screen name="World Wide" component={World} />
      <Drawer.Screen name="Entertainment" component={Entertainment} />
    </Drawer.Navigator>
  );
};

export default MainNav;
