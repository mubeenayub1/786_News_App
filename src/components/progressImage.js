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
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            marginTop: moderateScale(10),
          }}>
          <View
            style={{
              height: moderateScale(245),
              width: moderateScale(360),
              paddingHorizontal: moderateScale(5),
              borderRadius: moderateScale(5),
              marginLeft: moderateScale(10),
            }}></View>
        </View>
      </SkeletonPlaceholder>
    </ScrollView>
  );
};
export default ProgressImage;
