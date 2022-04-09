import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

import {Icon} from 'react-native-elements';
import styles from './styles';

const MainScreen = ({navigation}) => {
  const [show, setShow] = useState(false);
  const fillIcon = () => {
    setShow(!show);
  };
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
        scrollEventThrottle={13}>
        <View style={styles.midContainer}>
          <View style={styles.midView}>
            <Text style={styles.midText}>Top Stories</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('TopStories');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                backgroundColor: 'white',
                height: 30,
                borderRadius: 25,
              }}>
              <Text style={styles.endText1}>View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity
              style={styles.midScrollCom}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <ImageBackground
                source={require('../../assests/image7.jpg')}
                style={{
                  width: 240,
                  height: 160,
                  borderRadius: 5,
                  overflow: 'hidden',
                }}>
                <View
                  style={{
                    height: 50,
                    width: '95%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
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
                  {/* <Icon
                  name="share"
                  type="entypo"
                  size={24}
                  color="white"
                  onPress={() => {}}
                /> */}
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.midScrollCom}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <ImageBackground
                source={require('../../assests/image3.jpg')}
                imageStyle={{borderRadius: 5}}
                style={{width: 240, height: 160, borderRadius: 5}}>
                <View
                  style={{
                    height: 50,
                    width: '95%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
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
                  {/* <Icon
              name="share"
              type="entypo"
              size={24}
              color="white"
              onPress={() => {}}
            /> */}
                </View>
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.midScrollCom}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <ImageBackground
                source={require('../../assests/image4.jpg')}
                imageStyle={{borderRadius: 5}}
                style={{width: 240, height: 160, borderRadius: 5}}>
                <View
                  style={{
                    height: 50,
                    width: '95%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
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
            <TouchableOpacity
              style={styles.midScrollCom}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <ImageBackground
                source={require('../../assests/image5.jpg')}
                imageStyle={{borderRadius: 5}}
                style={{width: 240, height: 160, borderRadius: 5}}>
                <View
                  style={{
                    height: 50,
                    width: '95%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
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
            <TouchableOpacity
              style={styles.midScrollCom}
              onPress={() => {
                navigation.navigate('DetailScreen');
              }}>
              <ImageBackground
                source={require('../../assests/image6.jpg')}
                imageStyle={{borderRadius: 5}}
                style={{
                  width: 240,
                  height: 160,
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    height: 50,
                    width: '95%',
                    flexDirection: 'row',
                    justifyContent: 'flex-end',
                    marginTop: 5,
                  }}>
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
            <View style={{height: 50, width: 20}}></View>
          </ScrollView>
        </View>

        {/* vertical Scroll section */}
        <View style={styles.endContainer}>
          <View style={styles.endheader}>
            <Text style={styles.endText}>Trending</Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Trending');
              }}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 80,
                backgroundColor: 'white',
                height: 30,
                borderRadius: 25,
              }}>
              <Text style={styles.endText1}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{height: '100%', width: '100%'}}>
            <ScrollView
              style={{flex: 1}}
              showsVerticalScrollIndicator={false}
              nestedScrollEnabled={true}>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View style={styles.cardContainer}>
                  <View style={styles.cardMainTextContainer}>
                    <Text style={styles.cardMainText}>Politics</Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View style={styles.cardTimeContainer}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image8.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: '1%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '30%',
                      marginHorizontal: '2.5%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#cb0003',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 19,
                      }}>
                      Sports
                    </Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      // justifyContent: 'space-evenly',
                      alignItems: 'center',
                      paddingBottom: '5%',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image10.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: '1%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '30%',
                      marginHorizontal: '2.5%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#cb0003',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 19,
                      }}>
                      Medical
                    </Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      // justifyContent: 'space-evenly',
                      alignItems: 'center',
                      paddingBottom: '5%',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image7.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: '1%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '30%',
                      marginHorizontal: '2.5%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#cb0003',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 19,
                      }}>
                      World Wide
                    </Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      // justifyContent: 'space-evenly',
                      alignItems: 'center',
                      paddingBottom: '5%',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image6.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: '1%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '30%',
                      marginHorizontal: '2.5%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#cb0003',
                        fontFamily: 'Roboto-Medium',
                        fontSize: 19,
                      }}>
                      Science
                    </Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      // justifyContent: 'space-evenly',
                      alignItems: 'center',
                      paddingBottom: '5%',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image5.jpg')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.scrollcom}
                onPress={() => {
                  navigation.navigate('DetailScreen');
                }}>
                <View
                  style={{
                    width: '60%',
                    paddingHorizontal: '1%',
                    height: '100%',
                  }}>
                  <View
                    style={{
                      height: '30%',
                      marginHorizontal: '2.5%',
                      justifyContent: 'center',
                    }}>
                    <Text
                      style={{
                        color: '#cb0003',
                        fontFamily: 'Jameel Noori Nastaleeq Regular',
                        fontSize: 19,
                      }}>
                      سیاست
                    </Text>
                  </View>
                  <Text style={styles.scrollText}>
                    lorem ipsum generator for future-of-news. lorem ipsum .news.
                  </Text>
                  <View
                    style={{
                      height: '20%',
                      width: '100%',
                      // justifyContent: 'space-evenly',
                      alignItems: 'center',
                      paddingBottom: '5%',
                      flexDirection: 'row',
                    }}>
                    <Text style={styles.scrollText1}>4 hour ago</Text>
                  </View>
                </View>
                <Image
                  style={styles.scrollImage}
                  source={require('../../assests/image4.jpg')}
                />
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
        <View style={{height: 100}}></View>
      </ScrollView>
    </View>
  );
};
export default MainScreen;
