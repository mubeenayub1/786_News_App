import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import styles from '../styles';

const Categories = ({navigation}) => {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <TouchableOpacity
        style={[styles.CategoryContainer, {backgroundColor: '#cb0003'}]}>
        <Text style={[styles.midScrolltext, {color: 'white'}]}>جنرل</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('بزنس');
        }}>
        <Text style={styles.midScrolltext}>بزنس</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('کرکٹ');
        }}>
        <Text style={styles.midScrolltext}>کرکٹ</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('تعلیم');
        }}>
        <Text style={styles.midScrolltext}>تعلیم</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('صحت');
        }}>
        <Text style={styles.midScrolltext}>صحت</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('پکوان');
        }}>
        <Text style={styles.midScrolltext}>پکوان</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('مذہب');
        }}>
        <Text style={styles.midScrolltext}>مذہب</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('موسم');
        }}>
        <Text style={styles.midScrolltext}>موسم</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('شوبز');
        }}>
        <Text style={styles.midScrolltext}>شوبز</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.CategoryContainer}
        onPress={() => {
          navigation.navigate('کھیل');
        }}>
        <Text style={styles.midScrolltext}>کھیل</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.CategoryContainer, {width: 120}]}
        onPress={() => {
          navigation.navigate('دلچسپ و عجیب');
        }}>
        <Text style={styles.midScrolltext}>دلچسپ و عجیب</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.CategoryContainer, {width: 120}]}
        onPress={() => {
          navigation.navigate('عالمی خبریں');
        }}>
        <Text style={styles.midScrolltext}>عالمی خبریں</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.CategoryContainer, {width: 120}]}
        onPress={() => {
          navigation.navigate('قومی خبریں');
        }}>
        <Text style={styles.midScrolltext}>قومی خبریں</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.CategoryContainer, {width: 130}]}
        onPress={() => {
          navigation.navigate('سائنس اور ٹیکنالوجی');
        }}>
        <Text style={styles.midScrolltext}>سائنس اور ٹیکنالوجی</Text>
      </TouchableOpacity>
      <View style={{width: 20}}></View>
    </ScrollView>
  );
};
export default Categories;
