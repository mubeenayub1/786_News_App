import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Linking,
} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Theme from '../../Theme/Theme';
import {ScrollView} from 'react-native-gesture-handler';
import styles from './styles';

const CustomDrawer = props => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assests/image1.jpeg')}
          style={styles.image}
        />
      </View>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          // backgroundColor: 'green',
          height: '100%',
          width: '100%',
        }}>
        <TouchableOpacity>
          <Text style={styles.drawerHeadingText}>Categories:-</Text>
        </TouchableOpacity>
        <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
          <View style={{width: '90%', marginHorizontal: '5%'}}>
            <DrawerItemList {...props} />
          </View>
        </ScrollView>
        <TouchableOpacity>
          <Text style={styles.drawerHeadingText}>Rate Us</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.drawerHeadingText}>Contact Us</Text>
        </TouchableOpacity>
        <View style={{height: 30}}></View>
      </DrawerContentScrollView>
      <View style={styles.footerContainer}>
        <Text style={styles.footerText}>Also Follow us on</Text>
        <View style={styles.footerButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.youtube.com/c/786NewsOfficial');
            }}
            style={{paddingVertical: 15}}>
            <Image
              source={require('../../assests/youtube.png')}
              style={{height: 40, width: 60, borderRadius: 10}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.facebook.com/786Newsofficial');
            }}
            style={{paddingVertical: 15}}>
            <Image
              source={require('../../assests/Facebook.jpg')}
              style={{height: 40, width: 40, borderRadius: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://786news.com.pk/');
            }}
            style={{paddingVertical: 15}}>
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
