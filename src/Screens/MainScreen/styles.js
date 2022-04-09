import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  headerConatiner: {
    height: (height / 100) * 15,
    width: width,
    backgroundColor: Theme.colors.primaryColor,
    alignItems: 'center',
    paddingBottom: moderateScale(16),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: (width / 100) * 90,
    height: '60%',
  },
  headerText: {
    color: Theme.colors.whiteColor,
    fontSize: Theme.fontSizes.xbig,
    fontFamily: Theme.fontFamily.bold,
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    width: (width / 100) * 90,
    height: moderateScale(45),
    backgroundColor: Theme.colors.whiteColor,
    alignItems: 'center',
    borderRadius: moderateScale(25),
  },
  search: {
    height: '100%',
    fontFamily: Theme.fontFamily.regular,
    alignSelf: 'center',
    fontSize: Theme.fontSizes.xxmedium,
    borderColor: 'grey',
    width: '85%',
  },
  searchIcon: {
    width: moderateScale(45),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  midScrollConatiner: {
    height: (height / 100) * 8,
    width: width,
  },
  midScrollButton: {
    height: moderateScale(40),
    width: moderateScale(90),
    backgroundColor: 'white',
    marginLeft: moderateScale(20),
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: moderateScale(10),
  },
  midScrolltext: {
    fontSize: Theme.fontSizes.xmedium,
    color: Theme.colors.textColor,
    fontFamily: Theme.fontFamily.medium,
  },
  midContainer: {
    height: (height / 100) * 30,
    width: '100%',
    flexDirection: 'column',
  },
  midView: {
    width: '95%',
    height: '25%',
    alignItems: 'center',
    paddingHorizontal: '5%',
    flexDirection: 'row',
  },
  midText: {
    color: '#221f1f',
    fontSize: Theme.fontSizes.xxmedium,
    fontFamily: 'Roboto-Medium',
    width: '80%',
    // fontWeight: 'bold',
  },
  midScrollCom: {
    height: moderateScale(160),
    width: moderateScale(240),
    marginHorizontal: moderateScale(20),
    backgroundColor: 'blue',
    borderRadius: moderateScale(5),
  },
  endContainer: {
    height: (height / 100) * 50,

    width: width,
  },
  endheader: {
    height: '20%',
    width: '90%',
    alignItems: 'center',
    marginHorizontal: '5%',
    flexDirection: 'row',
  },
  endText: {
    color: '#221f1f',
    fontSize: Theme.fontSizes.xxmedium,
    fontFamily: Theme.fontFamily.medium,
    width: '75%',
  },
  endText1: {
    color: Theme.colors.primaryColor,
    fontSize: Theme.fontSizes.medium,
    fontFamily: Theme.fontFamily.bold,
  },
  scrollcom: {
    width: '90%',
    height: moderateScale(150),
    backgroundColor: 'white',
    marginVertical: '2.5%',
    marginLeft: '5%',
    borderRadius: moderateScale(5),
    flexDirection: 'row',
  },
  cardContainer: {
    width: '60%',
    paddingHorizontal: '1%',
    height: '100%',
  },
  cardMainTextContainer: {
    height: '30%',
    marginHorizontal: '2.5%',
    justifyContent: 'center',
  },
  cardMainText: {
    color: '#cb0003',
    fontFamily: 'Roboto-Medium',
    fontSize: 19,
  },
  scrollText: {
    fontSize: 16,
    color: '#221f1f',
    height: '50%',
    fontFamily: 'Roboto-Regular',
  },
  scrollText1: {
    fontSize: 14,
    // color: '#221f1f',
    fontFamily: 'Roboto-Regular',
    marginRight: 10,
  },
  scrollImage: {
    width: '40%',
    height: '100%',
    borderRadius: 5,
  },
  cardTimeContainer: {
    height: '20%',
    width: '100%',
    // justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingBottom: '5%',
    flexDirection: 'row',
  },
});
export default styles;
