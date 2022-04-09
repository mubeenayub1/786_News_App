import React, {useEffect} from 'react';
import * as Animatable from 'react-native-animatable';
// import * as Animatable from 'react-native-animatable';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

import Theme from '../../Theme/Theme';
import {moderateScale} from '../../Theme/Dimensions';
const {height, width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('MainScreen');
    }, 2000);
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.animate}>
        <Animatable.View
          animation="pulse"
          easing="ease-out"
          iterationCount="infinite"
          direction="alternate">
          <Image
            source={require('../../assests/image1.jpeg')}
            style={styles.photo}
          />
        </Animatable.View>
      </View>
      <View style={styles.textView}>
        <Text style={styles.text}>خبر دنیا بھر کی۔</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: height,
    width: width,
  },
  animate: {
    height: (height / 100) * 60,
    width: width,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  photo: {
    borderRadius: moderateScale(100),
    height: moderateScale(200),
    width: moderateScale(200),
  },
  textView: {
    width: width,
    marginTop: moderateScale(30),
    height: (height / 100) * 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: Theme.fontSizes.xxbig,
    fontFamily: Theme.fontFamily.urdu,
    color: Theme.colors.textColor,
  },
});

export default Splash;
