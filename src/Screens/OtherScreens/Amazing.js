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
import {Icon} from 'react-native-elements';
import styles from './styles';
import axios from 'axios';
import moment from 'moment';

const Amazing = ({navigation}) => {
  const [amazing, setAmazing] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fechApi();
    // TopStories();
  }, []);

  const fechApi = async () => {
    try {
      // var axios = require('axios');
      var config = {
        method: 'get',
        url: 'https://786news.com.pk/wp-json/wp/v2/posts?categories=8',
        headers: {},
      };

      let response = await axios(config);
      if (response) {
        // console.log(response);
        console.log('success');
        // console.log(response.data[0]);
        setAmazing(response.data);
        if (loading) {
          setLoading(false);
        }
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
              navigation.navigate('جنرل');
            }}
          />
          <Text style={styles.headerText}>دلچسپ و عجیب</Text>
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
      </View>

      <View style={styles.Container}>
        <FlatList
          data={amazing}
          contentContainerStyle={{paddingBottom: 40}}
          showsVerticalScrollIndicator={false}
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
                  <Text style={styles.cardHeadingText} numberOfLines={2}>
                    {item.title.rendered}
                  </Text>
                  <View style={styles.cardTimeContainer}>
                    <Text style={styles.timeText}>
                      {moment(item.date).format('lll')}
                    </Text>
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
export default Amazing;
