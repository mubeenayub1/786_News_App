import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Theme from '../../Theme/Theme';
import {ScrollView} from 'react-native-gesture-handler';

const CustomDrawer = props => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          // backgroundColor: 'red',
          height: '20%',
          width: '100%',
          borderBottomColor: 'black',
          borderBottomWidth: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../../assests/image1.jpeg')}
          style={{height: 100, width: 100, borderRadius: 50}}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          // backgroundColor: 'green',
          height: '100%',
          width: '100%',
        }}>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.bold,
                color: Theme.colors.primaryColor,
                padding: '5%',
              }}>
              Categories:
            </Text>
          </TouchableOpacity>
          <View style={{width: '90%', marginHorizontal: '5%'}}>
            <DrawerItemList {...props} />
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.bold,
                color: Theme.colors.primaryColor,
                padding: '5%',
              }}>
              Favourites
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              style={{
                fontSize: 20,
                fontFamily: Theme.fontFamily.bold,
                color: Theme.colors.primaryColor,
                padding: '5%',
              }}>
              Contact Us
            </Text>
          </TouchableOpacity>
          <View style={{height: 30}}></View>
        </ScrollView>
      </DrawerContentScrollView>
      <View
        style={{
          borderTopWidth: 1,
          borderTopColor: 'black',
          height: '15%',
        }}>
        <Text
          style={{
            fontSize: 18,
            fontFamily: Theme.fontFamily.regular,
            color: 'black',
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          Also Avaiable on
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: '5%',
            justifyContent: 'space-between',
            width: '65%',
          }}>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <Image
              source={require('../../assests/youtube.png')}
              style={{height: 40, width: 60, borderRadius: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <Image
              source={require('../../assests/Facebook.jpg')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
            <Image
              source={require('../../assests/web1.png')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CustomDrawer;
