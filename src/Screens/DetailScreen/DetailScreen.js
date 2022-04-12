import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
  Image,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';

const DetailScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const fillIcon = () => {
    setShow(!show);
  };
  return (
    <View style={styles.maincontainer}>
      <StatusBar barStyle="auto" />
      <View style={styles.headerConatiner}>
        <View style={styles.header}>
          <Icon
            name="arrowleft"
            type="antdesign"
            size={30}
            color="white"
            onPress={() => {
              navigation.navigate('MainScreen');
            }}
          />
          <Text style={styles.headerText}>Detail</Text>
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.midContainer}>
          <View style={styles.midView}>
            <Image
              source={require('../../assests/fb1.jpeg')}
              style={styles.midPhoto}
            />
          </View>
          <View
            style={{
              width: '90%',
              // backgroundColor: 'grey',
              height: '30%',
              justifyContent: 'space-between',
              paddingVertical: 5,
            }}>
            <Text style={styles.midText}>
              A lorem ipsum generator for future-of-news.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                height: '25%',
                alignItems: 'center',
              }}>
              <View style={{width: '75%'}}>
                <Text style={{fontFamily: 'Roboto-Regular', fontSize: 12}}>
                  March 23,2022
                </Text>
              </View>
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
                  name={show ? 'bookmark' : 'bookmark-outline'}
                  type="ionicons"
                  size={28}
                  color="black"
                  style={{}}
                  onPress={() => {
                    fillIcon();
                  }}
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
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: (height / 100) * 25,
            // backgroundColor: 'white',
          }}>
          <View style={{width: '90%', height: '90%'}}>
            <Text style={{color: 'black'}}>
              Lorum ipsum is the traditional Latin placeholder text, used when a
              designer needs a chunk of text for dummying up a layout. Journo
              Ipsum is like that, only using some of the most common
              catchphrases, buzzwords.Lorum ipsum is the traditional Latin
              placeholder text, used when a designer needs a chunk of text for
              dummying up a layout. Journo Ipsum is like that, only using some
              of the most common catchphrases, buzzwords.
            </Text>
          </View>
        </View>

        <View style={styles.endContainer}>
          <View style={styles.endheader}>
            <Text style={styles.endText}>Related News</Text>
          </View>

          <View
            style={{
              height: 120,
              width: '90%',
              backgroundColor: 'white',
              marginTop: '5%',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 120, width: '40%', borderRadius: 5}}
              source={require('../../assests/image6.jpg')}
            />
            <View style={{width: '60%', marginHorizontal: 5, height: '100%'}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Roboto-Regular',
                  height: '60%',
                }}>
                A lorem ipsum generator for future-of-news. A lorem ipsum gene
                for future-of-news nerds
              </Text>
              <TouchableOpacity
                style={{
                  height: '50%',
                  width: '40%',
                  // backgroundColor: '#cb0003',
                  marginTop: '5%',
                  borderRadius: 5,
                  // paddingTop: '5%',
                  marginHorizontal: '1%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <Text
                  style={{
                    color: '#cb0003',
                    fontSize: 14,
                    fontFamily: 'Roboto-Bold',
                  }}>
                  Read More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 120,
              width: '90%',
              backgroundColor: 'white',
              marginTop: '5%',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 120, width: '40%', borderRadius: 5}}
              source={require('../../assests/image7.jpg')}
            />
            <View style={{width: '60%', marginHorizontal: 5, height: '100%'}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Roboto-Regular',
                  height: '60%',
                }}>
                A lorem ipsum generator for future-of-news. A lorem ipsum gene
                for future-of-news nerds
              </Text>
              <TouchableOpacity
                style={{
                  height: '50%',
                  width: '40%',
                  // backgroundColor: '#cb0003',
                  marginTop: '5%',
                  borderRadius: 5,
                  // paddingTop: '5%',
                  marginHorizontal: '1%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <Text
                  style={{
                    color: '#cb0003',
                    fontSize: 14,
                    fontFamily: 'Roboto-Bold',
                  }}>
                  Read More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              height: 120,
              width: '90%',
              backgroundColor: 'white',
              marginTop: '5%',
              borderRadius: 5,
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 120, width: '40%', borderRadius: 5}}
              source={require('../../assests/image8.jpg')}
            />
            <View style={{width: '60%', marginHorizontal: 5, height: '100%'}}>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Roboto-Regular',
                  height: '60%',
                }}>
                A lorem ipsum generator for future-of-news. A lorem ipsum gene
                for future-of-news nerds
              </Text>
              <TouchableOpacity
                style={{
                  height: '50%',
                  width: '40%',
                  // backgroundColor: '#cb0003',
                  marginTop: '5%',
                  // borderRadius: 25,
                  // paddingTop: '5%',
                  marginHorizontal: '1%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <Text
                  style={{
                    color: '#cb0003',
                    fontSize: 14,
                    fontFamily: 'Roboto-Bold',
                  }}>
                  Read More
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={{height: 300}}></View>
      </ScrollView>
    </View>
  );
};
export default DetailScreen;
