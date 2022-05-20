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
  Dimensions,
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';
// import Categories from './HomeComponents/Categories';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale} from '../../Theme/Dimensions';
import TopStories from './HomeComponents/TopStoriesList';
import {WebView} from 'react-native-webview';
// import RenderHtml from 'react-native-render-html';
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

  const htmlData = data => {
    // var regex = '/<(.|\n)*?>/';
    var regex = /(<([^>]+)>)/gi;
    return data.replace('</p>', '\n').replace(regex, '');
  };

  return (
    <View style={styles.maincontainer}>
      <StatusBar barStyle="light-content" backgroundColor={'#cb0003'} />
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

      <View style={styles.midScrollConatiner}>
        {/* <Categories /> */}
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.CategoryContainer, {backgroundColor: '#cb0003'}]}>
            <Text style={[styles.midScrolltext, {color: 'white'}]}>جنرل</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('بزنس');
            }}>
            <Text style={styles.midScrolltext}>بزنس</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('کرکٹ');
            }}>
            <Text style={styles.midScrolltext}>کرکٹ</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('تعلیم');
            }}>
            <Text style={styles.midScrolltext}>تعلیم</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('صحت');
            }}>
            <Text style={styles.midScrolltext}>صحت</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('پکوان');
            }}>
            <Text style={styles.midScrolltext}>پکوان</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('مذہب');
            }}>
            <Text style={styles.midScrolltext}>مذہب</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('موسم');
            }}>
            <Text style={styles.midScrolltext}>موسم</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('شوبز');
            }}>
            <Text style={styles.midScrolltext}>شوبز</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.CategoryContainer}
            onPress={() => {
              navigation.navigate('کھیل');
            }}>
            <Text style={styles.midScrolltext}>کھیل</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.CategoryContainer, {width: 120}]}
            onPress={() => {
              navigation.navigate('دلچسپ و عجیب');
            }}>
            <Text style={styles.midScrolltext}>دلچسپ و عجیب</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.CategoryContainer, {width: 120}]}
            onPress={() => {
              navigation.navigate('عالمی خبریں');
            }}>
            <Text style={styles.midScrolltext}>عالمی خبریں</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.CategoryContainer, {width: 120}]}
            onPress={() => {
              navigation.navigate('قومی خبریں');
            }}>
            <Text style={styles.midScrolltext}>قومی خبریں</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.CategoryContainer, {width: 130}]}
            onPress={() => {
              navigation.navigate('سائنس اور ٹیکنالوجی');
            }}>
            <Text style={styles.midScrolltext}>سائنس اور ٹیکنالوجی</Text>
          </TouchableOpacity>
          <View style={{width: 20}}></View>
        </ScrollView>
      </View>

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
                activeOpacity={1}
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
                    {htmlData(item.content.rendered)}
                  </Text>
                  {/* <View
                    style={{
                      width: '100%',
                      height: 50,
                      marginBottom: 12,
                    }}>
                    <WebView
                      scrollEnabled={false}
                      source={{html: htmlData(item.content.rendered)}}
                      style={{

                      }}
                    />
                  </View> */}
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
