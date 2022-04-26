import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';

const Card = () => {
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
