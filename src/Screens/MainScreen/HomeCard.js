import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = () => {
  const [story, setStory] = useState([]);
  useEffect(() => {
    TopStory();
  }, []);
  const TopStory = async () => {
    try {
      // var axios = require('axios');
      var config = {
        method: 'get',
        url: 'https://786news.com.pk/wp-json/wp/v2/posts?categories=3',
        headers: {},
      };

      let response = await axios(config);
      if (response) {
        // console.log(response);
        console.log('success');
        // console.log(response.data[0]);
        setStory(response.data);
      }

      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));
      //     Settrending(response);
      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableOpacity
      style={styles.scrollcom}
      onPress={() => {
        navigation.navigate('DetailScreen');
      }}>
      <View style={styles.cardContainer}>
        <View style={styles.cardMainTextContainer}>
          <Text style={styles.cardMainText}>Politics</Text>
        </View>
        <Text style={styles.scrollText}>AnyText wrtie here</Text>
        <View style={styles.cardTimeContainer}>
          <Text style={styles.scrollText1}>4 hour ago</Text>
        </View>
      </View>
      <Image
        style={styles.scrollImage}
        source={{uri: item.trending.jetpack_featured_media_url}}
      />
    </TouchableOpacity>
  );
};
export default Card;
