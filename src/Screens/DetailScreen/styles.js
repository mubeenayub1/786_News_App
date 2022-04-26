import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: Theme.colors.whiteColor,
  },
  headerConatiner: {
    height: (height / 100) * 8,
    width: '100%',
    backgroundColor: Theme.colors.primaryColor,
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
    color: 'white',
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    // fontWeight: 'bold',
    alignSelf: 'center',
  },

  detailImageContainer: {
    height: (height / 100) * 42,
    width: '100%',
    // backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    overflow: 'scroll',
    // backgroundColor: 'blue',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  textContainer: {
    width: '95%',
    // backgroundColor: 'grey',
    height: '30%',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  detailTextContainer: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: moderateScale(300),
    paddingHorizontal: moderateScale(10),
    // height: (height / 100) * 25,
    // backgroundColor: 'white',
  },
  detailText: {
    color: Theme.colors.secondaryColor,
    fontFamily: Theme.fontFamily.urdu,
    fontSize: Theme.fontSizes.xxmedium,
  },
  headingText: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.xxmedium,
    height: '70%',
    width: '100%',
    fontFamily: Theme.fontFamily.urdu,
    // textTransform: 'uppercase',
  },
  timeContainer: {
    flexDirection: 'row',
    height: '25%',
    alignItems: 'flex-end',
  },
  time: {
    fontFamily: Theme.fontFamily.regular,
    fontSize: Theme.fontSizes.small,
    color: Theme.colors.grayColor,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '15%',
    alignItems: 'flex-end',
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
  midScrollCom: {
    height: '100%',
    width: '100%',
    marginHorizontal: '5%',
    backgroundColor: 'blue',
  },
  endContainer: {
    height: (height / 100) * 30,
    // backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
  },
  endheader: {
    height: 30,
    width: '90%',
    // alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'white',
    marginHorizontal: '5%',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  endText: {
    color: '#221f1f',
    fontSize: 19,
    fontFamily: 'Roboto-Medium',
  },
  scrollcom: {
    width: '90%',
    height: '30%',
    backgroundColor: 'red',
  },
});
export default styles;
