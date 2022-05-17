import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  FlatList,
  View,
  Text,
  Pressable,
  Image,
  TouchableOpacity,
} from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale} from '../../../Theme/Dimensions';
import styles from '../styles';
import axios from 'axios';
const TopStories = () => {
  const [stories, setStories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchValues();
  }, []);

  const fetchValues = async () => {
    try {
      var config = {
        method: 'get',
        url: 'http://786news.com.pk/wp-json/wp/v2/posts?categories=6963',
        headers: {},
      };

      let response = await axios(config);
      if (response) {
        // console.log(response);
        console.log('success');
        // console.log(response.data[0]);
        setStories(response.data);
        if (loading) {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {loading ? (
        <ScrollView
          style={{
            flex: 1,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <SkeletonPlaceholder>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  height: moderateScale(160),
                  width: moderateScale(240),
                  borderRadius: moderateScale(5),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  height: moderateScale(160),
                  width: moderateScale(240),
                  borderRadius: moderateScale(5),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  height: moderateScale(160),
                  width: moderateScale(240),
                  borderRadius: moderateScale(5),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  height: moderateScale(160),
                  width: moderateScale(240),
                  borderRadius: moderateScale(5),
                }}></View>
            </View>
            <View
              style={{
                marginTop: moderateScale(10),
              }}>
              <View
                style={{
                  height: moderateScale(160),
                  width: moderateScale(240),
                  borderRadius: moderateScale(5),
                }}></View>
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <FlatList
          data={stories}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => {
            return (
              <Pressable
                style={styles.horizontalScrollComponent}
                onPress={() => {
                  navigation.navigate('DetailScreen'),
                    {
                      item: item,
                    };
                }}>
                <Image
                  source={{uri: item.jetpack_featured_media_url}}
                  style={styles.horizontalImage}
                />
              </Pressable>
            );
          }}
        />
      )}
    </>
  );
};
export default TopStories;

// ListHeaderComponent={() => {
//   return (
//
//   );
// }}
