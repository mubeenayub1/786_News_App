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
import moment from 'moment';
import {Icon} from 'react-native-elements';

import styles from './styles';

const DetailScreen = ({navigation, route}) => {
  const [show, setShow] = useState(false);
  // const {item} = route.params;
  const {item} = route.params;
  const fillIcon = () => {
    setShow(!show);
  };
  // const regex = item.content.rendered;
  // const result = item.content.rendered.Replace(regex, '');
  return (
    <View style={styles.maincontainer}>
      <StatusBar backgroundColor={'red'} barStyle="light-content" />
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
        <View style={styles.detailImageContainer}>
          <View style={styles.imageContainer}>
            <Image
              source={{uri: item.jetpack_featured_media_url}}
              style={styles.photo}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.headingText}>{item.title.rendered}</Text>
            <View style={styles.timeContainer}>
              <Text style={styles.time}>{moment(item.date).format('lll')}</Text>
              {/* <Icon
                name="share"
                type="entypo"
                size={20}
                color="black"
                onPress={() => {}}
              /> */}
            </View>
          </View>
        </View>
        <ScrollView contentContainerStyle={styles.detailTextContainer}>
          <Text style={styles.detailText}>{item.content.rendered}</Text>
        </ScrollView>

        {/* <View style={styles.endContainer}>
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
        </View> */}
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
};
export default DetailScreen;
