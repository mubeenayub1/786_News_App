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
} from 'react-native';
import axios from 'axios';
import moment from 'moment';
import {Icon} from 'react-native-elements';
import styles from './styles';

const MainScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const fillIcon = () => {
    setShow(!show);
  };
  const [trending, Settrending] = useState([]);
  const [date, setDate] = useState('');
  const [story, setStory] = useState([]);
  useEffect(() => {
    fechApi();
    TopStories();
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
        console.log('success');
        // console.log(response.data[0]);
        Settrending(response.data);
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
  const TopStories = () => {
    var config = {
      method: 'get',
      url: 'http://786news.com.pk/wp-json/wp/v2/posts?categories=7318',
      headers: {},
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setStory(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          <View style={styles.searchIcon}>
            <Icon
              name="search"
              type="feather"
              size={24}
              color="grey"
              onPress={() => {}}
            />
          </View>
          <TextInput
            style={styles.search}
            placeholder="Search for News"
            maxLength={20}
          />
          <Icon name="menu" type="feather" size={30} color="transparent" />
        </View>
      </View>
      {/* midScrollConatiner */}

      <View style={styles.midScrollConatiner}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[styles.midScrollButton, {backgroundColor: '#cb0003'}]}>
            <Text style={[styles.midScrolltext, {color: 'white'}]}>
              General
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.midScrollButton}
            onPress={() => {
              navigation.navigate('Politics');
            }}>
            <Text style={styles.midScrolltext}>Politics</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.midScrollButton}
            onPress={() => {
              navigation.navigate('Sports');
            }}>
            <Text style={styles.midScrolltext}>Sports</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.midScrollButton}
            onPress={() => {
              navigation.navigate('Science');
            }}>
            <Text style={styles.midScrolltext}>Science</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.midScrollButton, {width: 120}]}
            onPress={() => {
              navigation.navigate('Entertainment');
            }}>
            <Text style={styles.midScrolltext}>Entertainment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.midScrollButton, {width: 120}]}
            onPress={() => {
              navigation.navigate('Technology');
            }}>
            <Text style={styles.midScrolltext}>Technology</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.midScrollButton, {width: 120}]}
            onPress={() => {
              navigation.navigate('World');
            }}>
            <Text style={styles.midScrolltext}>World Wide</Text>
          </TouchableOpacity>
          <View style={{width: 20}}></View>
        </ScrollView>
      </View>

      {/* Horizontal Scroll section */}
      <View style={styles.midContainer}>
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
        <FlatList
          data={story}
          horizontal
          pagingEnabled={true}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.horizontalScrollComponent}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <ImageBackground
                  source={{uri: item.jetpack_featured_media_urls}}
                  style={styles.horizontalComponentImage}>
                  <View style={styles.horizontalComponentIcon}>
                    <Icon
                      name={show ? 'bookmark' : 'bookmark-outline'}
                      type="ionicons"
                      size={28}
                      color="white"
                      style={{}}
                      onPress={() => {
                        fillIcon();
                      }}
                    />
                  </View>
                </ImageBackground>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={styles.endheader}>
        <Text style={styles.endText}>Trending</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Trending');
          }}
          style={styles.viewAllContainer}>
          <Text style={styles.endText1}>View All</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        // ListHeaderComponent={() => {
        //   return (
        //     <>
        //       <View style={styles.midContainer}>
        //         <View style={styles.midView}>
        //           <Text style={styles.midText}>Top Stories</Text>
        //           <TouchableOpacity
        //             onPress={() => {
        //               navigation.navigate('TopStories');
        //             }}
        //             style={styles.viewAllContainer}>
        //             <Text style={styles.endText1}>View All</Text>
        //           </TouchableOpacity>
        //         </View>
        //         <FlatList
        //           data={story}
        //           renderItem={({item}) => {
        //             return (
        //               <TouchableOpacity
        //                 style={styles.horizontalScrollComponent}
        //                 onPress={() => {
        //                   navigation.navigate('DetailScreen');
        //                 }}>
        //                 <ImageBackground
        //                   source={{uri: item.jetpack_featured_media_urls}}
        //                   style={styles.horizontalComponentImage}>
        //                   <View style={styles.horizontalComponentIcon}>
        //                     <Icon
        //                       name={show ? 'bookmark' : 'bookmark-outline'}
        //                       type="ionicons"
        //                       size={28}
        //                       color="white"
        //                       style={{}}
        //                       onPress={() => {
        //                         fillIcon();
        //                       }}
        //                     />
        //                   </View>
        //                 </ImageBackground>
        //               </TouchableOpacity>
        //             );
        //           }}
        //         />
        //       </View>
        //       <View style={styles.endheader}>
        //         <Text style={styles.endText}>Trending</Text>
        //         <TouchableOpacity
        //           onPress={() => {
        //             navigation.navigate('Trending');
        //           }}
        //           style={styles.viewAllContainer}>
        //           <Text style={styles.endText1}>View All</Text>
        //         </TouchableOpacity>
        //       </View>
        //     </>
        //   );
        // }}
        data={trending}
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
                  <Text style={styles.cardMainText}>{item.title.rendered}</Text>
                </View>
                <Text style={styles.scrollText}>{item.content.rendered}</Text>
                <View style={styles.cardTimeContainer}>
                  <Text style={styles.scrollText1}>{item.date}</Text>
                </View>
              </View>
              <Image
                style={styles.scrollImage}
                source={{uri: item.jetpack_featured_media_url}}
              />
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{
          paddingBottom: 20,
        }}
      />
    </View>
  );
};
export default MainScreen;
