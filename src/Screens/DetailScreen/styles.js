import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
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
    fontSize: 22,
    fontFamily: 'Roboto-Medium',
    // fontWeight: 'bold',
    alignSelf: 'center',
  },

  midContainer: {
    height: (height / 100) * 42,
    width: '100%',
    // backgroundColor: 'white',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  midView: {
    width: '100%',
    height: '70%',
    // backgroundColor: 'blue',
  },
  midPhoto: {
    width: '100%',
    height: '100%',
  },
  midText: {
    color: '#221f1f',
    fontSize: 18,
    height: '70%',
    width: '100%',
    fontFamily: 'Roboto-Bold',
    textTransform: 'uppercase',
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
