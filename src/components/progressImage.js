import React from 'react';
import {View, Text, ScrollView, TextInput} from 'react-native';

import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {moderateScale} from '../Theme/Dimensions';

const ProgressImage = () => {
  return (
    <ScrollView
      style={{
        flex: 1,
      }}
      horizontal={true}
      showsVerticalScrollIndicator={false}>
      <SkeletonPlaceholder>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
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
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '95%',
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
  );
};
export default ProgressImage;
