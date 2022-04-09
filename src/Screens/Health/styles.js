import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
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
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  Container: {
    width: '100%',
    height: (height / 100) * 92,
    // backgroundColor: 'green',
    // alignItems: 'center',
  },
  scrollcom: {
    width: '95%',
    height: 300,
    backgroundColor: 'white',
    marginTop: '5%',
    marginLeft: '2.5%',
    borderRadius: 5,
    // flexDirection: 'row',
  },
  scrollImage: {
    width: '100%',
    height: '70%',
    borderRadius: 5,
  },
  scrollText: {
    fontSize: 18,
    color: '#221f1f',
    height: '50%',
    fontFamily: 'Roboto-Medium',
    marginTop: '2.5%',
  },
  scrollText1: {
    fontSize: 14,
    // color: '#221f1f',
    fontFamily: 'Roboto-Regular',
    width: '70%',
    // marginRight: 10,
  },
});
export default styles;
