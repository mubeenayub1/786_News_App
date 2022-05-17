import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: '100%',
    backgroundColor: '#cb0003',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '95%',
    backgroundColor: '#cb0003',
    height: '100%',
  },
  headerText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xbig,
    fontFamily: Theme.fontFamily.urdu,
    alignSelf: 'center',
  },
  Container: {
    width: '100%',
    height: (height / 100) * 92,
    backgroundColor: Theme.colors.whiteColor,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  CardContainer: {
    width: '95%',
    height: moderateScale(350),
    backgroundColor: 'white',
    marginTop: moderateScale(20),
    marginLeft: '2.5%',
    borderRadius: moderateScale(5),
    elevation: 5,
    overflow: 'hidden',
    // flexDirection: 'row',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
    resizeMode: 'contain',
  },
  cardtextContainer: {
    width: '100%',
    paddingHorizontal: moderateScale(5),
    height: '30%',
    // marginHorizontal: '2.5%',
    overflow: 'hidden',
  },
  cardHeadingText: {
    fontSize: Theme.fontSizes.xmedium,
    // backgroundColor: 'red',
    color: Theme.colors.primaryColor,
    height: '70%',
    marginHorizontal: moderateScale(5),
    fontFamily: Theme.fontFamily.urdu,
    // marginTop: '2.5%',
  },
  cardTimeContainer: {
    height: '20%',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(5),
    // marginHorizontal: '5%',
  },
  timeText: {
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.grayColor,
    fontFamily: Theme.fontFamily.regular,
    width: '85%',
    // marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // height: 50,
    width: '15%',
    alignItems: 'center',
  },
});
export default styles;
