import React from 'react';
import {StyleSheet} from 'react-native';
import {moderateScale} from '../../Theme/Dimensions';
import Theme from '../../Theme/Theme';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  imageContainer: {
    // backgroundColor: 'red',
    height: moderateScale(150),
    width: '100%',
    borderBottomColor: Theme.colors.blackColor,
    borderBottomWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: moderateScale(100),
    width: moderateScale(100),
    borderRadius: moderateScale(50),
  },
  drawerHeadingText: {
    fontSize: Theme.fontSizes.xmedium,
    fontFamily: Theme.fontFamily.bold,
    color: Theme.colors.primaryColor,
    padding: '5%',
  },
});
export default styles;
