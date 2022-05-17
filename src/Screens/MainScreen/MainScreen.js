import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  Pressable,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';
import Categories from './HomeComponents/Categories';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale} from '../../Theme/Dimensions';
import TopStories from './HomeComponents/TopStoriesList';
const MainScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const fillIcon = () => {
    setShow(!show);
  };
  const [trending, Settrending] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [story, setStory] = useState([]);

  useEffect(() => {
    fechApi();
    // TopStories();
  }, []);

  const fechApi = async () => {
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
        // console.log('success');
        // console.log(response.data[0]);
        Settrending(response.data);
        setFilterData(response.data);
        if (loading) {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const searchFilter = text => {
    if (text) {
      const newData = trending.filter(item => {
        const itemData = item.title.rendered ? item.title.rendered : '';
        const textData = text;
        return itemData.indexOf(textData) > -1;
      });
      setSearch(text);
      setFilterData(newData);
    } else {
      setSearch(text);
      setFilterData(trending);
    }
  };

  // const datesetting = setDate(
  //   moment(trending.date).format('MMMM Do YYYY, h:mm:ss a'),
  // );

  // const regex = trending.content.rendered;
  // const result = trending.content.rendered.replace(regex, '');

  return (
    <View style={styles.maincontainer}>
      {/* header section */}
      <View style={styles.headerConatiner}>
        <View style={styles.header}>
          <Icon
            name="menu"
            type="feather"
            size={28}
            color="white"
            onPress={() => {
              navigation.openDrawer();
            }}
          />
          <Text style={styles.headerText}>786 News</Text>
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.search}
            value={search}
            placeholder="خبریں تلاش کریں۔"
            maxLength={20}
            onChangeText={text => searchFilter(text)}
          />
          <View style={styles.searchIcon}>
            <Icon name="search" type="feather" size={24} color="grey" />
          </View>
        </View>
      </View>
      {/* midScrollConatiner */}

      <View style={styles.midScrollConatiner}>
        <Categories />
      </View>

      {/* Horizontal Scroll section */}
      {/* <View style={styles.midContainer}>
        <View style={styles.midView}>
          <Text style={styles.midText}>Top Stories</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('TopStories');
            }}
            style={styles.viewAllContainer}>
            <Text style={styles.endText1}>View All</Text>
          </TouchableOpacity>
        </View>
      </View> */}

      {loading ? (
        <ScrollView
          style={{
            flex: 1,
          }}
          showsVerticalScrollIndicator={false}>
          <SkeletonPlaceholder>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginTop: moderateScale(10),
              }}>
              <View style={{marginLeft: moderateScale(10)}}>
                <View
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: moderateScale(10),
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginTop: moderateScale(10),
              }}>
              <View style={{marginLeft: moderateScale(10)}}>
                <View
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: moderateScale(10),
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginTop: moderateScale(10),
              }}>
              <View style={{marginLeft: moderateScale(10)}}>
                <View
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: moderateScale(10),
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginTop: moderateScale(10),
              }}>
              <View style={{marginLeft: moderateScale(10)}}>
                <View
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: moderateScale(10),
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: 5,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '95%',
                marginTop: moderateScale(10),
              }}>
              <View style={{marginLeft: moderateScale(10)}}>
                <View
                  style={{
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{
                    marginTop: moderateScale(10),
                    width: moderateScale(200),
                    height: moderateScale(55),
                    borderRadius: 5,
                  }}
                />
                <View
                  style={{marginTop: 6, width: 80, height: 20, borderRadius: 4}}
                />
              </View>
              <View
                style={{
                  width: moderateScale(150),
                  height: moderateScale(150),
                  borderRadius: 5,
                }}
              />
            </View>
          </SkeletonPlaceholder>
        </ScrollView>
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          data={filterData}
          ListHeaderComponent={() => {
            return (
              <>
                <View style={styles.HorizontalComponentContainer}>
                  <View style={styles.HorzonralHeadingContainer}>
                    <Text style={styles.HorzonralHeadingText}>اہم ترین</Text>
                    {/* <Pressable
                      onPress={() => {
                        navigation.navigate('TopStories');
                      }}
                      style={styles.viewAllContainer}>
                      <Text style={styles.endText1}>View All</Text>
                    </Pressable> */}
                  </View>
                  <TopStories />
                </View>
                <View style={styles.verticalComponentsheadingContainer}>
                  <Text style={styles.verticalComponentsheadingText}>
                    اہم خبریں
                  </Text>
                  {/* <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Trending');
                    }}
                    style={styles.viewAllContainer}>
                    <Text style={styles.endText1}>View All</Text>
                  </TouchableOpacity> */}
                </View>
              </>
            );
          }}
          nestedScrollEnabled={true}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.VerticalScrollComponent}
                onPress={() => {
                  navigation.navigate('DetailScreen', {
                    item: item,
                  });
                }}>
                <View style={styles.cardContainer}>
                  <View style={styles.cardMainTextContainer}>
                    <Text style={styles.cardMainText} numberOfLines={2}>
                      {item.title.rendered}
                    </Text>
                  </View>
                  <Text style={styles.CardDetailtext} numberOfLines={2}>
                    {item.content.rendered}
                  </Text>
                  <View style={styles.cardTimeContainer}>
                    <Text style={styles.dateText}>
                      {moment(item.date).format('lll')}
                    </Text>
                  </View>
                </View>
                <Image
                  style={styles.cardImage}
                  source={{uri: item.jetpack_featured_media_url}}
                />
              </TouchableOpacity>
            );
          }}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      )}
    </View>
  );
};
export default MainScreen;
