import React from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {Icon} from 'react-native-elements';
import styles from './styles';

const TopStories = ({navigation}) => {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.headerConatiner}>
        <View style={styles.header}>
          <Icon
            name="arrowleft"
            type="antdesign"
            size={30}
            color="white"
            onPress={() => {
              navigation.navigate('General');
            }}
          />
          <Text style={styles.headerText}>Top Stories</Text>
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
      </View>
      <View style={styles.Container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity
            style={styles.scrollcom}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}>
            <Image
              style={styles.scrollImage}
              source={require('../../assests/fb1.jpeg')}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '1%',
                height: '30%',
                marginHorizontal: '2.5%',
              }}>
              <Text style={styles.scrollText}>Science And Technology</Text>
              <View
                style={{
                  height: '40%',
                  width: '100%',

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.scrollText1}>4 hour ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    width: '20%',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                  <Icon
                    name="share"
                    type="entypo"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scrollcom}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}>
            <Image
              style={styles.scrollImage}
              source={require('../../assests/fb2.jpeg')}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '1%',
                height: '30%',
                marginHorizontal: '2.5%',
              }}>
              <Text style={styles.scrollText}>Politics</Text>
              <View
                style={{
                  height: '40%',
                  width: '100%',

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.scrollText1}>1 hour ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    width: '20%',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                  <Icon
                    name="share"
                    type="entypo"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scrollcom}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}>
            <Image
              style={styles.scrollImage}
              source={require('../../assests/fb3.jpeg')}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '1%',
                height: '30%',
                marginHorizontal: '2.5%',
              }}>
              <Text style={styles.scrollText}>Entertainment</Text>
              <View
                style={{
                  height: '40%',
                  width: '100%',

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.scrollText1}>2 hour ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    width: '20%',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                  <Icon
                    name="share"
                    type="entypo"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scrollcom}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}>
            <Image
              style={styles.scrollImage}
              source={require('../../assests/fb4.jpeg')}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '1%',
                height: '30%',
                marginHorizontal: '2.5%',
              }}>
              <Text style={styles.scrollText}>Sports</Text>
              <View
                style={{
                  height: '40%',
                  width: '100%',

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.scrollText1}>16 hour ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    width: '20%',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                  <Icon
                    name="share"
                    type="entypo"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.scrollcom}
            onPress={() => {
              navigation.navigate('DetailScreen');
            }}>
            <Image
              style={styles.scrollImage}
              source={require('../../assests/fb5.jpeg')}
            />
            <View
              style={{
                width: '100%',
                paddingHorizontal: '1%',
                height: '30%',
                marginHorizontal: '2.5%',
              }}>
              <Text style={styles.scrollText}>Politics</Text>
              <View
                style={{
                  height: '40%',
                  width: '100%',

                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Text style={styles.scrollText1}>4 hour ago</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    height: 50,
                    width: '20%',
                    alignItems: 'center',
                    // backgroundColor: 'red',
                  }}>
                  <Icon
                    name="bookmark"
                    type="feather"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                  <Icon
                    name="share"
                    type="entypo"
                    size={24}
                    color="black"
                    onPress={() => {}}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <View style={{height: 50}}></View>
        </ScrollView>
      </View>
    </View>
  );
};
export default TopStories;
