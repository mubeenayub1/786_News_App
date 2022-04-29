import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  Dimensions,
  ScrollView,
  StatusBar,
  ImageBackground,
  Pressable,
  Image,
  FlatList,
} from 'react-native';
const {height, width} = Dimensions.get('window');
import axios from 'axios';
import {Icon} from 'react-native-elements';
import styles from './styles';

const Business = ({navigation}) => {
  const [business, SetBusiness] = useState([]);
  useEffect(() => {
    fechApi();
    // TopStories();
  }, []);

  const fechApi = async () => {
    try {
      // var axios = require('axios');
      var config = {
        method: 'get',
        url: 'https://786news.com.pk/wp-json/wp/v2/posts?categories=4',
        headers: {},
      };

      let response = await axios(config);
      if (response) {
        // console.log(response);
        console.log('success');
        // console.log(response.data[0]);
        SetBusiness(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          <Text style={styles.headerText}>Business</Text>
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
      </View>

      <View style={styles.Container}>
        <FlatList
          data={business}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.CardContainer}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <Image
                  style={styles.cardImage}
                  source={{uri: item.jetpack_featured_media_url}}
                />
                <View style={styles.cardtextContainer}>
                  <Text style={styles.cardHeadingText}>
                    {item.title.rendered}
                  </Text>
                  <View style={styles.cardTimeContainer}>
                    <Text style={styles.timeText}>{item.date}</Text>
                    <View style={styles.iconContainer}>
                      <Icon
                        name="bookmark"
                        type="feather"
                        size={20}
                        color="black"
                        onPress={() => {}}
                      />
                      <Icon
                        name="share"
                        type="entypo"
                        size={20}
                        color="black"
                        onPress={() => {}}
                      />
                    </View>
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};
export default Business;
